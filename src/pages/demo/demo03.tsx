// Demo03.tsx
import React, { FC, useState, useCallback, useMemo } from "react";
import { useHistory } from "react-router";
import { Button } from "antd";
import MegaBoost from "./components/MegaBoost";
/**
 * 在 React 组件中使用 Redux 状态和操作
 */
import useAppSelector from "../../hooks/useAppSelector";
//  import useAppDispatch from "../../hooks/useAppDispatch";

const Demo03: FC = () => {
  const [count, setCount] = useState(0);
  // 获取history对象
  const history = useHistory();
  // 获取store数据
  const storeCouter = useAppSelector((state) => state.counter.value);

  // function handleMegaBoost() {
  //   setCount((currentValue) => currentValue + 1234);
  // }

  // 优化
  // const handleMegaBoost = useMemo(() => {
  //   return () => {
  //     setCount((currentValue) => currentValue + 1234);
  //   }
  // }, [])

  // 等价于(推荐使用)
  const handleMegaBoost = useCallback(() => {
    setCount((currentValue) => currentValue + 1234);
  }, []);

  window.console.log("demo03");

  return (
    <>
      <div>storeCouter: {storeCouter}</div>
      <div>Count: {count}</div>
      <Button
        type="primary"
        danger
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me!
      </Button>
      <MegaBoost handleClick={handleMegaBoost} />
      <div>
        <Button onClick={() => history.push("/demo/04")}>Go Demo04 Page</Button>
      </div>
    </>
  );
};
export default Demo03;
