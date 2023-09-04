/**
 * 导入了 React-Redux 库中的 TypedUseSelectorHook、useDispatch 和 useSelector。
 * 这些都是 React-Redux 提供的 hook 和类型。
 *
 *
 * TypedUseSelectorHook 是 react-redux 库中的一个类型定义，用于在 React 组件中强类型地使用 useSelector 钩子。
 * 在使用 react-redux 库时，你可以使用 useSelector 钩子来从 Redux store 中选择状态。
 * 但是，默认情况下，useSelector 并不具备类型推断的能力，因此需要使用 TypedUseSelectorHook 来为其提供类型。
 *
 * TypedUseSelectorHook 是一个泛型函数，你可以使用它来创建自定义的 useTypedSelector 钩子，以便在组件中具备类型安全的使用 useSelector。
 *
 *
 * 在整个应用程序中使用，而不是简单的 `useDispatch` 和 `useSelector`
 *
 */
import { TypedUseSelectorHook, useSelector } from "react-redux";
import type { RootState } from "../store";

/**
 * useSelector hook 允许你从 Redux store 中选择和获取数据。
 */
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
