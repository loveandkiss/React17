import React, { FC } from "react";
import { Button } from "antd";

/**
 * 在 React 组件中使用 Redux 状态和操作
 */
import useAppSelector from "../../hooks/useAppSelector";
import useAppDispatch from "../../hooks/useAppDispatch";
//
import { decrement, increment, incrementByAmount } from "./counterSlice";

const Counter: FC = () => {
  // `state` 参数已正确推断为 `RootState` 类型
  const count = useAppSelector((state) => {
    window.console.log("state", state);
    return state.counter.value;
  });
  const dispatch = useAppDispatch();

  // 省略渲染逻辑
  return (
    <>
      <Button onClick={() => dispatch(increment())}>Increment</Button>
      <div>{count}</div>
      <Button onClick={() => dispatch(decrement())}>Decrement</Button>
      <Button onClick={() => dispatch(incrementByAmount(10))}>
        incrementByAmount
      </Button>
    </>
  );
};

export default Counter;
