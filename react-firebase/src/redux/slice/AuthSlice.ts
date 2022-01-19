import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { registerApi } from "redux/actions/authActions";
import { IRegister } from "types/index.d";
import { ILogin } from "./../../types/index.d";
import {
  facebookApi,
  forgotPassApi,
  googleApi,
  loginApi,
  signOutApi,
} from "./../actions/authActions";
export const authRegister = createAsyncThunk(
  "auth/register",
  async (user: IRegister) => {
    return await registerApi(user);
  }
);
export const authLogin = createAsyncThunk(
  "auth/login",
  async (user: ILogin) => {
    return await loginApi(user);
  }
);
export const authGoogleLogin = createAsyncThunk(
  "auth/googleLogin",
  async () => {
    return await googleApi();
  }
);
export const authFacebookLogin = createAsyncThunk(
  "auth/facebookLogin",
  async () => {
    return await facebookApi();
  }
);
export const authResetPass = createAsyncThunk(
  "auth/forgot_password",
  async (email: string) => {
    return await forgotPassApi(email);
  }
);
export const authLogout = createAsyncThunk("auth/logout", async () => {
  return await signOutApi();
});
export interface AuthState {
  currentUser?: any;
  loading: boolean;
}

const initialState: AuthState = {
  currentUser: void 0,
  loading: false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authRegister.pending, (state) => {
        state.loading = true;
      })
      .addCase(authRegister.fulfilled, (state) => {
        state.loading = false;
      })
      // .addCase(authRegister.rejected, (state) => {
      //   state.loading = false;
      // }); ko can vi ben action da dung try catch
      //!Login
      .addCase(authLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(authLogin.fulfilled, (state) => {
        state.loading = false;
      })
      //*GOOGLE LOGIN
      .addCase(authGoogleLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(authGoogleLogin.fulfilled, (state) => {
        state.loading = false;
      })
      //*FACEBOOK LOGIN
      .addCase(authFacebookLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(authFacebookLogin.fulfilled, (state) => {
        state.loading = false;
      })
      //*Reset pass
      .addCase(authResetPass.pending, (state) => {
        state.loading = true;
      })
      .addCase(authResetPass.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(authLogout.pending, (state) => {
        state.loading = true;
      })
      .addCase(authLogout.fulfilled, (state) => {
        state.loading = false;
      });
  },
});
export const { addUser } = AuthSlice.actions;
export default AuthSlice.reducer;
