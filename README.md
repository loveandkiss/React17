## React Router【 5 版本的 】

### Switch

在 React Router 中，Switch 组件用于包裹多个 Route 组件，并在渲染时只选择匹配的第一个 Route 进行渲染。它的作用是实现路由匹配的规则。

Switch 组件会按照从上到下的顺序依次查找内部的 Route 组件，并选择第一个与当前 URL 匹配的 Route 进行渲染。一旦找到匹配的 Route，就不会再继续查找下面的 Route。

```tsx
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}
```

## react 与 react-dom

## react-router 与 react-router-dom

## 如何引入 React

- React 官方在 2022 年 3 月 29 日 React18 版本正式发布了。 => 18.0.0 (March 29, 2022)
  可以在官网看到，react 17 的发布时间是 2020 年 10 月 20 号，距离 React 18 发布足足间隔一年半，并且 v17 中只有三个小版本，分别是 17.0.0、17.0.1、17.0.2。
  并且一直到 React18 发布，React17 都没有任何更新，可以说 React17 只是作为 React18 的垫脚石。
- 升级原因：

1. React18 的并发更新和自动批处理可以提升项目性能。
2. 提高项目的兼容性。

```jsx
import * as React from "react";

import * as ReactDOM from "react-dom";
```

这种引用方式被证明是最可靠的一种方式， 推荐使用。

而另外一种引用方式:

```jsx
import React from "react";

import ReactDOM from "react-dom";
```

需要添加额外的配置："allowSyntheticDefaultImports": true
该配置在根目录 tsconfig.json 文件

## React 的基本工作原理

- React 所做的主要事情是让我们的 UI 与我们的 状态 保持同步，而要实现它们的同步，就需要执行一个叫做 “re-render” (重新渲染) 的操作。

- 每一次 重新渲染 都是一次快照，它基于当前应用程序的状态告诉了应用程序的 UI 在某一特定时刻应该是什什么样的。我们可以把它想象成一叠照片，每张照片都记录了在每个状态变量的特定值下事物的样子。

- 举个例子，我们先定义一个状态 a ，它的初始值是 hello，我们先把它渲染到页面上，这时候我们的 UI 上就会有一行 hello

```jsx
const [a, setA] = useState("hello");

return <span>{a}</span>;
```

如果我们将 a 设置为 world，

```jsx
setA("world");
```

此时页面上还是 ”hello“，为了保持状态和 UI 同步，就需要触发一次 重新渲染 ，这样 UI 上也变为了 “hello”，当然重新渲染不需要我们自己执行 ，你在使用 setA 时 React 就会帮我们处理。

- 每一次 重新渲染 都会根据当前的状态产生一个 DOM 应该是什么样子的心理图景。在上面的例子中，我们的状态被描绘成 HTML，但本质上它是一堆 JS 对象。如果了解过的话就知道它也被称为 虚拟 DOM。

- 我们并不需要告诉 React 有哪些 DOM 节点需要改变。相反，我们告诉 React 的是基于当前状态渲染的 UI 应该是什么样的。通过重新渲染，React 创建了一个新的快照，它可以通过比较快照找出需要改变的地方，就像玩一个 "找不同 "的游戏。

- React 在你开箱使用时就进行了大量的优化，所以一般来说，重新渲染并不是啥大问题。但是，在某些情况下，这些快照确实需要一段时间来创建。这可能会导致性能问题，比如当用户执行某些操作后，UI 却不能够快速的同步修改。

- 所以从本质上，useMemo 和 useCallback 都是用来帮助我们优化 重新渲染 的工具 Hook。

- 它们通过以下两种方式实现优化的效果。
  . 减少在一次渲染中需要完成的工作量。
  . 减少一个组件需要重新渲染的次数。

## 函数式组件的声明方式

第一种：也是比较推荐的一种，使用 React.FunctionComponent，简写形式：React.FC:

