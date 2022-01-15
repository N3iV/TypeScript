import { AuthActionType } from "./types";
export interface AuthSlice {
  isAuthenticated: boolean;
  username: string;
}
type AuthAction = {
  type: AuthActionType;
  payload: string;
};
export const authReducer = (state: AuthSlice, action: AuthAction) => {
  return state;
};
