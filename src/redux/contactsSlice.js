import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '', 
  },
  reducers: {
    setContacts(state, action) {
      state.items = action.payload;
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
        state.items = state.items.filter(contact => contact.id !== action.payload);
    }
  }
});

export const { setContacts, setFilter, addContact, deleteContact} = contactsSlice.actions;
export default contactsSlice.reducer;