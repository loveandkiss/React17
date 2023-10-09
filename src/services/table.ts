import umiRequest from "../utils/reuqest";
import type { ITableData } from "./types/table";

/**
 * 获取表格数据接口
 * @param query
 */
export const getTableData = (query: string): Promise<ITableData> => {
  // 无论是默认的 umiRequest 实例还是自定义的请求实例，它们都返回一个 Promise 对象。
  return umiRequest.get(`https://randomuser.me/api?results=55&${query}`);
};
