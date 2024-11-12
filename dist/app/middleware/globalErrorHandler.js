"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Global error handler middleware
const globalErrorHandler = (err, req, res, next) => {
    console.error(err === null || err === void 0 ? void 0 : err.stack);
    const statusCode = (err === null || err === void 0 ? void 0 : err.statusCode) || 500;
    res.status(statusCode).json({
        success: false,
        status: statusCode,
        message: (err === null || err === void 0 ? void 0 : err.message) || "Internal Server Error",
    });
};
exports.default = globalErrorHandler;
