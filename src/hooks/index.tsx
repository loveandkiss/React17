/**
 * 导入了 React-Redux 库中的 TypedUseSelectorHook、useDispatch 和 useSelector。
 * 这些都是 React-Redux 提供的 hook 和类型。
 */
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../store'

// 在整个应用程序中使用，而不是简单的 `useDispatch` 和 `useSelector`

/**
 * 定义了一个名为 useAppDispatch 的自定义 hook，并且指定了它的类型为 () => AppDispatch。
 * 它使用了 useDispatch 函数，将其赋值给了 useAppDispatch。这样一来，在整个应用程序中就可以使用 useAppDispatch 这个 hook 来访问 Redux store 的 dispatch 函数。
 */
export const useAppDispatch: () => AppDispatch = useDispatch

/**
 * useSelector hook 允许你从 Redux store 中选择和获取数据。
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
