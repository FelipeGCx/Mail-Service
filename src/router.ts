import express from "express";
import * as service from "./service";

const router = express.Router();

// route to get the email sender client
router.get("/email", (_req, res) => {
  res.send(service.getUserEmail());
});
// route to send email from portfolio contact
router.post("/send", (req, res) => {
  const content = req.body;
  res.send(service.sendMessage(content));
});
export default router;
