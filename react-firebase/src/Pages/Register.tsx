import RegisterForm from "components/auth/RegisterForm";
import Loading from "components/global/Loading";
import { useAppSelector } from "hooks/useDispatchSelector";
import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

const Register = () => {
  const { loading, currentUser } = useAppSelector((state) => state.auth);
  const history = useHistory();
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
        <RegisterForm />
        <p className="font-semibold my-5">
          You already have an account?
          <Link
            to="/login"
            className="mx-3 font-bold text-red-500 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
      {loading && <Loading />}
    </div>
  );
};

export default Register;
