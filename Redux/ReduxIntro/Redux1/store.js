import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    add: (state, action) => {
      state.count += action.payload;
    }
  }
});

export const { add } = counterSlice.actions;

export const store = configureStore({
  reducer: counterSlice.reducer
});

export default store;