```jsx
// Great

type AppProps = {
  message: string,
};

const App: React.FC<AppProps> = ({ message, children }) => (
  <div>
    {message}
    {children}
  </div>
);
```

第二种：使用 PropsWithChildren，这种方式可以为你省去频繁定义 children 的类型，自动设置 children 类型为 ReactNode:

```jsx
type AppProps = React.PropsWithChildren<{ message: string }>;

const App = ({ message, children }: AppProps) => (
  <div>
    {message}

    {children}
  </div>
);
```

第三种：直接声明:

```jsx


type AppProps = {
  message: string
  children?: React.ReactNode
}



const App = ({ message, children }: AppProps) => (

  <div>
    {message}
    {children}
  </div>

)


```

使用用 React.FC 声明函数组件和普通声明以及 PropsWithChildren 的区别是：

- React.FC 显式地定义了返回类型，其他方式是隐式推导的
- React.FC 对静态属性：displayName、propTypes、defaultProps 提供了类型检查和自动补全
- React.FC 为 children 提供了隐式的类型（ReactElement | null），但是目前，提供的类型存在一些 issue（问题）

## Hooks

### useState<T>

### useRef<T>

### useEffect

useEffect 需要注意回调函数的返回值只能是函数或者 undefined

```jsx
function App() {
  // undefined作为回调函数的返回值
  React.useEffect(() => {
    // do something...
  }, []);

  // 返回值是一个函数
  React.useEffect(() => {
    // do something...

    return () => {};
  }, []);
}
```

### useMemo<T>

#### 需要进行大量计算的场景

假设我们写一个工具来帮助用户找到 0 和一个用户传入的数字参数 selectedNum 之间的所有质数。
质数就是一个只能被 1 和它自己整除的数字，比如 17。
下面是实现的代码:

```jsx
import React from "react";

function App() {
  const [selectedNum, setSelectedNum] = React.useState(100);

  // We calculate all of the prime numbers between 0 and the
  // user's chosen number, `selectedNum`:
  const allPrimes = [];
  for (let counter = 2; counter < selectedNum; counter++) {
    if (isPrime(counter)) {
      // 质数
      allPrimes.push(counter);
    }
  }

  return (
    <>
      <form>
        <label htmlFor="num">Your number:</label>
        <input
          type="number"
          value={selectedNum}
          onChange={(event) => {
            // 为了防止电脑烧起来，我们限制一下传入的值最大为 100k
            let num = Math.min(100_000, Number(event.target.value));

            setSelectedNum(num);
          }}
        />
      </form>
      <p>
        There are {allPrimes.length} prime(s) between 1 and {selectedNum}:{" "}
        <span className="prime-list">{allPrimes.join(", ")}</span>
      </p>
    </>
  );
}

// isPrime 用于计算传入的参数是否为质数
function isPrime(n) {
  // Math.sqrt() // 求平方根
  // Math.ceil() // 取上
  // Math.floor() // 取下
  const max = Math.ceil(Math.sqrt(n));

  // 如果是 2 则直接返回 true
  if (n === 2) {
    return true;
  }

  // 质数: 1、2、3、5、7、11、13、17、19、23、29、......
  for (let counter = 2; counter <= max; counter++) {
    if (n % counter === 0) {
      return false;
    }
  }

  return true;
}

export default App;
```

你不需要看懂上面的每一行代码，这里分析一下以上代码的重点：

我们维护了一个状态 selectedNum
我们使用一个 for 循环手动计算 0 和 selectedNum 之间的所有质数
我们渲染了一个输入框，用户通过输入改变 selectedNum 的值
我们在页面中向用户展示了所有计算出来的质数。

以上这段代码执行时需要进行大量的计算。如果用户选择了一个值很大的 selectedNum，我们将需要遍历数以万计的数字去判断每一个是否为质数。而且即使有比我上面使用的算法更有效的素数判断算法，但肯定也是需要进行大量计算的。

在实际开发中我们很有可能遇到类似的场景。但是有时候我们并不需要重新计算，但仍然执行了计算操作，就有会遇到一些性能问题。比如下面这种情况：

