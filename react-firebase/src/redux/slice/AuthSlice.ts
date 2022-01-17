import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";

export interface AuthState {
  currentUser?: any;
  loading: false;
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
      console.log(action);
      state.currentUser = action.payload;
    },
  },
});
export const { addUser } = AuthSlice.actions;
export default AuthSlice.reducer;
