import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";
import { jwtDecode } from "jwt-decode";

export const fetchRegister = createAsyncThunk("/auth/fetchRegister", async (params) => {
    const { data } = await axios.post("/profiles/registration", params);
    window.localStorage.setItem("token", data.token);
    return jwtDecode(data.token);
});

export const fetchAuth = createAsyncThunk("/auth/fetchAuth", async (params) => {
    const { data } = await axios.post("/profiles/login", params);
    window.localStorage.setItem("token", data.token);
    return jwtDecode(data.token);
});

export const fetchAuthMe = createAsyncThunk("/auth/fetchAuthMe", async () => {
    const { data } = await axios.get("/profiles/auth");
    window.localStorage.setItem("token", data.token);
    return jwtDecode(data.token);
});

const initialState = {
    user: null,
    status: "loading",
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchRegister.pending, (state) => {
            state.status = "loading";
            state.user = null;
        })
        .addCase(fetchRegister.fulfilled, (state, action) => {
            state.status = "loaded";
            state.user = action.payload;
        })
        .addCase(fetchRegister.rejected, (state) => {
            state.status = "error";
            state.user = null;
        })
        .addCase(fetchAuth.pending, (state) => {
            state.status = "loading";
            state.user = null;
        })
        .addCase(fetchAuth.fulfilled, (state, action) => {
            state.status = "loaded";
            state.user = action.payload;
        })
        .addCase(fetchAuth.rejected, (state) => {
            state.status = "error";
            state.user = null;
        })
        .addCase(fetchAuthMe.pending, (state) => {
            state.status = "loading";
            state.user = null;
        })
        .addCase(fetchAuthMe.fulfilled, (state, action) => {
            state.status = "loaded";
            state.user = action.payload;
        })
        .addCase(fetchAuthMe.rejected, (state) => {
            state.status = "error";
            state.user = null;
        })
    },
});



export const selectIsAuth = (state) => Boolean(state.auth.user);
export const authMe = (state) => state.auth.user;

export const authReducer = authSlice.reducer;

export const { logout } = authSlice.actions;