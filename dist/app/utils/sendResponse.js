"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse = (res, dataInfo) => {
    return res.status(dataInfo.statusCode).json({
        success: dataInfo.success,
        status: dataInfo.statusCode,
        message: dataInfo.message,
        data: dataInfo.data,
        meta: dataInfo === null || dataInfo === void 0 ? void 0 : dataInfo.meta,
    });
};
exports.default = sendResponse;
