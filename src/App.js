import React, { Component } from "react";
// react router
import { Route, Switch, withRouter } from "react-router-dom";
// components
import HomePage from "./pages/home-page/HomePage";
import SignIn from "./components/sign-in/SignIn";
import SignUp from "./components/sign-up/SignUp";
// firebase
import { auth } from "./firebase/firebase";
// style
import "semantic-ui-css/semantic.min.css";
import "./globalStyles.css";
// redux
import { connect } from "react-redux";
import { setUser } from "./redux/user/userActions";
class App extends Component {
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("user", user);
        this.props.setUser(user);
        this.props.history.push("/");
      }
    });
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = ({ user: { isLoading, currentUser } }) => ({
  currentUser,
  isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
