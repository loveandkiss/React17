/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 *
 *
 * 在 umi-request 中，你可以使用 umiRequest 默认实例来发送请求，也可以使用 extend 方法创建自定义的请求实例。
 *
 * 无论是默认的 umiRequest 实例还是自定义的请求实例，它们都返回一个 Promise 对象，
 */
import umiRequest, { extend } from "umi-request";
// 前缀
import { urlPrefix } from "../config";

// 创建自定义请求实例
// 使用前缀，配合本地代理
export const whyRequest = extend({
  prefix: `${urlPrefix}`,
  // timeout: 10000,
  // headers: {
  //   'Authorization': 'Bearer token',
  // },
});

export default umiRequest;
