import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchUrl = createAsyncThunk(
    "contact/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts");
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
     });

export const addContacts = createAsyncThunk(
    "contact/addContacts",
    async ({ name, number }, thunkAPI) => {
    try {
        const response = await axios.post("/contacts", { name, number });
        return response.data;
    }
    catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
    
});

export const deleteContact = createAsyncThunk(
    "contact/deleteContacts",
    async (contactId, thunkAPI) => {
      try {
        const response =  await axios.delete(`/contacts/${contactId}`);
        return response.data;
    }
    catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
});