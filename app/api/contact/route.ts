import { NextRequest, NextResponse } from "next/server";
import Mailjet from "node-mailjet";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: NextRequest) {
  const mailjet = new Mailjet({
    apiKey: process.env.MAILJET_API_KEY!,
    apiSecret: process.env.MAILJET_SECRET_KEY!,
  });
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { name, email, message } = await req.json();

  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }

  // Store in Supabase
  const { error: dbError } = await supabase
    .from("leads")
    .insert({ name, email, message });

  if (dbError) {
    console.error("Supabase error:", dbError);
    return NextResponse.json({ error: "Failed to save your request." }, { status: 500 });
  }

  // Send email notification via Mailjet
  try {
    await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: { Email: process.env.EMAIL_FROM!, Name: "Veranota" },
          To: [{ Email: process.env.EMAIL_FROM! }],
          ReplyTo: { Email: email, Name: name },
          Subject: `New early access request from ${name}`,
          HTMLPart: `
            <div style="font-family: sans-serif; max-width: 480px; color: #111;">
              <h2 style="color: #013A6B; margin-bottom: 4px;">New Early Access Request</h2>
              <p style="color: #888; font-size: 13px; margin-top: 0;">Received via Veranota waitlist</p>
              <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #00CED1;">${email}</a></p>
              <p><strong>Message:</strong> ${message || "—"}</p>
              <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
              <p style="font-size: 12px; color: #aaa;">Reply to this email to respond directly to ${name}.</p>
            </div>
          `,
        },
      ],
    });
    console.log("Mailjet success: email sent to", process.env.EMAIL_FROM);
  } catch (err) {
    console.error("Mailjet error:", JSON.stringify(err));
  }

  return NextResponse.json({ success: true });
}
