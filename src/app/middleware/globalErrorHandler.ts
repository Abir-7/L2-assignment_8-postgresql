import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { NextFunction, Request, Response } from "express";

// Global error handler middleware
const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(err);
  let message = err?.message;
  let statusCode = err?.statusCode || 500;
  if (err instanceof Error) {
    if (err.name === "PrismaClientKnownRequestError") {
      let error = err as PrismaClientKnownRequestError;
      if (error.code === "P2002") {
        message = `This data already exist`;
      }
      if (error.code === "P2025") {
        statusCode = 404;
        message = error.meta?.cause || `Data not found`;
      }
      if (error.code === "P2003") {
        message = `Foreign key constraint violated: Operation faield`;
      }
    } else {
      message = err?.message;
    }
  }

  res.status(statusCode).json({
    success: false,
    status: statusCode,
    message: message || "Internal Server Error",
  });
};

export default globalErrorHandler;
