import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Default message from nodejs-express-api-server." });
});

app.get("/:name", (req, res) => {
  res.status(200).json({ message: `Your name is ${req.params.name}` });
});

export default app;