```jsx
import React from "react";
import format from "date-fns/format";

function App() {
  const [selectedNum, setSelectedNum] = React.useState(100);

  // `time` 是一个状态变量，每秒钟变化一次，所以它总是与当前时间同步
  const time = useTime();

  const allPrimes = [];
  for (let counter = 2; counter < selectedNum; counter++) {
    if (isPrime(counter)) {
      allPrimes.push(counter);
    }
  }

  return (
    <>
      <p className="clock">{format(time, "hh:mm:ss a")}</p>
      <form>
        <label htmlFor="num">Your number:</label>
        <input
          type="number"
          value={selectedNum}
          onChange={(event) => {
            // 为了防止电脑烧起来，我们限制一下传入的值最大为 100k
            let num = Math.min(100_000, Number(event.target.value));

            setSelectedNum(num);
          }}
        />
      </form>
      <p>
        There are {allPrimes.length} prime(s) between 1 and {selectedNum}:{" "}
        <span className="prime-list">{allPrimes.join(", ")}</span>
      </p>
    </>
  );
}

function useTime() {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return time;
}

// isPrime 用于计算传入的参数是否为质数
function isPrime(n) {
  const max = Math.ceil(Math.sqrt(n));

  if (n === 2) {
    return true;
  }

  for (let counter = 2; counter <= max; counter++) {
    if (n % counter === 0) {
      return false;
    }
  }

  return true;
}

export default App;
```

现在代码里定义了两个状态：selectedNum 和 time。time 每秒钟改变一次，并且在页面的右上角渲染出来。

这时我们会发现一个问题：即便我们没有改变 selectedNum ，但是由于 time 的改变会引起重新渲染，而重新渲染又会导致质数的大量计算，这样就浪费了很多性能。

Javascript 运行时是单线程的，如果我们反复执行这段代码，就会一直有一个计算任务占用着线程。这会导致我们其他任务没法快速执行，整个应用会让人感觉很迟钝，尤其是在低性能的设备上感知更加明显。

那么我们该如何 绕过 这个计算的事件呢，如果我们已经有了某个数字的质数列表，为什么不重复使用这个值，而是每次都从头计算呢？

这就是 useMemo 能够帮助我们做到的事情，如下例所示：

```jsx
const allPrimes = React.useMemo(() => {
  const result = [];
  for (let counter = 2; counter < selectedNum; counter++) {
    if (isPrime(counter)) {
      result.push(counter);
    }
  }
  return result;
}, [selectedNum]);

// 作者：oil欧哟
// 链接：https://juejin.cn/post/7165338403465068552
// 来源：稀土掘金
```

useMemo 接受两个参数：

- 需要执行的一些计算处理工作，包裹在一个函数中。
- 一个依赖数组。

在组件挂载的过程中，当这个组件第一次被渲染时，React 都会调用这个函数来执行这段计算逻辑，计算所有的质数。无论我们从这个函数中返回什么值，都会分配给 allPrimes 变量。

然而，对于每一个后续的渲染，React 都要从以下两种情况中做出选择：

- 再次调用 useMemo 中的计算函数，重新计算数值
- 重复使用上一次已经计算出来的数据

为了做出一个正确的选择，React 会判断你传入的依赖数组，这个数组中的每个变量是否在两次渲染间 值是否改变了 ，如果发生了改变，就重新执行计算的逻辑去获取一个新的值，否则不重新计算，直接返回上一次计算的值。

useMemo 本质上就像一个小的缓存，而依赖数组就是缓存的失效策略。

在上面的例子中，其实本质上是在说 “只有当 selectedNum 的值变化时才重新计算质数列表“。 当组件因为其他情况重新渲染，例如状态 time 的值改变了，useMemo 就会忽略这个计算函数，直接返回之前缓存的值。

这种缓存的过程通常被称为 memoization，这就是为什么这个钩子被称为 “useMemo”。

