import React, { useState } from "react";

import ConfigProvider from "antd/lib/config-provider";

import "antd/dist/antd.less";
// 样式模块
import style from "./App.module.less";
// 路由
import RouterPage from "./router";

import { getLocale, localeInfo, LocaleProvider } from "./components/locales";

window?.console.log('style', style)

/**
 * 入口
 * @constructor
 */
function App() {
  return (
    <div className={style.App}>
      <header className={style.AppHeader}>
        <LocaleProvider>
          <ConfigProvider locale={localeInfo[getLocale()]?.antd}>
            <RouterPage />
          </ConfigProvider>
        </LocaleProvider>
      </header>
    </div>
  );
}

export default App;
