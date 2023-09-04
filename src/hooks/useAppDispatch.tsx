/**
 *
 * 导入了 React-Redux 库中的 TypedUseSelectorHook、useDispatch 和 useSelector。
 * 这些都是 React-Redux 提供的 hook 和类型。
 *
 * 在整个应用程序中使用，而不是简单的 `useDispatch` 和 `useSelector`
 *
 */
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store";

/**
 * 定义了一个名为 useAppDispatch 的自定义 hook，并且指定了它的类型为 () => AppDispatch。
 * 它使用了 useDispatch 函数，将其赋值给了 useAppDispatch。
 * 这样一来，在整个应用程序中就可以使用 useAppDispatch 这个 hook 来访问 Redux store 的 dispatch 函数。
 */
const useAppDispatch: () => AppDispatch = useDispatch;

export default useAppDispatch;
