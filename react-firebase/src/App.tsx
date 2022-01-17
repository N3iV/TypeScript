import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageRender from "./PageRender";
import "./App.css";
const App = () => {
  return (
    <BrowserRouter>
      <h1 className="text-green-500">Hello</h1>
      <Switch>
        <Route path="/" component={PageRender} exact />
        <Route path="/:page" component={PageRender} exact />
        <Route path="/:page/:id" component={PageRender} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
