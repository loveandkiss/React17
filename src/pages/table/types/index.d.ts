// 接口
export interface Item {
  name: {
    last: string;
  };
  email: string;
  phone: string;
  gender: "male" | "female";
}

// 接口(规范后端所返回的数据结构及字段类型)
export interface Result {
  total: number;
  list: Item[];
}