#### 另一种解决方法

useMemo 钩子确实可以帮助我们避免这里不必要的计算……，但它真的是这里最好的解决方案吗？
通常情况下，我们都会通过一些重构来避免掉需要使用 useMemo 进行优化的场景。如下例：

```jsx
//App.js
import React from "react";
import { getHours } from "date-fns";

import Clock from "./Clock";
import PrimeCalculator from "./PrimeCalculator";

// 将 PrimeCalculator 转换为纯组件
const PurePrimeCalculator = React.memo(PrimeCalculator);

function App() {
  const time = useTime();

  // 基于当前时间动态计算一个背景颜色
  const backgroundColor = getBackgroundColorFromTime(time);

  return (
    <div>
      <Clock time={time} />
      <PurePrimeCalculator />
    </div>
  );
}

const getBackgroundColorFromTime = (time) => {
  const hours = getHours(time);

  if (hours < 12) {
    // A light yellow for mornings
    return "hsl(50deg 100% 90%)";
  } else if (hours < 18) {
    // Dull blue in the afternoon
    return "hsl(220deg 60% 92%)";
  } else {
    // Deeper blue at night
    return "hsl(220deg 100% 80%)";
  }
};

function useTime() {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return time;
}

export default App;
```

```jsx
// PrimeCalculator.js
import React from "react";

function PrimeCalculator() {
  const [selectedNum, setSelectedNum] = React.useState(100);

  const allPrimes = [];
  for (let counter = 2; counter < selectedNum; counter++) {
    if (isPrime(counter)) {
      allPrimes.push(counter);
    }
  }

  return (
    <>
      <form>
        <label htmlFor="num">Your number:</label>
        <input
          type="number"
          value={selectedNum}
          onChange={(event) => {
            // 为了防止电脑烧起来，我们限制一下传入的值最大为 100k
            let num = Math.min(100_000, Number(event.target.value));

            setSelectedNum(num);
          }}
        />
      </form>
      <p>
        There are {allPrimes.length} prime(s) between 1 and {selectedNum}:{" "}
        <span className="prime-list">{allPrimes.join(", ")}</span>
      </p>
    </>
  );
}

function isPrime(n) {
  const max = Math.ceil(Math.sqrt(n));

  if (n === 2) {
    return true;
  }

  for (let counter = 2; counter <= max; counter++) {
    if (n % counter === 0) {
      return false;
    }
  }

  return true;
}

export default PrimeCalculator;
```

```jsx
// Clock.js

import React from "react";
import format from "date-fns/format";

function Clock({ time }) {
  return <p className="clock">{format(time, "hh:mm:ss a")}</p>;
}

export default Clock;
```

这里我们使用 React.memo 包裹着组件保护它不受到无关状态更新的影响。只有在 PurePrimeCalculator 只会在收到新数据或内部状态发生变化时重新渲染。这种组件被称为 纯组件。
本质上，我们告诉 React 这个组件在 给定相同输入的情况下总是会产生相同的输出 ，并且我们可以跳过没有 props 和状态改变的重渲染。

在上例中我们将组件引入 App.tsx 后再通过 React.memo 进行包裹，在实际开发中我们更多的是在组件 export 的时候就使用 React.memo 进行包裹，这样可以保证组件一直是纯组件。上例只是为了更加清楚的在 App.tsx 中展示所有内容。

**这里有一个有趣的视角转变： 在前面的例子中，我们是缓存了计算质数的结果。然而在重构后，我们已经缓存了了整个组件。但无论使用哪种方式，昂贵的计算操作只有在 selectedNum 的值改变时才会执行了，这里两种方法没有优劣之分，根据实际情境来使用即可。**

**但在实际开发中你可能会发现 纯组件也经常发生重新渲染，即便它并没有发生什么改变。接下来就为大家介绍可以使用 useMemo 来解决的第二种场景**。

#### 引用保留

