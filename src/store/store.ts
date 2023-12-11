import { configureStore } from '@reduxjs/toolkit'
import itemSlice from './slices/itemSlice'

// Create redux store
export const store = configureStore({
  reducer: {
    itemSlice: itemSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;