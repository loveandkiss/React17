import { configureStore } from "@reduxjs/toolkit";

/**
 * 将 Slice Reducers 添加到 Store 中
 */
import counterReducer from "./counterSlice";

// 创建 Redux Store 实例
// You can also pass an object full of "slice reducers", and configureStore will call combineReducers for you:
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// 打印实例
// window.console.log('store', store)

// 从 store 本身推断出 `RootState` 和 `AppDispatch` 类型
export type RootState = ReturnType<typeof store.getState>;
// 推断出类型: { posts: PostsState, comments: CommentsState, users: UsersState }
export type AppDispatch = typeof store.dispatch;

export default store;
