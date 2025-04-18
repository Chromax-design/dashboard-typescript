import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { unsplashApi } from './services/unsplash'

export const store = configureStore({
  reducer: {
    [unsplashApi.reducerPath]: unsplashApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(unsplashApi.middleware)
})

setupListeners(store.dispatch)