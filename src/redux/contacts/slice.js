import { createSlice } from '@reduxjs/toolkit';
import { logOut } from '../auth/operations';
import { addContact, deleteContact, fetchContacts } from './operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const handlePending = state => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const slice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.filter(({ id }) => id !== action.payload.id);
      })
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(logOut.fulfilled, state => {
        state.items = [];
        state.loading = false;
        state.error = null;
      });
  },
});

export default slice.reducer;
