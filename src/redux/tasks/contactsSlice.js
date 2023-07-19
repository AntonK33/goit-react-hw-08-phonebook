import { createSlice } from "@reduxjs/toolkit";
import { fetchUrl, addContacts, deleteContact } from "redux/tasks/operations";


const pendingReqest = state => {
    state.isLoading = true;
}
const rejectReqest = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
}
let contacts = {
    items: [],
    isLoading: false,
    error: null,
};

const contactsSlice = createSlice({ 
    name: "contact",
    initialState:contacts,
    extraReducers: {
        [fetchUrl.pending]:pendingReqest,
        [fetchUrl.fulfilled](state, action) {  
             state.isLoading = false;
             state.error = null;
             state.items = action.payload;   
        },
        [fetchUrl.rejected]:rejectReqest,

        [addContacts.pending]:pendingReqest,
        [addContacts.fulfilled](state, action) {
             state.isLoading = false;
             state.error = null;
             state.items.push(action.payload);  
        },
        [addContacts.rejected]:rejectReqest,
            
        [deleteContact.pending]:pendingReqest,
        [deleteContact.fulfilled](state, action) {
            //return state.filter(contact => contact.id !== action.payload);
             state.isLoading = false;
             state.error = null;
            const index = state.items.findIndex((set) => set.id === action.payload.id)
            state.items.splice(index,1)
        },
        [deleteContact.rejected]:rejectReqest,
    }
});

//export const { addContacts, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
