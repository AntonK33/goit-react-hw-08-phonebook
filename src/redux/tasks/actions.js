// import { nanoid } from "nanoid";
// import { createAction } from "@reduxjs/toolkit";

// export const addContact = createAction("contacts/addContact",(name, number)=> {
//   return {
//     payload: {
//       id: nanoid(),
//         name,
//         number,
      
//     },
//   };
// });

// export const deleteContact = createAction("contacts/deleteContact"); 

// export const filterContact = createAction("contacts/filterContact");






// export const addContact = (name, number)=> {
//   return {
//     type: "contacts/addContact",
//     payload: {
//       id: nanoid(),
//         name,
//         number,
      
//     },
//   };
// };
// export const deleteContact = contactId => {
//     return {
//         type: "contacts/deleteContact",
//         payload: contactId,
//     };
// };
// export const filterContact = name => {
//     return {
//         type: "contacts/filterContact",
//         payload: name,
//     };
// };
//