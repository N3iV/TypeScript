import Errors from "components/global/Errors";
import { useAppDispatch } from "hooks/useDispatchSelector";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { registerApi } from "redux/actions/authActions";
import { authRegister } from "redux/slice/AuthSlice";
import { validRegister } from "utils/valid";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useAppDispatch();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const user = { name, email, password, confirmPassword };
    const result = validRegister(user);

    if (result.errLength > 0)
      return toast.error(() => <Errors errors={result.errMsg} />, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    dispatch(authRegister(user));
    setName("");
    setPassword("");
    setEmail("");
    setConfirmPassword("");
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
        <label htmlFor="name">Display Name</label>
        <input
          value={name}
          onChange={handleChange(setName)}
          type="text"
          className="w-full p-3 border"
          id="name"
        />
      </div>
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
      <div className="my-3">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          value={confirmPassword}
          onChange={handleChange(setConfirmPassword)}
          type="password"
          className="w-full p-3 border"
          id="confirmPassword"
        />
      </div>
      <button
        type="submit"
        className="w-full p-3 my-2 font-semibold tracking-wider uppercase border-2 hover:bg-gray-300 "
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
