import { createContext, ReactNode, useReducer } from "react";
import { authReducer, AuthSlice } from "../Reducers/AuthReducers";
import { AuthActionType } from "../Reducers/types";

const { TOGGLE_AUTH } = AuthActionType;
interface AuthContextProps {
  children: ReactNode;
}

const AuthDefault = {
  isAuthenticated: false,
  username: "",
};
interface AuthContextDefault {
  authInfo: AuthSlice;
  toggleAuth: (username: string) => void;
}
export const AuthContext = createContext<AuthContextDefault>({
  authInfo: AuthDefault,
  toggleAuth: () => {},
});

const AuthContextProvider = ({ children }: AuthContextProps) => {
  const [authInfo, dispatch] = useReducer(authReducer, AuthDefault);
  const toggleAuth = (username: string) =>
    dispatch({ type: TOGGLE_AUTH, payload: username });

  //Can 1 context data

  const AuthContextData = {
    authInfo,
    toggleAuth,
  };

  return (
    <AuthContext.Provider value={AuthContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
