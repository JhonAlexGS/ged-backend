import nodemailer from 'nodemailer';
import { USER_EMAIL, PASSWORD_EMAIL} from "../config.js"

const transporter = nodemailer.createTransport({
  service: 'gmail', // o "outlook", "hotmail", etc.
  auth: {
    user: USER_EMAIL,
    pass: PASSWORD_EMAIL,
  },
});

export const sendEmail = async ({ to, subject, html }) => {
  try {
    const info = await transporter.sendMail({
      from: '"Conservatorio" <tucorreo@gmail.com>',
      to,
      subject,
      html,
    });

    console.log('Correo enviado:', info.messageId);
  } catch (err) {
    console.error('Error al enviar correo:', err);
    throw err;
  }
};
