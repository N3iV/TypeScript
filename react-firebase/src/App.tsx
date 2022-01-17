import Header from "components/Header";
import { useAppDispatch, useAppSelector } from "hooks/useDispatchSelector";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { addUser } from "redux/slice/AuthSlice";
import "./App.css";
import PageRender from "./PageRender";
const App = () => {
  const { currentUser, loading } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(addUser({ name: "Vien Hoang" }));
  }, [dispatch]);
  console.log({ currentUser, loading });
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route path="/" component={PageRender} exact />
        <Route path="/:page" component={PageRender} exact />
        <Route path="/:page/:id" component={PageRender} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
