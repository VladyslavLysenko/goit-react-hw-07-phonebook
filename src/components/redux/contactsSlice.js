import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
const contactsInitialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(contactName, number) {
        return {
          payload: {
            id: nanoid(),
            name: contactName,
            number: number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
  fetchingInProgress(state) {
    state.isLoading = true;
  },
  fetchingSuccess(state, action) {
    state.isLoading = false;
    state.error = null;
    state.items = action.payload;
  },
  fetchingError(state, action) {
    state.isLoading = false;
    state.error = action.payload;
  },
});

// Експортуємо генератори екшенів та редюсер
export const {
  addContact,
  deleteContact,
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} = contactsSlice.actions;
// new

export const contactsReducer = contactsSlice.reducer;
// Selectors
export const getContacts = state => state.contacts;
