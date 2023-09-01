// Demo03.tsx
import React, { FC, useState, useCallback, useMemo } from 'react';
import { Button } from 'antd'
import MegaBoost from './components/MegaBoost';

const Demo03: FC = () => {
  const [count, setCount] = useState(0);

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
  }, [])

  window.console.log('demo03')

  return (
    <>
      Count: {count}
      <Button
        type="primary"
        danger
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Click me!
      </Button>
      <MegaBoost handleClick={handleMegaBoost} />
    </>
  );
}
export default Demo03;
