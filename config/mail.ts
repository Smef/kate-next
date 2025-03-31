export const MAIL_CONFIG = {
  default: process.env.MAIL_MAILER ?? "smtp",
  mailFrom: process.env.MAIL_FROM ?? "Contact Form <no-reply@katenahodyl.com>",
  contactEmailTo: process.env.MAIL_CONTACT_EMAIL_TO ?? "david.nahodyl@gmail.com",
  smtp: {
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
  resend: {
    apiKey: process.env.RESEND_API_KEY,
  },
} as const;