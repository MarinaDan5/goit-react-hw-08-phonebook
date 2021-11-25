import axios from 'axios';
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
} from './contacts-actions';

export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactRequest());
  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactSuccess(data));
  } catch (error) {
    dispatch(fetchContactError(error.message));
  }
};

export const addContact =
  ({ name, number }) =>
  dispatch => {
    const contacts = { name, number };
    dispatch(addContactRequest());

    axios
      .post('/contacts', contacts)
      .then(({ data }) => dispatch(addContactSuccess(data)))
      .catch(error => dispatch(addContactError(error)));
  };

export const delContacts = contactsId => dispatch => {
  dispatch(delContactRequest());

  axios
    .delete(`/contacts/${contactsId}`)
    .then(() => dispatch(delContactSuccess(contactsId)))
    .catch(error => dispatch(delContactError(error)));
};
