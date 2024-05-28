import { configureStore } from "@reduxjs/toolkit";
import guitarsSlice from "./guitars/guitarsSlice";

export const store = configureStore({
    reducer: {
        guitars: guitarsSlice,
    },
    devTools: true,
})