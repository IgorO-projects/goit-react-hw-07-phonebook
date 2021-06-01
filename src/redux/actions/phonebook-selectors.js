import { createSelector } from '@reduxjs/toolkit';

export const getFilter = state => state.contacts.filter;
export const getAllContacts = state => state.contacts.items;
// export const getFilteredContacts = state => {
//     const { contacts } = state;
  
//     if(contacts.filter) {
//       const normalizedFilter = getFilter(state).toLowerCase(); 
//       const filtredContacts = contacts.items.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

//       return filtredContacts;
//     }  

//     return contacts.items;
// }

export const getFilteredContacts = createSelector([getAllContacts, getFilter],
    (contacts, filter) => {
        const normalizedFilter = filter.toLowerCase(); 

        if(filter) {
            return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
        };

        return contacts;
    })