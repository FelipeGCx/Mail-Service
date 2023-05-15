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
  let res: string = "";
  await transporter
    .sendMail({
      from: process.env.USER_EMAIL,
      to: process.env.RECEPTOR_EMAIL,
      // cc: content.email,
      subject: "Contact to Services",
      text: content.message,
      // html: "<strong>Hello world?</strong>",
      // headers: { "x-myheader": "test header" },
    })
    .then((_res: any) => {
      res = "Message sended successfully";
    })
    .catch((_err: any) => {
      res = "Somenthing fail";
    });
  return res;
};
