import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';

//Создаем store из rootReducer
const store = configureStore({
  reducer:
    rootReducer
});

export default store;
