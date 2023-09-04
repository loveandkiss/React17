import React, { useState, FC } from "react";
import styles from "./index.module.less";

// UI组件库
import { Layout, Menu, Tooltip } from "antd";

import { Link, useLocation } from "react-router-dom";

// Icon
// 从 4.0 开始，antd 不再内置 Icon 组件，请使用独立的包 @ant-design/icons
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
} from "@ant-design/icons";

// import { formatMessage } from "../../components/locales";

const { Header, Content, Footer, Sider } = Layout;

// 函数式组件
const HomePage: FC = (props) => {
  // 收缩侧边栏
  const [collapsed, setCollapsed] = useState<boolean>(false);

  // props 是 React 组件的输入。
  // 它们是从父组件向下传递给子组件的数据。
  window.console.log("HomePage=>props", props);

  // The useLocation hook returns the location object that represents the current URL.
  // You can think about it like a useState that returns a new location whenever the URL changes.
  const location = useLocation();

  // 侧边布局
  return (
    <Layout style={{ minHeight: "100vh", width: "100%" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(isOpen) => setCollapsed(isOpen)}
      >
        {" "}
        <Tooltip placement="right" title={"公众号：前端要努力"}>
          <div className={styles.logo}>💪前端需努力💪</div>
          {/* <div className={styles.logo}>{formatMessage({ id: "frontEnd" })}</div> */}
        </Tooltip>
        <Menu
          theme="dark"
          defaultSelectedKeys={[`${location.pathname}`]}
          mode="inline"
        >
          <Menu.Item key="/doc" icon={<PieChartOutlined />}>
            <Link to={"/doc"}>文档</Link>
          </Menu.Item>
          <Menu.Item key="/icon" icon={<PieChartOutlined />}>
            <Link to={"/icon"}>图标</Link>
          </Menu.Item>
          <Menu.Item key="/auth" icon={<PieChartOutlined />}>
            <Link to={"/auth"}>权限</Link>
          </Menu.Item>
          <Menu.SubMenu key="sub2" icon={<DesktopOutlined />} title="组件">
            <Menu.Item key="/custom">
              <Link to={"/custom"}>远程搜索框</Link>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="/locale" icon={<FileOutlined />}>
            <Link to={"/locale"}> 国际化搭建</Link>
          </Menu.Item>
          <Menu.SubMenu key="/table" icon={<DesktopOutlined />} title="表格">
            <Menu.Item key="/table/base">
              <Link to={"/table/base"}>基础表格</Link>
            </Menu.Item>{" "}
            <Menu.Item key="/table/drag">
              <Link to={"/table/drag"}>拖拽表格</Link>
            </Menu.Item>{" "}
            <Menu.Item key="/table/edit">
              <Link to={"/table/edit"}>编辑表格</Link>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key="/demo" icon={<DesktopOutlined />} title="demo">
            <Menu.Item key="/demo/01">
              <Link to={"/demo/01"}>demo01</Link>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </Sider>

      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "16px 16px" }}>{props.children}</Content>
        <Footer style={{ textAlign: "center" }}>前端要努力-zyp</Footer>
      </Layout>
    </Layout>
  );
};

export default HomePage;
