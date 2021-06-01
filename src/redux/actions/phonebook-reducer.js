import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
// import types from './phonebook-types';
import { handleContactAdd, deletedContact, filteredContact } from '../actions/phonebook-actions';

const initialState = [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
];

const contactReducer = createReducer(initialState, {
    [handleContactAdd]: (state, { payload }) => [...state, payload],
    [deletedContact]: (state, { payload }) => state.filter(contact => contact.id !== payload),
})

const filterReducer = createReducer('', {
    [filteredContact]: (_, { payload }) => payload,
})

export default combineReducers({
    items: contactReducer,
    filter: filterReducer
})

