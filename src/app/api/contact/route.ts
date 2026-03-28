import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormBody {
  name: string;
  phone: string;
  email: string;
  helpMessage?: string;
  referralSource: string;
  leadSource: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

export async function POST(request: NextRequest) {
  try {
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error("SMTP_USER or SMTP_PASS is not set");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const body: ContactFormBody = await request.json();

    const { name, phone, email, helpMessage, referralSource, leadSource } =
      body;

    if (!name || !phone || !email || !referralSource) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const utmSection =
      body.utm_source || body.utm_medium || body.utm_campaign
        ? `
── Campaign Info ──────────────────────────
Source:   ${body.utm_source || "(not set)"}
Medium:   ${body.utm_medium || "(not set)"}
Campaign: ${body.utm_campaign || "(not set)"}
Term:     ${body.utm_term || "(not set)"}
Content:  ${body.utm_content || "(not set)"}
`
        : "";

    const emailBody = `New lead from the Awkward Recovery landing page!

── Contact Details ────────────────────────
Name:    ${name}
Phone:   ${phone}
Email:   ${email}

── Request Details ────────────────────────
How Can We Help: ${helpMessage || "(not provided)"}
How They Found Us: ${referralSource}
Lead Source: ${leadSource || "Substance Abuse LP"}
${utmSection}
──────────────────────────────────────────
Sent from: ${leadSource || "Substance Abuse Treatment LP"}
Submitted: ${new Date().toISOString()}
`;

    const contactEmails = (
      process.env.CONTACT_EMAIL || "info@awkwardrecovery.com"
    )
      .split(",")
      .map((e) => e.trim())
      .join(", ");

    await transporter.sendMail({
      from: `Awkward Recovery Leads <${process.env.SMTP_USER}>`,
      to: contactEmails,
      replyTo: email,
      subject: `New Lead: Substance Abuse Treatment — ${name} (${phone})`,
      text: emailBody,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      {
        error: "Internal server error",
        detail: err instanceof Error ? err.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
