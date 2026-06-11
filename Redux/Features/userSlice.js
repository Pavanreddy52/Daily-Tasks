import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  age: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state) => {
      state.name = "Pavan";
      state.age = 22;
    },
    clearUser: (state) => {
      state.name = "";
      state.age = 0;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;