import React, { FC } from "react";
//
import { Route, useHistory } from "react-router-dom";
import { Result, Button } from "antd";
// 定义路由组件的属性（props）类型。
import { RouteProps } from "react-router";

const PrivateRoute: FC<RouteProps> = (props) => {
  window.console.log("PrivateRoute=>props=>", props);
  // 获取token
  const logged = sessionStorage.getItem("token");

  // 编程式导航
  const history = useHistory();

  // 登陆则映射到路由组件/没有登陆则
  return logged ? (
    <Route {...props} />
  ) : (
    <Result
      status="403"
      title="403"
      subTitle={"无权限"}
      extra={
        <Button type="primary" onClick={() => history.push("/login")}>
          跳转到登陆
        </Button>
      }
    />
  );
};

export default PrivateRoute;
