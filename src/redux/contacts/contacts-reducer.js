import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  delContactRequest,
  delContactSuccess,
  delContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  filterContacts,
} from './contacts-actions';

const items = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => {
    let namesArray = state.map(item => item.name);
    if (!namesArray.includes(payload.name)) {
      return [...state, payload];
    } else {
      alert(`${payload.name} is already in contacts!`);
      return state;
    }
  },
  [delContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,

  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,

  [delContactRequest]: () => true,
  [delContactSuccess]: () => false,
  [delContactError]: () => false,
});

export default combineReducers({ items, filter, loading });
