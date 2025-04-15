"use client"

import { store } from "@/store"
import { Provider } from "react-redux"

const UnsplashProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default UnsplashProvider