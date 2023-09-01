## 启动

- 依赖安装：yarn
- 本地启动项目：yarn dev
- 要登陆需要运行：yarn mock
  - 不然无法登陆

## 教程

- 说好的教程终于来了，文章主要带大家打造一个 react spa 的项目，使用的技术栈是 vite + react + ts, vite 的快想必我就不用介绍了，用过的都说好，
  react + ts 已经成为大型项目的主流，大厂极为青睐，所以学好 react + ts 对你之后想进大厂应该会如虎添翼，
- 本项目会有严格的规范性，eslint 规范，stylelint 规范，ts 类型规范，git 提交规范，包括打包上线体积分析，性能分析，以及何如做项目的想能优化。带你领略多人合作大型项目的开发"乐趣"，功能开发架构也是集成社区的优秀实践，让我们一起来开始搭建项目吧
- 第一篇文章主要来说一说在开始写实际业务代码之前的一些项目的基础配置工作
- 项目地址: [vite-react-ts](https://github.com/whylisa/vite-react-template-typescript)

## 技术栈前瞻

- 模版：使用的是 vite 的官方模版 react 17+ typescript 4+

  ```
  yarn create vite  why-react --template react-ts
  ```

- less: 项目中 less 文件的命名都要以 module.less 结尾

  ```
  yarn add less
  ```

- git 代码提交校验,

  ```
  yarn add yorkie lint-staged -D
  ```

  - 使用的 yorkie 没有使用 husky,yorkie 是 yyds fork husky 出来的,
    然后做了一些定制化的改动，使得钩子能从 package.json 的 "gitHooks"属性中读取。

  - gitHooks Git Hooks 就是在 Git 执行特定事件（如 commit、push、receive 等）时触发运行的脚本，类似于“钩子函数”，没有设置可执行的钩子将被忽略。
    在项目的 .git/hooks 目录中，有一些 .sample 结尾的钩子示例脚本，如果想启用对应的钩子，只需手动删除后缀，即可。（删除某一个 hook 的后缀 .sample 即可启用该 hook 脚本，默认是不启用的。）
  - 在代码提交之前，进行代码规则检查能够确保进入 git 库的代码都是符合代码规则的。但是整个项目上运行 lint 速度会很慢，lint-staged 能够让 lint 只检测暂存区的文件

- eslint 多人代码规范的重要性我就不再赘述了，非常非常重要

  ```
  eslint yarn add eslint -D
  // 然后终端运行
  npx eslint --init

  // 项目根目录会自动新建.eslintrc.js文件 注意：不要用自带的npm安装会装不了对应插件
   module.exports = {
     env: {
       browser: true,
       es2021: true,
       node: true,
      },
     extends: [
     "eslint:recommended",
     "plugin:react/recommended",
     "plugin:@typescript-eslint/recommended",
     ],
     parser: "@typescript-eslint/parser",
     parserOptions: {
     ecmaFeatures: {
       jsx: true,
     },
     ecmaVersion: 12,
     sourceType: "module",
     },
     plugins: ["react", "@typescript-eslint"],
     rules: {
     "arrow-body-style": 0,
     "jsx-a11y/label-has-for": 0,
     "max-lines-per-function": [
       2,
       { max: 320, skipComments: true, skipBlankLines: true },
     ],
     "no-confusing-arrow": 0,
     "no-nested-ternary": 0,
     "no-console": 2,
     "no-param-reassign": [
       2,
       { props: true, ignorePropertyModificationsFor: ["draft"] },
     ],
     "react/no-this-in-sfc": 0,
    },
    };
  ```

- prettier

  - 用来做代码格式化，有了 Prettier 之后，它能去掉原始的代码风格，确保团队的代码使用统一相同的格式，用官网的原话是"Building and enforcing a style guide"

  - 它和 Linter 系列比如 ESLint 的区别在于 Prettier 是一个专注于代码格式化的工具，对代码不做质量检查，但是如果团队规则不统一，你就知道什么叫一拉代码一篇红的感觉
    ```
    yarn add prettier -D
    ```

- stylelint
  - styleLint 是『一个强大的、现代化的 CSS 检测工具』, 与 ESLint 类似, 是通过定义一系列的编码风格规则帮助我们避免在样式表中出现错误.
  - css 样式的书写顺序及原理——很重要！很重要！很重要！概括讲就是，它涉及了浏览器的渲染原理：reflow 和 repaint
  - 很多小伙伴可能没有什么概念 请参考[css 样式的书写顺序及原理——很重要！](https://blog.csdn.net/qq_36060786/article/details/79311244)
  ```
  // 终端运行
  yarn add stylelint stylelint-config-standard -D
  // .stylelintrc.js 配置
    module.exports = {
    extends: "stylelint-config-standard",
    rules: {
      // 颜色值小写
      "color-hex-case": "lower",
      // 注释前无须空行
      "comment-empty-line-before": "never",
      // 使用数字或命名的 (可能的情况下) font-weight 值
      "font-weight-notation": null,
      // 在函数的逗号之后要求有一个换行符或禁止有空白
      "function-comma-newline-after": null,
      // 在函数的括号内要求有一个换行符或禁止有空白
      "function-parentheses-newline-inside": null,
      // url使用引号
      "function-url-quotes": "always",
      // 字符串使用单引号
      "string-quotes": "single",
      // 禁止低优先级的选择器出现在高优先级的选择器之后
      "no-descending-specificity": null,
      // 禁止空源
      "no-empty-source": null,
      // 禁止缺少文件末尾的换行符
      "no-missing-end-of-source-newline": null,
      },
     };
  ```
- 》》》更多

## 编辑器配置

- 推荐使用 webstorm 打开 preferences 直接搜索 eslint stylelint prettier 直接勾就好
- stylelint

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cc08b010ddac4240a05d4eaacde4173a~tplv-k3u1fbpfcp-watermark.image)

- eslint

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b8daff288348433f96fdf25c265cdc1f~tplv-k3u1fbpfcp-watermark.image)

