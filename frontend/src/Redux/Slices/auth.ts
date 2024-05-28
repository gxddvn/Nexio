import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import axios from "../../axios";
import { JwtPayload, jwtDecode } from "jwt-decode";

export interface ObjTokenInterface {
    config: {},
    data: {
        token: string,
    },
    headers: {},
    request: {},
    status: number,
    statusText: string
}

export interface ObjDataInterface {
    id: number,
    login: string,
    p_num: number,
    email: string,
    name: string,
    user_role: string,
    num_publications: number,
    num_subscribers: number,
    num_subscriptions: number,
    img_avatar: string
}

export interface ObjDataLogin {
    log_email: string,
    password: string
}

export interface ObjDataReg {
    login: string, 
    p_num: string, 
    email: string, 
    password: string, 
    name: string
}

export const fetchRegister = createAsyncThunk("/auth/fetchRegister", async (params:ObjDataReg) => {
    const data:ObjTokenInterface = await axios.post("/profiles/registration", params);
    window.localStorage.setItem("token", data.data.token);
    return jwtDecode<JwtPayload>(data.data.token);
});

export const fetchAuth = createAsyncThunk("/auth/fetchAuth", async (params:ObjDataLogin) => {
    const data:ObjTokenInterface = await axios.post("/profiles/login", params);
    window.localStorage.setItem("token", data.data.token);
    return jwtDecode<JwtPayload>(data.data.token);
});

export const fetchAuthMe = createAsyncThunk("/auth/fetchAuthMe", async () => {
    const data:ObjTokenInterface = await axios.get("/profiles/auth");
    window.localStorage.setItem("token", data.data.token);
    return jwtDecode<JwtPayload>(data.data.token);
});

interface StateInter {
    user: ObjDataInterface | null,
    status: "loading" | "loaded" | "error",
}

const initialState: StateInter = {
    user: null,
    status: "loading",
};

const setLoadingStatus = (state: StateInter) => {
    state.status = "loading";
};

const setLoadedStatus = (state: StateInter, action: any) => {
    state.status = "loaded";
    console.log(action)
    state.user = action.payload;
};

const setErrorStatus = (state: StateInter) => {
    state.status = "error";
    state.user = null;
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
        .addCase(fetchRegister.pending, setLoadingStatus)
        .addCase(fetchRegister.fulfilled, setLoadedStatus)
        .addCase(fetchRegister.rejected, setErrorStatus)
        .addCase(fetchAuth.pending, setLoadingStatus)
        .addCase(fetchAuth.fulfilled, setLoadedStatus)
        .addCase(fetchAuth.rejected, setErrorStatus)
        .addCase(fetchAuthMe.pending, setLoadingStatus)
        .addCase(fetchAuthMe.fulfilled, setLoadedStatus)
        .addCase(fetchAuthMe.rejected, setErrorStatus)
    },
});

export const selectIsAuth = (state: { auth: { user: ObjDataInterface | null; }; }) => Boolean(state.auth.user);
export const selectAuthData = createSelector(
    (state: { auth: { user: ObjDataInterface | null; }; }) => state.auth.user,
    (user) => ({
        IsAuth: Boolean(user),
        user,
    })
);

export const authReducer = authSlice.reducer;
export const { logout } = authSlice.actions;