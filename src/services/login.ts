import { whyRequest } from "../utils/reuqest";
import type { ILogin, ILoginData } from './types/login'


/**
 * 登陆接口
 * @param params
 */
export const loginApp = (params: ILogin): Promise<ILoginData> => {
  return whyRequest.get("/login", params);
};
