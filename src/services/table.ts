import umiRequest from "../utils/reuqest";
import type { ITableData } from './types/table'


/**
 * 获取表格数据接口
 * @param query
 */
export const getTableData = (query: string): Promise<ITableData> => {
  return umiRequest.get(`https://randomuser.me/api?results=55&${query}`);
};
