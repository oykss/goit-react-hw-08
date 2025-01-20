import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/slice';
import contactsReducer from './contacts/slice';
import filtersReducer from './filters/slice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
    auth: authSlice,
  },
});
