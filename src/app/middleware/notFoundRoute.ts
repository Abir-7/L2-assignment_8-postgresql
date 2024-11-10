import { Request, Response, NextFunction } from "express";

// 404 Not Found Route Handler
const notFoundRoute = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    message: "Route not found",
    path: req.originalUrl,
  });
};

export default notFoundRoute;
