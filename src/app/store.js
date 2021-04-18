import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import blackjackReducer from '../features/blackjack/blackjackSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    blackjack: blackjackReducer
  },
});
