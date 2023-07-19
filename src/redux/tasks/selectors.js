

export const getContacts = state => state.contacts.items;
export const getState = state => state.contacts;
export const getFilterContact = state => state.filter.name;
export const getLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