- prettier
  ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7eb290693dff4342bcd2d275ec204477~tplv-k3u1fbpfcp-watermark.image)

## 项目目录划分

- React 中存在 UI 组件和容器组件的概念。顾名思义，UI 组件主要控制组件的显示，并不是与过多的逻辑耦合，容器组件中实现一些具体的逻辑，引入 UI 组件作为其子组件，将子组件（UI 组件）需要的一些数据通过组件间传值的方式方式传递到 UI 组件，进行数据的渲染。
  本项目也会按照此规则进行页面划分
- components 公共组件
  - 此目录下放的全部是纯净的组件不和业务挂钩的，后期我也会把这个单独发包到 npm 上
- materials 业务公共组件
  - 此目录下放的是和当前业务耦合的组件和业务挂钩
- hooks 自定义 hooks
- pages 页面组件
- service 接口定义
- utils 工具类

## 环境配置

## 跨域

- 面试贼喜欢问，基本上除了配置下本地代理，发版上线前端是不处理跨域的，在绝大部分场景下。
- 本地代理
  ```
  server: {
  port: 3001,
  proxy: {
   "/XXX": {
     target: "https://XXX",
     changeOrigin: true,
     cookieDomainRewrite: "",
     secure: false,
     },
   },
  },
  ```
- 线上 nginx

## package.json 文件配置

