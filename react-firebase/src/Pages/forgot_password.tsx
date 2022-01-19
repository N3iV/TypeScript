import React, { FormEvent, useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import { useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "hooks/useDispatchSelector";
import { authResetPass } from "redux/slice/AuthSlice";
import Loading from "components/global/Loading";
const ForgotPassword = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const { loading } = useAppSelector((state) => state.auth);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(authResetPass(email));
  };
  return (
    <div className="max-w-lg text-gray-600">
      <h2 className="text-3xl font-semibold"> Forgot password</h2>
      <form className="my-3" onSubmit={handleSubmit}>
        <label htmlFor="email" className="text-lg">
          Your Email
        </label>
        <div className="flex w-full">
          <input
            type="email"
            name="email"
            id="email"
            className="w-full p-2 border"
            value={email}
            placeholder="exam@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="px-4 ml-2 border hover:bg-gray-300">Send</button>
        </div>
      </form>
      <button
        disabled={loading}
        onClick={() => history.goBack()}
        className="flex items-center px-4 py-2 text-white bg-gray-600 rounded-md hover:bg-gray-700"
      >
        <ArrowLeftIcon className="w-5 h-5 mr-1" /> Back
      </button>
      {loading && <Loading />}
    </div>
  );
};

export default ForgotPassword;