在下面的示例中，我们创建了一个 Boxes 组件用于展示几个不同颜色的容器，纯粹是用于装饰。然后我们还定义了一个跟 Boxes 组件没啥关系的 user's name 变量

```jsx
// App.jsx
import React from "react";

import Boxes from "./Boxes";

function App() {
  const [name, setName] = React.useState("");
  const [boxWidth, setBoxWidth] = React.useState(1);

  const id = React.useId();

  // Try changing some of these values!
  const boxes = [
    { flex: boxWidth, background: "hsl(345deg 100% 50%)" },
    { flex: 3, background: "hsl(260deg 100% 40%)" },
    { flex: 1, background: "hsl(50deg 100% 60%)" },
  ];

  return (
    <>
      <Boxes boxes={boxes} />

      <section>
        <label htmlFor={`${id}-name`}>Name:</label>
        <input
          id={`${id}-name`}
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label htmlFor={`${id}-box-width`}>First box width:</label>
        <input
          id={`${id}-box-width`}
          type="range"
          min={1}
          max={5}
          step={0.01}
          value={boxWidth}
          onChange={(event) => {
            setBoxWidth(Number(event.target.value));
          }}
        />
      </section>
    </>
  );
}

export default App;
```

```jsx
//Boxes.jsx
import React from "react";

function Boxes({ boxes }) {
  return (
    <div className="boxes-wrapper">
      {boxes.map((boxStyles, index) => (
        <div key={index} className="box" style={boxStyles} />
      ))}
    </div>
  );
}

export default React.memo(Boxes);
```

我们使用了 React.memo 包裹着 Boxes 组件，使它成为一个纯组件，这说明只有在 props 更改时它才会重新渲染。

然而实际使用时你会发现，当用户输入 Name 时，Boxes 也会重新渲染。这时候你可能会好奇，有没有搞错？！为什么我们的 React.memo() 没有在这里保护我们的组件？
Boxes 组件只有 1 个 prop boxes，看似我们在每次渲染时都为其提供了完全相同的数据。它每次渲染也总是一样的：一个红色的盒子，一个宽紫色的盒子，一个黄色的盒子。我们确实有一个 boxWidth 会影响 boxes 数组的状态变量，但我们没有改变它！

问题在于每次 React 重新渲染时，都会重新产生一个 boxes 数组，这个数组的值虽然每一次重新渲染都是相同的，但是它的 引用 却是不同的。

这里暂时抛开 React 单纯讨论 JavaScript 可能比较好理解，让我们看一个类似的例子：

```js
function getNumbers() {
  return [1, 2, 3];
}

const firstResult = getNumbers();
const secondResult = getNumbers();

console.log(firstResult === secondResult); // false
```

你怎么看？firstResult 等于 secondResult ? 从某种意义上说，它们是相同的。因为两个变量具有相同的结构[1, 2, 3]。但这不是 === 操作符实际判断的标准。相反，=== 判断的是两个表达式 是否完全相同。

我们创建了两个不同的数组。它们可能包含相同的内容，但它们不是同一个数组，就像 两个同卵双胞胎不是同一个人一样。

每次我们调用 getNumbers 函数时都会创建一个全新的数组，一个保存在计算机内存中的独特数组。如果我们多次调用它，我们将在内存中存储该数组的多个副本。
请注意，简单的数据类型比如 字符串、数字和布尔值 可以通过值进行比较。但是当涉及到数组和对象时，它们只能通过引用进行比较。这部分内容大家可以参考其他讲引用类型的文章，这里不详细展开。

回到 React， 我们的 Boxs React 组件也是一个 JavaScript 函数。当我们渲染它时，我们调用以下函数:

```jsx
// 每次渲染组件都会调用 App 函数
function App() {
  // ...创建一个全新的数组...
  const boxes = [
    { flex: boxWidth, background: "hsl(345deg 100% 50%)" },
    { flex: 3, background: "hsl(260deg 100% 40%)" },
    { flex: 1, background: "hsl(50deg 100% 60%)" },
  ];
  // ...然后将数组作为 prop 传入组件!
  return <Boxes boxes={boxes} />;
}
```