- 我们

  ```
   "scripts": {
   "dev": "vite",
   "build": "tsc && vite build",
   "serve": "vite preview",
   // 主要配置 触发pre-commit 进行elint stylelint 格式校验
   "lint": "npm run lint:js && npm run lint:style && npm run lint:prettier",
   "lint:js": "eslint --cache --ext .js,.jsx,.ts,.tsx --format=pretty ./src",
   "lint:prettier": "prettier --check "**/*" --end-of-line auto",
   "lint:style": "stylelint --fix "src/**/*.less" --syntax less",
   "lint-staged": "lint-staged",
   "lint-staged:js": "eslint --ext .js,.jsx,.ts,.tsx "
   },
   // 使用yorkie 来自动触发识别 gitHooks这个钩子，然后执行pre-commit 然后在执行lint-staged
   "gitHooks": {
   "pre-commit": "lint-staged"
   },
   // lint-staged 配置 校验less,ts,tsx等文件有无不规范写法
   "lint-staged": {
   "*.less": "stylelint --syntax less",
   "*.{js,jsx,ts,tsx}": "npm run lint-staged:js",
   "*.{js,jsx,tsx,ts,less,md,json}": [
     "prettier --write"
     ]
   },
  ```

## json-server mock 数据

- yarn add json-server -D
- 在终端
  ```
  mkdir mock
  cd mock
  touch db.json
  ```
- 在 package.json 中的 scripts 中添加

  ```
  "mock": "json-server mock/db.json --port 3008"
  ```

- 然后运行命令 yarn mock 就可以在控制台成功访问到我们在 db.json 中配置的接口数据了

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/339210a9bb0242b1a36ff21b959a5f97~tplv-k3u1fbpfcp-zoom-1.image)

## 请求封装

**注意事项：process.env 要替换成 import.meta.env**

- 全局的公共配置文件都会放在根目录下的 config.ts 文件中，目前项目刚开始只有少量配置信息

```ts
/**
 * 当前环境变量
 */
// process.env 在vite中不能用
// export const whyEnv = import.meta.env.VITE_REACT_URL || "";
/**
 * 接口地址
 * @description env 可为主要环境或自定义地址
 */
export const apiAddress = "http://localhost:3008/";

/**
 * 开发代理前缀
 */
export const proxyApi = "/api";

/**
 * 接口前缀
 * 判断环境，是否需要使用前缀
 * 生产环境不需要代理，同时本地配置的代理在生产环境也是不能用的
 */
export const urlPrefix = process.env.NODE_ENV === "development" ? proxyApi : "";
```

- 项目中用的 umi-request 这个库，目前我给配置的很少的东西，错误处理，中间件处理等等我的给删减了，刚开始不搞这么复杂

```tsx
// utils/request.ts

/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import umiRequest, { extend } from "umi-request";
import { urlPrefix } from "../config";

// 使用前缀，配合本地代理
export const whyRequest = extend({
  prefix: `${urlPrefix}`,
});

export default umiRequest;
```

- 定义接口: 要提前和后段沟通好入参数，出参数的格式，结合 ts 的类型提示，在其他地方调用的时候就可以直接看到接口定义的属性了，非常方便

```tsx
/**
 * 登陆请求数据类型
 */

export interface ILogin {
  userName: string;
  pwd: string;
}

/**
 * 返回数据类型
 * 要提前和后段定义好类型，等接口写完直接替换地址就好了
 *
 */
export interface ILoginData {
  code: number;
  message: string;
  token: string;
}

/**
 * 登陆接口
 * @param params
 */
export const loginApp = (params: ILogin): Promise<ILoginData> => {
  return whyRequest.get("/login", params);
};
```

- 使用就很简单，直接调用，之后我们会配合，ahooks 中的 useRequest()使用

```tsx
loginApp({ userName: "why", pwd: "123" }).then((res) => {
  if (res.code === 200) {
    history.push("/home");
  } else {
    message.error("用户名或密码错误！");
  }
});
```

## 国际化配置

- yarn add react-intl -D
- 国际化我们使用 react-intl 同时也要兼容 antd,的之类插件的中英文，我们在切换语言的时候插件库也要直接进行切换到对应的语言，配置起来也很方便，
- 我们直接上代码

