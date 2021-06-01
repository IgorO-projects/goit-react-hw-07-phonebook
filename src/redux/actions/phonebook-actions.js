// import types from './phonebook-types';
// import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

export const fetchContactRequest = createAction('phonebook/fetchContactRequest');
export const fetchContactSuccess = createAction('phonebook/fetchContactSuccess');
export const fetchContactError = createAction('phonebook/fetchContactError');

export const addContactRequest = createAction('phonebook/addContactRequest');
export const addContactSuccess = createAction('phonebook/addContactSuccess');
export const addContactError = createAction('phonebook/addContactError');

export const deletedContactRequest = createAction('phonebook/deletedContactRequest');
export const deletedContactSuccess = createAction('phonebook/deletedContactSuccess');
export const deletedContactError = createAction('phonebook/deletedContactError');

export const filteredContact = createAction("phonebook/filter", event => {
    return {
        payload: event.currentTarget.value
    }
})



// export const handleContactAdd = createAction("phonebook/add", contact => {
//     return {
//         payload: {
//             id: uuidv4(),
//             name: contact.name,
//             number: contact.number,
//         }
//     }
// })


// export const deletedContact = createAction("phonebook/delete")