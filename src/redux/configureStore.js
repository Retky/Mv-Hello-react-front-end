import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import greetingReducer from './greetingReducer';

const store = configureStore(
  { reducer: { greeting: greetingReducer } },
  applyMiddleware(thunk)
);

export default store;
