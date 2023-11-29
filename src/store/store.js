import {configureStore} from "@reduxjs/toolkit"
import categorySlice from "./slice/categorySlice"
import productSlice from "./slice/productSlice"
import cartSlice from "./slice/cartSlice"


export const store = configureStore ({
    reducer: {
        categories :categorySlice,
        products : productSlice,
        carts : cartSlice
       
    }
  ,middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Serileştirme hatası kontrolünü devre dışı bırakmak için
    }),
  devTools: process.env.NODE_ENV !== "production", // Redux DevTools'u sadece development ortamında etkinleştir
}
)