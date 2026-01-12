import React, { StrictMode, useEffect } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Content from "./components/content";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Contact from "./components/contact";

import "./App.css";

const App = (props) => {
  useEffect(() => {
    if (!props.books) {
      props.fetchBooks(1);
    }
  }, [props]);

  return (
    <>
      <StrictMode>
        <Router>
          <Header />
          <Switch>
            <Route
              path="/"
              exact
              component={() => <Content {...props} />}
            ></Route>
            <Route path="/cart" exact component={Cart}></Route>
            <Route path="/contact" exact component={Contact}></Route>
          </Switch>
        </Router>
      </StrictMode>
      <Footer />
    </>
  );
};

export default App;
