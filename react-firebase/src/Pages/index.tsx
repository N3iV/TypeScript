import { useAppDispatch, useAppSelector } from "hooks/useDispatchSelector";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const { currentUser, loading } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const history = useHistory();
  console.log(currentUser);

  useEffect(() => {
    if (!currentUser) {
      return history.replace("/login");
    }
  }, [history, currentUser]);
  return <div>Home</div>;
};

export default Home;
