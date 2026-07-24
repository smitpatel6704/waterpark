const MAX_LENGTHS = {
  name: 100,
  phone: 30,
  email: 160,
  message: 2000,
} as const;

function readField(
  value: unknown,
  field: keyof typeof MAX_LENGTHS,
  required = false
) {
  if (typeof value !== "string") {
    return required ? null : "";
  }

  const normalized = value.trim();
  if (
    (required && normalized.length === 0) ||
    normalized.length > MAX_LENGTHS[field]
  ) {
    return null;
  }

  return normalized;
}

export async function POST(request: Request) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!webhookUrl) {
    return Response.json(
      { message: "Contact form storage is not configured." },
      { status: 503 }
    );
  }

  let parsedWebhookUrl: URL;
  try {
    parsedWebhookUrl = new URL(webhookUrl);
  } catch {
    return Response.json(
      {
        message:
          "Google Sheets is not configured correctly. A deployed Apps Script webhook URL is required.",
      },
      { status: 503 }
    );
  }

  if (
    parsedWebhookUrl.protocol !== "https:" ||
    parsedWebhookUrl.hostname !== "script.google.com" ||
    !parsedWebhookUrl.pathname.endsWith("/exec")
  ) {
    return Response.json(
      {
        message:
          "Google Sheets is not configured correctly. Use the Apps Script Web App URL ending in /exec.",
      },
      { status: 503 }
    );
  }

  try {
    const body = (await request.json()) as Record<string, unknown>;

    // A hidden field filled by bots should always remain empty for real visitors.
    if (typeof body.website === "string" && body.website.trim()) {
      return Response.json({ message: "Message received." });
    }

    const name = readField(body.name, "name", true);
    const phone = readField(body.phone, "phone", true);
    const email = readField(body.email, "email", true);
    const message = readField(body.message, "message");

    if (!name || !phone || !email || message === null) {
      return Response.json(
        { message: "Please check the form fields and try again." },
        { status: 400 }
      );
    }

    if (!/^\d{10}$/.test(phone)) {
      return Response.json(
        { message: "Please enter a valid 10-digit mobile number." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json(
        { message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const sheetPayload = new URLSearchParams({
      timestamp: new Date().toISOString(),
      name,
      phone,
      email,
      message: message || "",
      source: "Aquatown website",
    });

    const sheetResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: sheetPayload,
      cache: "no-store",
      redirect: "follow",
    });

    if (sheetResponse.status === 401 || sheetResponse.status === 403) {
      return Response.json(
        {
          message:
            'Google Sheets access is restricted. Redeploy the Apps Script Web App with access set to "Anyone".',
        },
        { status: 503 }
      );
    }

    if (!sheetResponse.ok) {
      throw new Error(`Google Sheets webhook returned ${sheetResponse.status}`);
    }

    return Response.json({ message: "Thanks! Your message has been sent." });
  } catch (error) {
    console.error("Contact form submission failed:", error);
    return Response.json(
      { message: "We couldn't send your message. Please try again." },
      { status: 502 }
    );
  }
}
