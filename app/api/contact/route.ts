import ContactEmail from "@/components/email/ContactEmail";
import { NextRequest } from "next/server";
import { Resend } from "resend";
import { MAIL_CONFIG } from "@/config";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  try {
    const { data, error } = await resend.emails.send({
      from: MAIL_CONFIG.mailFrom,
      to: [MAIL_CONFIG.contactEmailTo],
      subject: "Hello world",
      react: ContactEmail({ name: name as string }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