当 name 状态更改时，我们的 App 组件将重新渲染，该组件将重新运行所有代码，并构建一个全新的 boxes 数组，并将其传递到 Boxes 组件。此时 Boxes 组件重新渲染，因为我们给了它一个全新的数组！

boxes 数组的结构在不同的渲染之间虽然没有变化，但是这不相关。React 只知道 Boxes 组件 prop 收到了一个新创建的，从未见过的数组。

为了解决这个问题，我们可以使用 useMemo hook:

```jsx
const boxes = React.useMemo(() => {
  return [
    { flex: boxWidth, background: "hsl(345deg 100% 50%)" },
    { flex: 3, background: "hsl(260deg 100% 40%)" },
    { flex: 1, background: "hsl(50deg 100% 60%)" },
  ];
}, [boxWidth]);
```

这里不像我们之前的例子，相比于质数，这里我们不需要担心计算的代价。我们的唯一目标是保留对特定数组的引用。我们将 boxWidth 列为一个依赖项，因为我们确实希望在用户调整红色框的宽度时重新渲染 Box 组件。

通过在多次渲染中保留相同的引用，我们允许纯组件以我们想要的方式运作，忽略掉那些不影响用户界面的渲染。

### useCallback<T>

好不容易介绍完了 useMemo，那么 useCallback 呢？

**简单概括：useMemo 和 useCallback 是一个东西，只是将返回值从 数组/对象 替换为了 函数。**

函数是与数组和对象类似，都是通过引用而不是通过值进行比较的:

```js
const functionOne = function () {
  return 5;
};
const functionTwo = function () {
  return 5;
};

console.log(functionOne === functionTwo); // false
```

这意味着如果我们在组件中定义一个函数，它将在每个渲染中重新生成，每次生成一个相同但是唯一的函数。

```jsx
//App.jsx
import React, { useState } from "react";

import MegaBoost from "./MegaBoost";

function App() {
  const [count, setCount] = useState(0);

  function handleMegaBoost() {
    setCount((currentValue) => currentValue + 1234);
  }

  return (
    <>
      Count: {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me!
      </button>
      <MegaBoost handleClick={handleMegaBoost} />
    </>
  );
}

export default App;
```

```jsx
// MegaBoost.jsx
import React, { memo } from "react";

function MegaBoost({ handleClick }) {
  // window.console.log("Render MegaBoost");
  return (
    <button className="mega-boost-button" onClick={handleClick}>
      MEGA BOOST!
    </button>
  );
}

export default memo(MegaBoost);
```

由于使用了 React.memo 进行包裹, MegaBoost 组件是纯组件,它虽然不依赖于 count ……但它会在更改时重新渲染 count！

**就像我们在前面 boxes 数组中看到的那样，这里的问题是我们在每次渲染时都生成了一个全新的函数。如果我们渲染 3 次，我们将创建 3 个独立 handleMegaBoost 的函数，突破 React.memo 的保护。**

如果使用我们前面所学到的 useMemo，我们可以解决这样的问题：

```jsx
const handleMegaBoost = React.useMemo(() => {
  return function () {
    setCount((currentValue) => currentValue + 1234);
  };
}, []);
```

这里不是返回一个数组，而是返回一个 函数。然后将该函数存储在 handleMegaBoost 变量中。
这种写法虽然也可以，但是有一种更好的方法：

```jsx
const handleMegaBoost = React.useCallback(() => {
  setCount((currentValue) => currentValue + 1234);
}, []);
```

useCallback 的用途与 useMemo 相同，但它是专门为函数构建的。我们直接给返回它一个函数，它会记住这个函数，在渲染之间线程化它。

换句话说就是以下的两种实现方式的效果是相同的：

```jsx
React.useCallback(function helloWorld() {}, []);

// ...功能相当于:
React.useMemo(() => function helloWorld() {}, []);
```

