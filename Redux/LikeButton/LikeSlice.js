import { createSlice } from '@reduxjs/toolkit'

const likeSlice = createSlice({
  name: 'like',
  initialState: 0,
  reducers: {
    like: state => state + 1,
  },
})

export const { like } = likeSlice.actions
export default likeSlice.reducer
