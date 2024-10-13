import { configureStore } from '@reduxjs/toolkit'
import genreSlice from "./slices/genreSlice.jsx"

export const store = configureStore({
  reducer: {
    genre:genreSlice
  },
})