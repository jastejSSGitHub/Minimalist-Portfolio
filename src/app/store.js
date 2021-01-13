import { configureStore } from '@reduxjs/toolkit';
import colorReducer from '../features/colorSlice';
import clickReducer from '../features/onClickContainerSlice';


export default configureStore({
  reducer: {
    color: colorReducer,
    click: clickReducer,
  },
});