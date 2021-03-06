import React from "react";
import { Route } from "react-router-dom";

import Home from "./pages/Home";

import GlobalStyles from "./components/GlobalStyles";
function App() {
  return (
    <>
      <GlobalStyles />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </>
  );
}

export default App;
