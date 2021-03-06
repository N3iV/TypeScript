import LoginForm from "components/auth/LoginForm";
import LoginSocial from "components/auth/LoginSocial";
import Loading from "components/global/Loading";
import { useAppSelector } from "hooks/useDispatchSelector";
import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const { loading } = useAppSelector((state) => state.auth);
  const history = useHistory();
  const { currentUser } = useAppSelector((state) => state.auth);
  useEffect(() => {
    if (currentUser) {
      return history.replace("/");
    }
  }, [history, currentUser]);
  return (
    <div className="flex my-2 justify-center items-center min-h-[calc(100vh-6rem)]">
      <div className="container max-w-md p-5 shadow-sm border-solid border-2">
        <h2 className="my-3 text-2xl font-semibold  tracking-widest text-center uppercase">
          N3iV
        </h2>
        <LoginForm />
        <span className="block uppercase text-center">or</span>
        <LoginSocial />
        <p className="font-semibold my-5">
          You already have an account?
          <Link
            to="/register"
            className="mx-3 font-bold text-red-500 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
      {loading && <Loading />}
    </div>
  );
};

export default Login;
