import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactSlise';
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
