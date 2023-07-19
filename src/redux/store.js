
//import {combineReducers} from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer, 
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE, 
  REGISTER,
} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { filterReducer } from "./tasks/filterSlise";
import { contactsReducer } from "./tasks/contactsSlice";
import { authReducer } from "./auth/slice";


const authPersistConfig = {
  key:'auth',
  storage,
  whitelist: ['token'],
};

    export const store = configureStore({
        reducer:{
        auth: persistReducer(authPersistConfig, authReducer),
        contacts: contactsReducer,
        filter: filterReducer,
    },
        
        middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    ],
        devTools: process.env.NODE_ENV === 'development',
        });

  

export const persistor = persistStore(store);


// const rootReducer = combineReducers({
//     contacts: contactsReducer,
//     filter: filterReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer)



// export const store = configureStore({
//     reducer: persistedReducer,
     
//      middleware(getDefaultMiddleware) {
    
//     return getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     });

//   }
// });





// export const persistor = persistStore(store);

// const rootReducer = (state = initialState, action) => {
//   return state;
// };

//const enhancer = devToolsEnhancer();

// export const store = configureStore({
//     reducer: {
//     contacts: contactsReducer,
//     filter: filterReducer,
// }});