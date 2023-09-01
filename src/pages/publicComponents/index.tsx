import React, { useState } from "react";
import styles from "./index.module.less";

// React.FC 是 TypeScript 中用于声明 React 函数组件的类型。
// 它是 React 框架中预定义的一个泛型类型。
const PublicPage: React.FC = ({ children }) => {
  // window.console.log('children', children)
  return <div>我是公共组件</div>;
};

// 将组件 PublicPage 导出为默认导出。
// 这意味着在其他文件中引入 PublicPage 组件时，可以直接使用 import PublicPage from "./PublicPage" 进行导入。
export default PublicPage;
