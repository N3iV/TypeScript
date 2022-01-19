import Header from "components/Header";
import {
  onAuthStateChanged,
  sendEmailVerification,
  signOut,
} from "firebase/auth";
import { useAppDispatch } from "hooks/useDispatchSelector";
import React, { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { addUser } from "redux/slice/AuthSlice";
import "./App.css";
import { auth } from "./Firebase";
import PageRender from "./PageRender";
const App = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const providerID = user.providerData.some(
          (p) => p.providerId === "password"
        );

        if (providerID && !user.emailVerified) {
          await signOut(auth);
          await sendEmailVerification(user);
          return history.push("/email_verified");
        }
        dispatch(addUser(user));
      }
    });
    return unsubscribe;
  }, [history]);
  return (
    <>
      <Header />

      <Switch>
        <Route path="/" component={PageRender} exact />
        <Route path="/:page" component={PageRender} exact />
        <Route path="/:page/:id" component={PageRender} exact />
      </Switch>
    </>
  );
};

export default App;
