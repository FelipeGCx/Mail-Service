import express from "express";
import router from "./router";

const app = express();
const apiVersion = "/api/v1";

app.use(express.json());

const PORT = 3002;

app.get("/ping", (_req, res) => {
  res.send("pong");
});

app.use(`${apiVersion}/mail`, router);

app.listen(PORT, "localhost", () => {
  const url = `http://localhost:${PORT}/`;
  console.log(`🚀🏁 Server ready at ${url}`);
});