```tsx
// 引入创建语言，国际化容器，暂时我们只需要用这两个就可以实现的我们目前的功能
import { createIntl, IntlProvider } from "react-intl";
// 我们需要引入antd 的国际化的配置
import antdEnUS from "antd/lib/locale/en_US";
import antdZhCN from "antd/lib/locale/zh_CN";
// 这是我们项目中中英文的配置，
import enLn from "./components/ln-en";
import zhLn from "./components/ln-zh-cn";
···核心代码
/**
* 包裹了默认 locale 的 Provider
* LocaleProvider 需要在App.tx使用，包装整个项目
* @param props
* @returns
  */
  export const LocaleProvider: React.FC = (props) => {
  return <IntlProvider locale={getLocale()}>{props.children}</IntlProvider>;
  };
/**
 * 获取当前的 intl 对象，可以在 node 中使用
 * @param locale 需要切换的语言类型
 * @param changeIntl 是否不使用 g_intl
 * @returns IntlShape
 */
  const getIntl = (locale?: string, changeIntl?: boolean) => {

  // 如果全局的 g_intl 存在，且不是 setIntl 调用
  if (gIntl && !changeIntl && !locale) {
  return gIntl;
  }
  // 如果存在于 localeInfo 中
  if (locale && localeInfo[locale]) {
  return createIntl(localeInfo[locale]);
  }

// 使用默认语言
if (localeInfo[defaultLanguage])
return createIntl(localeInfo[defaultLanguage]);
// 使用 zh-CN
if (localeInfo["zh-cn"]) return createIntl(localeInfo["zh-cn"]);
  // 抛错
if (!locale || !!localeInfo[locale]) {
  throw new Error(
  "The current popular language does not exist, please check the locales folder!"
  );
  }
// 如果还没有，返回一个空的
return createIntl({
locale: "zh-cn",
messages: {},
});
};
/**
* 语言转换
* @param descriptor
* @param values
  */
  export const formatMessage = (
  descriptor: MessageDescriptor,
  values?: Record<string, any>
  ) => {
  if (!gIntl) {
  setIntl(getLocale());
  }
  return gIntl.formatMessage(descriptor, values);
  };
```

- 页面中使用

  1，我们要在对应的 ts 文件中配置中英文对照

  ```tsx
  // 在locale 文件下配置中文对照
  export default {
    frontEnd: "Work hard on the front end",
    switchLan: "Chinese-English shift",
    switchToEn: "switch to chinese",
    switchToCh: " switch to english",
    localLan: "The internationalization of this project is   based on",
  };
  // 配置英文对照
  export default {
    frontEnd: "前端要努力",
    switchLan: "中英文切换",
    switchToEn: "切换到中文",
    switchToCh: "切换到英文",
    localLan: "本项目国际化基于",
  };
  ```

  2，在页面中我们直接调用 formatMessage() 这个方法就好了

```tsx
/**
 * 国际化页面
 * @constructor
 */
const LocalePage: React.FC = () => {
  // 这使用的是useState,其实这里是完全不需要的
  const [value, setValue] = React.useState(
    localStorage.getItem("why__locale") || "zh-cn"
  );
  // 切换多语言
  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value); //在这里是没有作用的代码
    setLocale(e.target.value); // 调用切换多语言方法，然后刷新页面
  };
  return (
    <Card title={formatMessage({ id: "switchLan" })} style={{ width: "500px" }}>
      <Radio.Group onChange={onChange} value={value}>
        <Radio value={"zh-cn"}>{formatMessage({ id: "switchToEn" })}</Radio>
        <Radio value={"en"}>{formatMessage({ id: "switchToCh" })}</Radio>
      </Radio.Group>
      <div className={styles.localLan}>
        {formatMessage({ id: "localLan" })}react-intl
      </div>
    </Card>
  );
};
```

- 国际化页面

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/89c1bdb57faf4992bab2e3d89ade5f27~tplv-k3u1fbpfcp-watermark.image)

## 路由

