import nodemailer from 'nodemailer';
import { USER_EMAIL, PASSWORD_EMAIL} from "../config.js"
import fs from 'fs';
import path from 'path';
import handlebars from 'hbs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const transporter = nodemailer.createTransport({
  service: 'gmail', // o "outlook", "hotmail", etc.
  auth: {
    user: USER_EMAIL,
    pass: PASSWORD_EMAIL,
  },
});

export const sendEmail = async ({ to, subject, templateName, context }) => {


  const templatePath = path.join(__dirname, '../templates', `${templateName}.hbs`);
  const source = fs.readFileSync(templatePath, 'utf-8');
  const compiledTemplate = handlebars.compile(source);
  const html = compiledTemplate(context);

  await transporter.sendMail({
    from: `"GED-SAS" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html,
  });
};
