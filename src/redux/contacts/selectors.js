import { createSelector } from '@reduxjs/toolkit';
import { selectStatusFilter } from '../filters/selectors';

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectFilterContacts = createSelector(
  [selectContacts, selectStatusFilter],
  (contacts, status) => {
    const contactsReverse = [...contacts].reverse();
    const filter = status.toLowerCase().trim();

    if (filter.length === 0) return contactsReverse;

    return contactsReverse.filter(({ name }) =>
      name.toLowerCase().includes(filter)
    );
  }
);
