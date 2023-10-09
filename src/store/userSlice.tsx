/**
 * 创建 Redux State Slice
 */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from '../../store'

// 为 slice state 定义一个类型
interface UserState {
  name: string;
  phone?: number | null;
}

// 使用该类型定义初始 state
const initialState: UserState = {
  name: "",
  phone: null,
};

export const counterSlice = createSlice({
  name: "user",
  // `createSlice` 将从 `initialState` 参数推断 state 类型
  initialState,
  reducers: {
    // 使用 PayloadAction 类型声明 `action.payload` 的内容
    setUserInfo: (state, action: PayloadAction<UserState>) => {
      // state.name = action.payload.name;
      // state.phone = action.payload.phone;
    },
  },
});

// Action
export const { setUserInfo } = counterSlice.actions;
export default counterSlice.reducer;
