import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import notesRoutes from "./routes/notes";
import morgan from "morgan";
import { isHttpError } from "http-errors";
import cors from "cors";

const app = express();

app.use(cors())
app.use(morgan("dev"));

app.use(express.json());

app.use("/api/notes", notesRoutes);

// app.use((req, res, next) => {
//   next(createHttpError(404,"Endpoint not found"));
// });

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.log(error);
  let errorMessage = "An unknown error occured";
  let statusCode = 500;
  if (isHttpError(error)) {
    statusCode = error.status;
    errorMessage = error.message;
  }
  res.status(statusCode).json({ error: errorMessage });
});

export default app;
