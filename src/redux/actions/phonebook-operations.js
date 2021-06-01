import axios from 'axios';
import {
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    deletedContactRequest,
    deletedContactSuccess,
    deletedContactError
 } from './phonebook-actions';

axios.defaults.baseURL = 'http://localhost:4040';

export const fetchContacts = () => dispatch => {
    dispatch(fetchContactRequest())

    axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactSuccess(data)))
    .catch(error => dispatch(fetchContactError(error)))
}

export const handleContactAdd = contact => dispatch => {
    dispatch(addContactRequest())

    axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)))
};

export const deletedContact = id => dispatch => {
    dispatch(deletedContactRequest())

    axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deletedContactSuccess(id)))
    .catch(error => dispatch(deletedContactError(error)))
};