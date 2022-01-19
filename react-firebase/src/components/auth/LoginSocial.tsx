import { useAppDispatch } from "hooks/useDispatchSelector";
import React from "react";
import { authFacebookLogin, authGoogleLogin } from "redux/slice/AuthSlice";

const LoginSocial = () => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <button
        onClick={() => dispatch(authGoogleLogin())}
        className="w-full p-3 my-3 font-semibold text-white bg-red-500 hover:bg-red-600"
      >
        Google
      </button>
      <button
        onClick={() => dispatch(authFacebookLogin())}
        className="w-full p-3 my-3 font-semibold text-white bg-blue-500 hover:bg-blue-600"
      >
        Facebook
      </button>
    </div>
  );
};

export default LoginSocial;
