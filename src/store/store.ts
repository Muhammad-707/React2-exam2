import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "@/reducer/filterSlice";
import cartReducer from "@/reducer/CartSlice";
import userReducer from "@/reducer/UserSlice";

export const store = configureStore({
  reducer: {
    filters: filterReducer,
    cart: cartReducer,
    products: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;