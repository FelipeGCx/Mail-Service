import * as dotenv from "dotenv";
import { Content } from "./types";
const nodemailer = require("nodemailer");
dotenv.config();

//* logic to send emails

const transporter = nodemailer.createTransport({
  service: process.env.SERVICE,
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.PASSWORD,
  },
});

export const getUserEmail = (): string | undefined => {
  return process.env.USER_EMAIL?.toString();
};

export const sendMessage = async (content: Content): Promise<string> => {
  return await transporter
    .sendMail({
      from: process.env.USER_EMAIL,
      to: process.env.RECEPTOR_EMAIL,
      // cc: content.email,
      subject: `${content.name} want contact with you to your services`,
      html: `<h1>Message Sended by: ${content.name}</h1><h2>With Email: ${content.email}</h2><h2>Message: ${content.message}</h2>`,
      // headers: { "x-myheader": "test header" },
    })
    .then((_res: any) => {
      return "Message sended successfully";
    })
    .catch((_err: any) => {
      return "Somenthing fail";
    });
};
