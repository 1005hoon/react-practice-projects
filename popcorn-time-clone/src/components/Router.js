import React from "react";
import {
  BrowserRouter as AppRouter,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Header from "./Header";
import Home from "../routes/Home/HomeContainer";
import TV from "../routes/TV/TVContainer";
import Search from "../routes/Search/SearchContainer";
import Detail from "../routes/Detail/DetailContainer";

const Router = () => {
  return (
    <AppRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" exact component={TV} />
        <Route path="/search" exact component={Search} />
        <Route path="/movie/:id" exact component={Detail} />
        <Route path="/show/:id" exact component={Detail} />

        <Redirect from="*" to="/" />
      </Switch>
    </AppRouter>
  );
};

export default Router;
