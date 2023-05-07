import express from "express";
import { publicRoutes } from "./routes/publicRoutes";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).send("ok");
});

app.use("/", publicRoutes);

export { app };
