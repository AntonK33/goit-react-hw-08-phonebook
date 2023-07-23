import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser } from "./operations";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.fulfilled](state, actyon) {
            state.user = actyon.payload.user;
            state.token = actyon.payload.token;
            state.isLoggedIn = true;
        },
        [logIn.fulfilled](state, actyon) {
          state.user = actyon.payload.user;
            state.token = actyon.payload.token;
            state.isLoggedIn = true;
        },

          [logOut.fulfilled](state, actyon) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        },
        [refreshUser.fulfilled](state,actyon){
            state.user = actyon.payload;
            state.isLoggedIn = true;
        }
    }




})

export const authReducer = authSlice.reducer;