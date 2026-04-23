import cors from "cors";
import express from "express";
import { userRouter } from "./routes/userRoutes.js";

export function createApp() {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.get("/health", (_req, res) => {
    res.json({ service: "tradeflow-user-service", status: "ok" });
  });

  // app.use("/api/users", userRouter);
  app.use("/api/users", userRouter);

  return app;
}
