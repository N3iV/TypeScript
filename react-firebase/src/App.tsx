import Header from "components/Header";
import {
  onAuthStateChanged,
  sendEmailVerification,
  signOut,
} from "firebase/auth";
import React, { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import { auth } from "./Firebase";
import PageRender from "./PageRender";
const App = () => {
  const history = useHistory();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log(user);
      if (user) {
        if (!user.emailVerified) {
          await signOut(auth);
          await sendEmailVerification(user);
          return history.push("/email_verified");
        }
        console.log(user);
      }
    });
    return unsubscribe;
  }, []);
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
