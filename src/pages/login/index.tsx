import React, { useState, FC } from "react";

import { useLocalStorageState } from "ahooks";

import LoginPassword from "./components/LoginPassword";
import LoginMessage from "./components/LoginMessage";
import styles from "./index.module.less";
// window.console.log('styles:::', styles)

// 函数式组件
const LoginPage: FC = () => {

  // A Hook that store state into localStorage.
  const [loginWay, setLoginWay] = useLocalStorageState("login__Login__way", "");

  window.console.log('loginWay', loginWay)

  const [way, setWay] = useState<string>(loginWay);

  /**
   * 更新登录方式
   * @param name
   */
  function updateWay(name: string) {
    // window?.console.log('name', name)
    setWay(name);
    setLoginWay(name);
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginLogo} />
      <div className={styles.loginForm}>
        {/*{way === "message" ? (*/}
        {/*  <LoginMessage updateWay={updateWay} />*/}
        {/*) : (*/}

        <LoginPassword updateWay={updateWay} />
        {/*)}*/}
      </div>
    </div>
  );
};

export default LoginPage;
