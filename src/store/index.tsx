import { configureStore } from '@reduxjs/toolkit'

/**
 * 将 Slice Reducers 添加到 Store 中
 */
import counterReducer from '../features/counter/counterSlice'

// 创建 Redux Store
const store =  configureStore({
  reducer: {
    counter: counterReducer
  }
})
window.console.log('store', store)
// 从 store 本身推断出 `RootState` 和 `AppDispatch` 类型
export type RootState = ReturnType<typeof store.getState>
// 推断出类型: { posts: PostsState, comments: CommentsState, users: UsersState }
export type AppDispatch = typeof store.dispatch


export default store