useCallback 是一种语法糖，它的存在存粹是为了让我们在缓存回调函数的时候可以方便点。

当使用这些 Hook 时
好了，我们已经学习了 useMemo 和 useCallback 时如何允许我们在多次渲染之间线程化引用，以复用复杂的计算或者避免破坏纯组件。

但还有一个问题是: 我们应该在什么情况下使用这两个 Hook ？

在我个人看来，将每个对象/数组/函数包装在这些 hook 是在浪费时间。在大多数情况下，这些优化的好处几乎可以忽略不计; 因为 React 内部是高度优化的，并且 重新渲染通常并不像我们通常认为的那样慢或昂贵！

使用这些 hook 的最佳方法是响应问题。如果你注意到你的 app 变得有些迟钝，你可以使用 React Profiler 来寻找慢速渲染。在某些情况下，可以通过重构 app 来提高性能。在其他情况下，useMemo 和 useCallback 可以帮助加快速度。

也就是说，在某些情况下，我确实会先发制人地应用这些 hook。

**通用自定义 hook**

我最喜欢的自定义 hook 之一是 useToggle，这是一个友好的助手，其工作方式几乎与 useState 完全相同，但只能在 true 和 false 之间切换状态变量:

```jsx
function App() {
  const [isDarkMode, toggleDarkMode] = useToggle(false);
  return <button onClick={toggleDarkMode}>Toggle color theme</button>;
}
```

这里是这个自定义 hook 的代码实现：

```jsx
function useToggle(initialValue) {
  const [value, setValue] = React.useState(initialValue);

  const toggle = React.useCallback(() => {
    setValue((v) => !v);
  }, []);

  return [value, toggle];
}
```

注意这里的 toggle 函数使用了 useCallback 进行缓存。
当咱们构建这样的自定义可复用 hook 时，我希望使它们尽可能高性能，因为我不知道它们将来在哪里使用。在 95% 的情况下，这可能是过度封装的，但是如果我使用这个 hook 30 或 40 次，这将很有可能有助于提高我们的 app 的性能。

### 状态管理方案

众所周知，我们在研发一个复杂应用的过程中，一套好的状态管理方案是必不可少的，既能提升研发效率，又能降低研发维护成本，那么状态管理方案那么多，它们有什么不同，我们又该如何选择适合当前应用的方案呢？

- hooks context

- react-redux(推荐使用)

- mobx(推荐使用)

- zustand

- jotai

- recoil

- valtio

#### react-redux

官网链接： https://react-redux.js.org/introduction/getting-started

**An Existing React App**

To use React Redux with your React app, install it as a dependency:

```shell
# If you use npm:
npm install react-redux

# Or if you use Yarn:
yarn add react-redux


```

**You'll also need to install Redux and set up a Redux store in your app.**

**React-Redux v8 is written in TypeScript, so all types are automatically included.**

```shell

npm install redux

```

#### Redux Toolkit(官方推荐使用)

相关链接：
https://cn.redux.js.org/introduction/getting-started
https://redux-toolkit.js.org/introduction/getting-started

```tsx
// 废弃 尽量不要使用
import { createStore } from "redux";
```

- Redux Toolkit 是我们官方推荐的编写 Redux 逻辑的方法。它围绕 Redux 核心，并包含我们认为对于构建 Redux 应用必不可少的软件包和功能。

- Redux Toolkit (也称为 "RTK" ) 是我们官方推荐的编写 Redux 逻辑的方法。@reduxjs/toolkit 包封装了核心的 redux 包，包含我们认为构建 Redux 应用所必须的 API 方法和常用依赖。 Redux Toolkit 集成了我们建议的最佳实践，简化了大部分 Redux 任务，阻止了常见错误，并让编写 Redux 应用程序变得更容易。

- 如果今天你要写任何的 Redux 逻辑，你都应该使用 Redux Toolkit 来编写代码

