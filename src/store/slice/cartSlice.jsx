import { createSlice } from "@reduxjs/toolkit";
// localStorage den gelen cart bilgilerini parse eder
const fetchFromLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

// Dışarıdan gelen verileri local Storage ' e kaydeder
const storeInLocalStorage = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

const initialState = {
  carts: fetchFromLocalStorage(), // Cartlar üzerindeki veriyi localStorage ile alırım.
  itemCount: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Cart ekleme
    addToCart: (state, action) => {
      const isItemCart = state.carts.find(
        (item) => item.id === action.payload.id //dışarıdan gelen (id değeri ile eşit olanları)aynı ürün varsa onları bul
      );
      if (isItemCart) {
        const tempCart = state.carts.map((item) => {
          if (item.id === action.payload.id) {
            let tempQty = item.quantity + action.payload.quantity;
            let tempTotalPrice = tempQty * item.price;
            return {
              ...item,
              quantity: tempQty,
              totalPrice: tempTotalPrice,
            };
          } else {
            return item;
          }
        });

        state.carts = tempCart;
        storeInLocalStorage(state.carts);
      } else {
        state.carts.push(action.payload); // Ürün bulunamama durumunda
        storeInLocalStorage(state.carts);
      }
    },

    //Cartı silme

    removeFromCart: (state, action) => {
      const tempCart = state.carts.filter((item) => item.id !== action.payload); // id'leri farklı olanları filtrele , aynı olanları sil
      state.carts = tempCart;
      storeInLocalStorage(state.carts); // localStorage ' i günceller
    },

    // Tüm cartları temizler
    clearCart: (state) => {
      state.carts = [];
      storeInLocalStorage(state.carts);
    },

    // Cart kaç tane ürün varsa fiyatlarını toplar
    getCartTotal: (state) => {
      state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
        return (cartTotal += cartItem.price * cartItem.quantity);
      }, 0);
      state.itemCount = state.carts.length;
    },
  },
});

export const { addToCart, removeFromCart, clearCart, getCartTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
