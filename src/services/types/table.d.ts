// 接口
export interface DataType {
  name: {
    last: string;
  };
  email: string;
  phone: string;
  gender: "male" | "female";
}

/**
 * 返回数据类型
 * 要提前和后段定义好类型，等接口写完直接替换地址就好了
 *
 */
export interface ITableData {
  info: any;
  results: DataType[];
}