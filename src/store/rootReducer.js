import { combineReducers } from 'redux';
import productsReducer from './reducers/productsReducer';
import basketReducer from './reducers/basketReducer';

//Собираем все редьюсеры в один rootReducer
export const rootReducer = combineReducers({
  products: productsReducer,
  basket: basketReducer,
});