- [react 路由看这个](https://reactrouter.com/web/example/url-params)

- react 路由系统和 vue 大有不同，没有路由导航前钩子，配置登陆鉴权就要自己配置下，结合 token,
- 我们项目中路由的目的就是支持动态路由，路由权限，配置抽离，目前就是最简单的，裸的

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c3559713803e40f8bc317f2346bf5fcd~tplv-k3u1fbpfcp-watermark.image)

## 公共组件封装

- 我们如何封装一个公共组件？

  1， 项目中需要多处使用的组件

  2， 不和业务耦合的组件，业务耦合的公共组件

  3， 所有状态都可以在外部控制，通过传入的 props 来控制其行为而不是暴露其内部结构。

      封装良好的组件隐藏其内部结构，并提供一组属性来控制其行为。

      隐藏内部结构是必要的。其他组件没必要知道或也不依赖组件的内部  结构或实现细节

- 我们的项目中统一目录，主要为了看起来舒服

- 目录：![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fea319b6d14048d3945d25463bb9052e~tplv-k3u1fbpfcp-watermark.image)

  - index.tsx 为主入口文件
  - index.md 为组件使用样例，必要的代码注释，要清楚的告诉别人怎么使用这个公共组件

  - ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a4085d4df32040b6b477fa44600df266~tplv-k3u1fbpfcp-watermark.image)

### 如何使用 iconfont 的字体图标

- 封装 icon，主要配合 antd createFromIconfontCN 直接引入 iconfont 中的字体图标，非常方便
- 如下图所示直接登陆到 iconfont 网站生成对应 js 文件，在项目中直接用就好，很简单

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8386955eb62a4dae93e9d2743e47dcec~tplv-k3u1fbpfcp-zoom-1.image)

