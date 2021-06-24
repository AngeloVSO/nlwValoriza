import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import "./database";
import { router } from "./routes";

export const app = express();

app.use(express.json());

app.use(router);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof Error) {
    return res.status(400).send({ message: error.message });
  }

  return res
    .status(500)
    .send({ status: "error", message: "Internal server error" });
});

app.listen(3003, () => {
  console.log("Server is running");
});
