import React from "react";
// 导入路由内置组件
import { HashRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import HomePage from "@/pages/home";
import LoginPage from "@/pages/login";
import DocPage from "@/pages/doc";
import PublicPage from "@/pages/publicComponents";
import CustomPage from "@/pages/testPlugin";
import LocalePage from "@/pages/locales";
import IconPage from "@/pages/icon";

import TableList from "@/pages/table";
import TableEdit from "@/pages/table/edit";
import TableDrag from "@/pages/table/drag";
import Demo01 from "@/pages/demo/demo01";
import Demo02 from "@/pages/demo/demo02";
import Demo03 from "@/pages/demo/demo03";
import Demo04 from "@/pages/demo/demo04";
//
import PrivateRoute from "./components/privateRouter";

import AuthPage from "@/pages/auth";


const RouterPage = () => {
  return (
    <Router>
      <Switch>
        <Route path={"/login"} component={LoginPage} />
        <Route
          path="/"
          render={() => (
            <HomePage>
              <Switch>
                <PrivateRoute path="/doc" component={DocPage} />
                <PrivateRoute path="/home" component={PublicPage} />
                <PrivateRoute path="/custom" component={CustomPage} />
                <PrivateRoute path="/locale" component={LocalePage} />
                <PrivateRoute path="/icon" component={IconPage} />
                {/* 基础表格 */}
                <PrivateRoute path="/table/base" component={TableList} />
                {/* 编辑表格 */}
                <PrivateRoute path="/table/edit" component={TableEdit} />
                {/* 拖拽表格 */}
                <PrivateRoute path="/table/drag" component={TableDrag} />
                {/* demo */}
                <PrivateRoute path="/demo/01" component={Demo01} />
                <PrivateRoute path="/demo/02" component={Demo02} />
                <PrivateRoute path="/demo/03" component={Demo03} />
                <PrivateRoute path="/demo/04" component={Demo04} />
                <PrivateRoute path="/auth" component={AuthPage} />
                <Redirect to="/home" />
              </Switch>
            </HomePage>
          )}
        />
      </Switch>
    </Router>
  );
};
export default RouterPage;
