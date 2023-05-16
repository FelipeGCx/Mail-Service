import express from "express";
import * as service from "./service";

const router = express.Router();

// route to get the email sender client
router.get("/email", (_req, res) => {
  res.send(service.getUserEmail());
});
// route to send email from portfolio contact
router.post("/send", async (req, res) => {
  const content = req.body;
  const result = await service.sendMessage(content);
  res.send(result);
});
export default router;
