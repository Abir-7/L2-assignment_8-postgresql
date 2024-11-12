"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Global error handler middleware
const globalErrorHandler = (err, req, res, next) => {
    var _a;
    console.log(err);
    let message = err === null || err === void 0 ? void 0 : err.message;
    let statusCode = (err === null || err === void 0 ? void 0 : err.statusCode) || 500;
    if (err instanceof Error) {
        if (err.name === "PrismaClientKnownRequestError") {
            let error = err;
            if (error.code === "P2002") {
                message = `This data already exist`;
            }
            if (error.code === "P2025") {
                statusCode = 404;
                message = ((_a = error.meta) === null || _a === void 0 ? void 0 : _a.cause) || `Data not found`;
            }
            if (error.code === "P2003") {
                message = `Foreign key constraint violated: Operation faield`;
            }
        }
        else {
            message = err === null || err === void 0 ? void 0 : err.message;
        }
    }
    res.status(statusCode).json({
        success: false,
        status: statusCode,
        message: message || "Internal Server Error",
    });
};
exports.default = globalErrorHandler;
