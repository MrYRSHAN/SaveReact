import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../components/MenuList";

//Создаем слайс для всего списка продуктов и инициализируем стейт списком из MenuList
const productsSlice = createSlice({
  name: 'products', 
  initialState: {
    products: products.map((p, i) => ({...p, id: i})),
    //новое поле, которое используется на странице товара
    product: null
  },

  reducers: {
    //получение продукта по index 
    getProduct(state, action) {
      state.product = state.products.find((product) => product.id === action.payload)
    }
  }
})

export const { getProduct } = productsSlice.actions

export default productsSlice.reducer