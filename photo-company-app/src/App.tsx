import React from "react";
import { Switch, Route } from "react-router-dom";

import GlobalStyle from "./GlobalStyle";
import Nav from "./components/Nav/Nav";
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";

function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route exact path="/">
          <AboutUs />
        </Route>
        <Route path="/work">
          <OurWork />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </>
  );
}

export default App;
