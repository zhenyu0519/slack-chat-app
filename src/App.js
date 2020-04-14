import React from "react";
// react router
import { Route, Switch } from "react-router-dom";
// components
import HomePage from "./pages/home-page/HomePage";
import SignIn from "./components/sign-in/SignIn";
import SignUp from "./components/sign-up/SignUp";
// style
import "semantic-ui-css/semantic.min.css";
import "./globalStyles.css";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
};

export default App;
