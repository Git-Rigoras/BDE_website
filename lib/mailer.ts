import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: Number(process.env.EMAIL_PORT) === 465,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendMail = async () => {
  return await transporter.sendMail({
    from: '"Infernal" <no-reply@teaminfernal.fr>',
    to: process.env.EMAIL_CONTACT_USER,
    subject: "Prise de contact",
    text: "Test",
  });
};
