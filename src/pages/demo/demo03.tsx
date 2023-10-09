// Demo03.tsx
import React, { FC, useState, useCallback, useMemo } from "react";
import { useHistory } from "react-router";
import { Button } from "antd";
import MegaBoost from "./components/MegaBoost";
import styles from "./index.module.less";
import { IItem } from "./types";

/**
 * 在 React 组件中使用 Redux 状态和操作
 */
import useAppSelector from "../../hooks/useAppSelector";
//  import useAppDispatch from "../../hooks/useAppDispatch";

// React 组件是一段可以 使用标签进行扩展 的 JavaScript 函数。
// React 组件是常规的 JavaScript 函数，但 组件的名称必须以大写字母开头，否则它们将无法运行！
// 这个组件返回一个带有 src 和 alt 属性的 <img /> 标签。<img /> 写得像 HTML，但实际上是 JavaScript！这种语法被称为 JSX，它允许你在 JavaScript 中嵌入使用标签。
const Profile: FC = () => {
  return <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="Katherine Johnson" />;
};
const Gallery: FC = () => {
  return (
    <section>
      <h1>了不起的科学家</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
};

// 渲染列表
const List: FC = () => {
  // 规范数据类型
  const list: IItem[] = [
    {
      id: 0,
      name: "凯瑟琳·约翰逊",
      profession: "数学家",
      accomplishment: "太空飞行相关数值的核算",
      imageId: "MK3eW3A",
    },
    {
      id: 1,
      name: "马里奥·莫利纳",
      profession: "化学家",
      accomplishment: "北极臭氧空洞的发现",
      imageId: "mynHUSa",
    },
    {
      id: 2,
      name: "穆罕默德·阿卜杜勒·萨拉姆",
      profession: "物理学家",
      accomplishment: "关于基本粒子间弱相互作用和电磁相互作用的统一理论",
      imageId: "bE7W1ji",
    },
    {
      id: 3,
      name: "珀西·莱温·朱利亚",
      profession: "化学家",
      accomplishment: "开创性的可的松药物、类固醇和避孕药的研究",
      imageId: "IOjWm71",
    },
    {
      id: 4,
      name: "苏布拉马尼扬·钱德拉塞卡",
      profession: "天体物理学家",
      accomplishment: "白矮星质量计算",
      imageId: "lrWQx8l",
    },
  ];

  // 获取 image url 工具函数
  const getImageUrl = (person: IItem) => {
    return "https://i.imgur.com/" + person.imageId + "s.jpg";
  };

  const handleClickListItem = (person: IItem) => {
    window.console.log("person", person.id);
  };

  // JSX
  return (
    <ul>
      {list
        .filter((person) => person.profession === "化学家")
        .map((person) => (
          <li onClick={() => handleClickListItem(person)} key={person.id}>
            <img src={getImageUrl(person)} alt={person.name} />
            <p>
              <b>{person.name}:</b>
              {" " + person.profession + " "}因{person.accomplishment}而闻名世界
            </p>
          </li>
        ))}
    </ul>
  );
};
// const List: () => JSX.Element  = () => {
//   return <>
//     { list.map(x => (<div onClick={() => handleClickListItem(person)} key={x.id}>{ x.name }</div>)) }
//   </>
// }

const Demo03: FC = () => {
  const [count, setCount] = useState(0);
  // 获取history对象
  const history = useHistory();
  // 获取store数据
  const storeCouter = useAppSelector((state) => state.counter.value);

  // function handleMegaBoost() {
  //   setCount((currentValue) => currentValue + 1234);
  // }

  // useMemo和useCallback的区别
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

  const [isShow, setIsShow] = useState(false);

  const handleToggleShow = () => {
    setIsShow(!isShow);
  };

  // JSX
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

      {/* 将 props 传递给子组件 */}
      <MegaBoost handleClick={handleMegaBoost} />

      {/* 内联样式 */}
      <div style={{ marginTop: "20px" }}>
        <Button onClick={() => history.push("/demo/04")}>Go Demo04 Page</Button>
      </div>

      <div className={styles.listWrapper}>
        <div style={{ color: "red", fontSize: "12px", fontWeight: 600 }}>
          条件渲染
        </div>
        <div>
          <Button onClick={handleToggleShow}>Toggle Show</Button>
        </div>

        {/* 条件渲染/列表渲染 */}
        {isShow ? <List /> : null}
        {/* {
          isShow && <List />
        } */}
      </div>

      <Gallery />
    </>
  );
};
export default Demo03;