- classNames 的使用 [npm 介绍](https://www.npmjs.com/package/classnames)

```tsx
// 简单来说

// 这里可以根据各属性动态添加，如果属性值为true则为其添加该类名，

// 如果值为false，则不添加。这样达到了动态添加class的目的

<FontIcon
  className={classNames(
    {
      [styles.large]: size === "large", // 返回为true使用css .large,下方同理
      [styles.normal]: size === "normal",
      [styles.small]: size === "small",
      [styles.disabled]: disabled,
    },
    className
  )}
  {...restProps}
/>
```

- React.FC<>的使用

  1.React.FC 是函数式组件，是在 TypeScript 使用的一个泛型，FC 就是 FunctionComponent 的缩写，事实上 React.FC 可以写成 React.FunctionComponent：

```
const App: React.FunctionComponent<{ message: string }> = ({ message }) => (
  <div>{message}</div>
);
```

2.React.FC 包含了 PropsWithChildren 的泛型，不用显式的声明 props.children 的类型。React.FC<> 对于返回类型是显式的，而普通函数版本是隐式的（否则需要附加注释）。

3.React.FC 提供了类型检查和自动完成的静态属性：displayName，propTypes 和 defaultProps（注意：defaultProps 与 React.FC 结合使用会存在一些问题）。

4.我们使用 React.FC 来写 React 组件的时候，是不能用 setState 的，取而代之的是 useState()、useEffect 等 Hook API。

- [上面四点对 React.FC<>介绍的很好原文链接](https://blog.csdn.net/qq_18913129/article/details/105491090)

### 封装 icon 公共组件

```tsx
// IconType继承React.HTMLAttributes的属性，然后IconType,就拥有了其可被外界访问的属性
export interface IconType extends React.HTMLAttributes<any> {
  // type 必有属性，如果使用的时候没有静态检查是，会提示错误，类型不匹配，使用ts的好处，静态类型检查非常nice
  // 报错如下：TS2741: Property 'type' is missing in type '{}' but required in type 'IconType'.  index.tsx(7, 3): 'type' is declared here.
  type: string;
  // 图标尺寸，默认 normal
  size?: "small" | "normal" | "large" | null; // 可选属性，size后面加上？
  // 是否禁用
  disabled?: boolean;
}
// createFromIconfontCN 返回一个组件
const FontIcon = createFromIconfontCN({
  // 请给新图标一个合适的驼峰命名，并保证单词正确
  scriptUrl: "//at.alicdn.com/t/font_955172_ymhvgyhjk.js",
});

const Icon: React.FC<IconType> = ({
  className,
  size = "normal",
  disabled,
  ...restProps
}) => {
  // 我们使用classNames 这个插件动态渲染icon的状态，size,disabled等等
  return (
    <FontIcon
      className={classNames(
        {
          [styles.large]: size === "large",
          [styles.normal]: size === "normal",
          [styles.small]: size === "small",
          [styles.disabled]: disabled,
        },
        className
      )}
      {...restProps}
    />
  );
};
// 思考题：这个地方需要用，react.memo吗？
export default React.memo(Icon);
```

- 使用（截图中有 iconSelect 公共组件，此篇不做讲解）

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2791d90704854081b8428157c6f6a76d~tplv-k3u1fbpfcp-watermark.image)

## 权限

- 项目中的权限问题在面试中非常高频，无论是 vue 还是 react，问的你一脸闷逼，千奇百怪，其实按照你项目中答就好，给你出业务场景对应给我你自己的方案就好。没那么玄乎。
- 权限和业务关联非常大，应用场景也比较广泛，pc,app 等等，运用的也比较广泛，你现在在任何商业网站都能看到权限的区分。

- 关于权限的问题，大家也别想太复杂，要根据自己的实际业务出发，去实现登陆权限，路由权限，按钮级别权限
- 本篇教程更多的是给大家提供一个权限的一个思路，如果遇到更加复杂的业务场景对应梳理好然后做出对应的实现就好也可以找我来交流[链接](https://juejin.cn/user/1943592288395479/pins)。

## 权限应用场景

- 用户已登陆权限，token 怎么放，一般是放在 headers 里面，后端怎么处理 token 的过期时间等等，这块就不是我们所关心的，和他们设计有关，我们只需要处理好我们自己
  的业务逻辑就好，是放在浏览器哪个位置，是否需要长期存在，还是浏览器关闭之后就消失，等等。这些都是要和产品方沟通处理的
- 用户未登陆的权限是哪些，表现形式是哪些，可以使用项目中哪些功能等等，触发需要权限的功能时是让弹框提示用户请登录，还是直接跳转到登陆页面，还是弹出一个登陆框让用户直接登陆。
- 路由权限
  路由是否是动态路由，由配置页面生成，路由数据由后端返回，前端动态渲染路由，还是前端写死路由，通过 flag 判断路由是否展示，其次是如果访问到没有权限的路由的时候下一步是做什么，
  是直接跳转到登陆页，移除 token,还是展示一个提示的页面，提示用户没有此权限等等的展示效果，都是暗战你具体的业务场景去做处理的，不同的产品思路去展示就好

```tsx
const PrivateRoute: FC<RouteProps> = (props) => {
  const logged = sessionStorage.getItem("token");
  const history = useHistory();
  // 判断是否有token,如果有就展示，如果没有就不展示路由，展示403页面
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
```

- 角色权限
  - 模块权限有超级管理员，普通管理员，非管理员，访客，等等，每一个角色对应何种权限，有何种功能，以及如何展示，这个和产品业务对接好，对应展示不同权限信息就好。
- 组件权限
  - 组件权限在业务中极少使用，基本和按钮权限类似，是否直接隐藏。还是要看你们项目的具体业务，再去做处理
- 按钮权限

  - 按钮也是一个组件按钮权限基本上是就比较简单了，就是展示不展示，或者说按钮展示，请求接口时，厚度去做判断，该操作是否有权限。

- 下面是我们这个项目的权限处理

```tsx
/**
 * 按钮权限判定
 */
function AuthorizedButton({
  children,
  authority,
  render,
  noMatch,
}: AuthorizedProps) {
  // 目前是写死的按钮权限，真实场景应该会有配置页面，通过接口返回对应权限，然后放到permission中
  const [permissions] = useState<string[]>(["button", "button1", "button2"]);

  const result = checkPermissions(
    authority,
    permissions,
    render ? render() : children,
    noMatch
  );
  return <>{result}</>;
}
```

- 核心逻辑

```tsx | pure
export type IAuthorityType =
  | undefined
  | string
  | string[]
  | Promise<boolean>
  | ((permissions: string[]) => boolean | Promise<boolean>);

/**
 * 通用权限检查方法
 * @param authority - 按钮权限判定
 * @param permissions - 当前权限
 * @param target - 通过的组件
 * @param Exception - 未通过的组件
 */
const checkPermissions = <T, K>(
  authority: IAuthorityType,
  permissions: string[] = [],
  target: T,
  Exception: K
): T | K | React.ReactNode => {
  // 没有判定权限.默认查看所有
  if (!authority) {
    return target;
  }
  // 数组处理
  if (Array.isArray(authority)) {
    if (permissions.some((item) => authority.includes(item))) {
      return target;
    }
    if (
      permissions.length > 0 &&
      permissions.every((item) => authority.includes(item))
    ) {
      return target;
    }
    return Exception;
  }
  // string 处理
  if (typeof authority === "string") {
    if (permissions.some((item) => authority === item)) {
      return target;
    }
    return Exception;
  }
  // Promise 处理
  if (authority instanceof Promise) {
    return (
      <PromiseRender<T, K> ok={target} error={Exception} promise={authority} />
    );
  }
  // Function 处理
  if (typeof authority === "function") {
    const promise = authority(permissions);
    // 函数执行后返回值是 Promise
    if ((promise as Promise<boolean>) instanceof Promise) {
      return (
        <PromiseRender<T, K>
          ok={target}
          error={Exception}
          promise={promise as Promise<boolean>}
        />
      );
    }
    if (promise) {
      return target;
    }
    return Exception;
  }
  throw new Error("Unsupported parameters");
};
```

- 页面使用案例

```tsx | pure
import React from "react";
import Authorized from "@/components/Authorized";
// 通用权限包装处理权限的设计一定要和后段确定好，哪些有权限，哪些没有权限，包括路由权限，页面权限，按钮级别权限。
export default function Demo() {
  return (
    <>
      <AuthorizedButton authority="hello">Hello world</AuthorizedButton>
      <AuthorizedButton authority={["hello", "word"]}>
        Hello world
      </AuthorizedButton>
      <AuthorizedButton
        authority={["hello", "word"]}
        render={() => <div>Hello world</div>}
      />
      <AuthorizedButton
        authority={() => true}
        render={() => <div>Hello world</div>}
      />
    </>
  );
}
```

## 与后端对接

- 一般我们都会有权限的配置页面，权限的配置页面可以配置项目的管理员，非管理员权限，以及对应角色所对应的权限，每个权限对应到代码里面，是 1，2，3 也好，还是什么也好你自己和后台处理好就好
- 包括按钮级别，说的天花乱坠，其实按钮也是组件，关键的是你们想怎么展示，有权限的展示，没权限是什么展示，这个没有定论，看你们产品业务心情，你根据业务去做就好了，
  其次就是代码的封装，因为你们配置的权限数据，最后都会要返回到对应项目，还是前端处理的，后端只是一个中转，最后处理数据都是要你自己来的。切勿给自己挖坑。

## 5 版本的 React Router

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

当初始值为 null 时，有两种创建方式:

```jsx
const ref1 = React.useRef < HTMLInputElement > null;

const ref2 = (React.useRef < HTMLInputElement) | (null > null);
```

这两种的区别在于：
第一种方式的 ref1.current 是只读的（read-only），并且可以传递给内置的 ref 属性，绑定 DOM 元素 ；
第二种方式的 ref2.current 是可变的（类似于声明类的成员变量）

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
