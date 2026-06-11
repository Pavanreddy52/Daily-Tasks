import { configureStore } from '@reduxjs/toolkit'
import likeReducer from './LikeSlice'

export const store = configureStore({
  reducer: {
    likes: likeReducer,
  },
})
