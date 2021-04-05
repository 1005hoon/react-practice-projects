import React from "react";
import {
  BrowserRouter as AppRouter,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Header from "./Header";
import Home from "../routes/Home";
import TV from "../routes/TV";
import Search from "../routes/Search";

const Router = () => {
  return (
    <AppRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/TV" exact component={TV} />
        <Route path="/TV/popular" render={() => <h1>popular</h1>} />
        <Route path="/Search" exact component={Search} />
        <Redirect from="*" to="/" />
      </Switch>
    </AppRouter>
  );
};

export default Router;
