import { Response } from "express";

interface IMeta {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
}

interface IResponse<T> {
  statusCode: number;
  message: string;
  meta?: IMeta;
  data: T;
}

const sendResponse = <T>(res: Response, dataInfo: IResponse<T>) => {
  return res.status(dataInfo.statusCode).json({
    status: "success",
    message: dataInfo.message,
    data: dataInfo.data,
    meta: dataInfo?.meta,
  });
};

export default sendResponse;
