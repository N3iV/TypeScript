import { useAppDispatch } from "hooks/useDispatchSelector";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { authLogin } from "redux/slice/AuthSlice";

const LoginForm = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [remember, setRemember] = useState(false);
  const dispatch = useAppDispatch();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const user = { email, password, remember };
    dispatch(authLogin(user));
  };
  const handleChange =
    (setFunc: React.Dispatch<React.SetStateAction<string>>) =>
    (
      e: ChangeEvent<{
        value: unknown;
      }>
    ) =>
      setFunc(e.target.value as string);

  return (
    <form className="px-4 py-3" onSubmit={handleSubmit}>
      <div className="my-3">
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={handleChange(setEmail)}
          type="text"
          className="w-full p-3 border"
          id="email"
        />
      </div>

      <div className="my-3">
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={handleChange(setPassword)}
          type="password"
          className="w-full p-3 border"
          id="password"
        />
      </div>
      <div className="flex justify-between items-center my-2">
        <div className="flex items-center">
          <input
            type="checkbox"
            name=""
            id="rb-me"
            className="w-4 h-4 mr-2"
            checked={remember}
            onChange={() => setRemember(!remember)}
          />
          <label htmlFor="rb-me" className="cursor-pointer">
            Remember me
          </label>
        </div>
        <Link
          to="/forgot_password"
          className="block ml-2 text-sm text-blue-400 cursor-pointer hover:text-blue-600"
        >
          Forgot password
        </Link>
      </div>
      <button
        type="submit"
        className="w-full p-3 my-2 font-semibold tracking-wider uppercase border-2 hover:bg-gray-300 "
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
