"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 404 Not Found Route Handler
const notFoundRoute = (req, res, next) => {
    res.status(404).json({
        message: "Route not found",
        path: req.originalUrl,
    });
};
exports.default = notFoundRoute;
