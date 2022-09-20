import { createSlice } from "@reduxjs/toolkit";

//Создаем слайс для корзины
const basketSlice = createSlice({
  name: 'basket', 
  initialState: {
    basket: [],
    totalCost: 0,
    count: 0,
    logged: false
  },

  reducers: {
    LoginStatus(state, action) {
      state.logged = action;
    },
    //обновление стейта и перезапись count и totalCost
    addProduct(state, action) {
      state.basket.push(action.payload);
      state.totalCost = state.basket.reduce((acc, val) => acc + val.praice, 0);
      state.count = state.basket.length;
    },
    removeProduct(state, action) {
      state.basket = state.basket.filter((_, index) => index !== action.payload);
      state.totalCost = state.basket.reduce((acc, val) => acc + val.praice, 0);
      state.count = state.basket.length;
    },
    clearBasket(state) {
      state.basket = [];
      state.totalCost = 0;
      state.count = 0;
    }
  }
})

export const { addProduct, LoginStatus, removeProduct, clearBasket } = basketSlice.actions

export default basketSlice.reducer