- RTK 包括一些实用程序，可以帮助简化许多常见的用例，包括 配置 Redux store、 创建 reducer 函数并使用不可变更新逻辑 和 一次性创建状态的某个"片段"（slice）。
- 无论你是刚接触 Redux 的新用户正在设计你的第一个项目，还是已有经验的用户想简化一个现有的应用，Redux Toolkit 都能够帮助你写出更好的 Redux 代码。

- Usage Summary(使用总结)

1. Install Redux Toolkit and React-Redux

```shell
# Add the Redux Toolkit and React-Redux packages to your project:
npm install @reduxjs/toolkit react-redux

```

2. Create a Redux Store

Create a file named src/store.tsx. Import the configureStore API from Redux Toolkit. We'll start by creating an empty Redux store, and exporting it:

```tsx
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
```

This creates a Redux store, and also automatically configure the Redux DevTools extension so that you can inspect the store while developing.

3. Provide the Redux Store to React

Once the store is created, we can make it available to our React components by putting a React-Redux <Provider> around our application in src/main.tsx. Import the Redux store we just created, put a <Provider> around your <App>, and pass the store as a prop:

```tsx
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

4. Create a Redux State Slice
   Add a new file named src/features/counter/counterSlice.js. In that file, import the createSlice API from Redux Toolkit.

   Creating a slice requires a string name to identify the slice, an initial state value, and one or more reducer functions to define how the state can be updated. Once a slice is created, we can export the generated Redux action creators and the reducer function for the whole slice.

   Redux requires that we write all state updates immutably, by making copies of data and updating the copies. However, Redux Toolkit's createSlice and createReducer APIs use Immer inside to allow us to write "mutating" update logic that becomes correct immutable updates.

```jsx
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
```

5. Add Slice Reducers to the Store
   Next, we need to import the reducer function from the counter slice and add it to our store. By defining a field inside the reducer parameter, we tell the store to use this slice reducer function to handle all updates to that state.

```tsx
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
```

6. Use Redux State and Actions in React Components

   Now we can use the React-Redux hooks to let React components interact with the Redux store.
   We can read data from the store with useSelector, and dispatch actions using useDispatch.
   Create a src/features/counter/Counter.js file with a <Counter> component inside, then import that component into pages/demo/demo04.tsx and render it inside of <Demo04>.

```tsx
import React from "react";
import type { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
```

Now, any time you click the "Increment" and "Decrement" buttons:

The corresponding Redux action will be dispatched to the store
The counter slice reducer will see the actions and update its state
The <Counter> component will see the new state value from the store and re-render itself with the new data

### [Redux Toolkit]（https://redux-toolkit.js.org/usage/usage-guide#simplifying-reducers-with-createreducer）

- Using Redux Toolkit => Usage Guide

  It lets you decide how you want to handle everything, like store setup, what your state contains, and how you want to build your reducers.

  Let's look at some of the ways that Redux Toolkit can help make your Redux-related code better.

  1.  Store Setup
      1.1 Manual Store Setup
      1.2 Simplifying Store Setup with configureStore
  2.  Writing Reducers

### 服务 json-server

json-server 是一个轻量级的、基于 Node.js 的、用于快速搭建 RESTful API 的工具。使用 json-server，你可以从 JSON 文件中读取数据，并立即拥有一个可以通过 HTTP 请求进行访问的 API。

以下是 json-server 的一些主要特点：

快速启动：只需几个命令就可以设置和启动一个完整的 REST API。
数据持久化：数据存储在 JSON 文件中，这意味着即使服务器重启，数据也不会丢失。
路由功能：你可以定义自己的路由来处理特定的请求。
跨平台：由于它是基于 Node.js 的，所以可以在任何支持 Node.js 的平台上运行。
易于扩展：你可以通过编写中间件来扩展其功能。
模拟延迟：为响应添加模拟延迟，这对于测试性能很有用。

执行下面脚本便可以启动服务
npm run mock

登录

随便输入账号（why）和密码（123）
