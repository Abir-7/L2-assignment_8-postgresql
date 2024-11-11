import { NextFunction, Request, Response } from "express";

// Global error handler middleware
const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err?.stack);
  const statusCode = err?.statusCode || 500;
  res.status(statusCode).json({
    error: err,
    message: err.message || "Internal Server Error",
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
};

export default globalErrorHandler;
