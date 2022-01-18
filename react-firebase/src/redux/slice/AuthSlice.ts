import { registerApi } from "redux/actions/authActions";
import { IRegister } from "types/index.d";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const authRegister = createAsyncThunk(
  "auth/register",
  async (user: IRegister) => {
    return await registerApi(user);
  }
);
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
      });
    // .addCase(authRegister.rejected, (state) => {
    //   state.loading = false;
    // }); ko can vi ben action da dung try catch
  },
});
export const { addUser } = AuthSlice.actions;
export default AuthSlice.reducer;
