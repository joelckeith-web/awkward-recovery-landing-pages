import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      name,
      phone,
      email,
      helpMessage,
      referralSource,
      leadSource,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content,
    } = body;

    // Validate required fields
    if (!name || !phone || !email || !referralSource) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // ---------------------------------------------------------------
    // Forward to in-house staff
    // ---------------------------------------------------------------
    // Option 1: Email forwarding via a transactional email service
    //           (e.g., Resend, SendGrid, Mailgun)
    //
    // Option 2: Webhook to CRM (e.g., HubSpot, Salesforce, GoHighLevel)
    //
    // Option 3: Forward to a Google Apps Script or Zapier webhook
    //
    // Replace the placeholder below with the actual forwarding logic.
    // ---------------------------------------------------------------

    const forwardPayload = {
      name,
      phone,
      email,
      message: helpMessage || "No message provided",
      referralSource,
      leadSource: leadSource || "Substance Abuse LP",
      utm: {
        source: utm_source || "",
        medium: utm_medium || "",
        campaign: utm_campaign || "",
        term: utm_term || "",
        content: utm_content || "",
      },
      submittedAt: new Date().toISOString(),
    };

    // TODO: Replace with actual email/webhook endpoint
    // Example with a webhook:
    //
    // const webhookUrl = process.env.FORM_WEBHOOK_URL;
    // if (webhookUrl) {
    //   await fetch(webhookUrl, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(forwardPayload),
    //   });
    // }

    console.log("[Contact Form Submission]", forwardPayload);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Contact Form Error]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
