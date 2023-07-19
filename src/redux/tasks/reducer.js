//import { combineReducers } from "redux";
// import { createReducer } from "@reduxjs/toolkit";
// import { addContact, deleteContact, filterContact } from "./actions";

// const initialState = [];

// export const contactsReducer = createReducer(initialState, {
//   [addContact]: (state, {payload}) => [...state, payload],       
//   [deleteContact]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),  
     
// });
// export const filterReducer = createReducer("", { 
//   [filterContact]: (_, { payload }) => payload,  
// })




//  export const contactsReducer = (state = initialState, action)=> {
//   switch (action.type) {
//     case addContact.type:
//       return [...state, action.payload];
//          case deleteContact.type:
//       return state.filter(contact => contact.id !== action.payload);
//       //   case "contacts/filterContact":
//       // return state.filter(contact => contact.includs(e.target.value));
//        case "contacts/deleteAll":
//             return state([]);
//          default:
//       return state;
//     }
    
// }
//const filter = '';
//   case "contacts/filterContact":
  // return state.filter(contact => contact.includs(e.target.value));
   
 
// export const filterReducer = (state = filter, action) => {
//   switch (action.type) {
//     case filterContact.type:
//       return action.payload;
//     default: return state;
//   }
  
// }
//
// export const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });