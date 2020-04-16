import React, { Component } from "react";
import firebase from "firebase";
//style
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message,
  Icon,
} from "semantic-ui-react";
// react route
import { Link } from "react-router-dom";
// firebase
import { auth } from "../../firebase/firebase";
// md5
import md5 from "md5";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: [],
      loading: false,
      usersRef: firebase.database().ref("user"),
    };
  }

  isFormValid = () => {
    let errors = [];
    let error;
    if (this.isFormEmpty(this.state)) {
      error = { message: "Fill in all fields!" };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else if (!this.isPasswordValid(this.state)) {
      error = { message: "Password is invalid" };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else {
      return true;
    }
  };

  isFormEmpty = ({ username, email, password, passwordConfirmation }) => {
    return (
      !username.length ||
      !email.length ||
      !password.length ||
      !passwordConfirmation.length
    );
  };

  isPasswordValid = ({ password, passwordConfirmation }) => {
    if (password.length < 6 || passwordConfirmation.length < 6) {
      return false;
    } else if (password !== passwordConfirmation) {
      return false;
    } else {
      return true;
    }
  };

  displayErrors = (errors) =>
    errors.map((err, index) => {
      return <p key={index}>{err.message}</p>;
    });

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handSubmit = async (event) => {
    event.preventDefault();
    const { username, email, password, errors } = this.state;

    try {
      if (this.isFormValid()) {
        this.setState({ errors: [], loading: true });
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password
        );
        console.log("new user is ", user);
        await user.updateProfile({
          displayName: username,
          photoURL: `http://gravatar.com/avatar/${md5(user.email)}?d=identicon`,
        });
        await this.saveUser(user);
      }
    } catch (error) {
      console.log(error);
      this.setState({ errors: errors.concat(error), loading: false });
    }
  };
  saveUser = (user) => {
    console.log("user saved");
    return this.state.usersRef.child(user.uid).set({
      name: user.displayName,
      email: user.email,
      avatar: user.photoURL,
    });
  };

  handleError = (errors, inputName) => {
    console.log('er',errors);
    return errors.some((error) =>
      error.message.toLowerCase().includes(inputName)
    )
      ? "error"
      : "";
  };

  render() {
    const {
      username,
      email,
      password,
      passwordConfirmation,
      errors,
      loading,
    } = this.state;
    return (
      <Grid textAlign="center" verticalAlign="middle" className="app">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h1" icon color="orange" textAlign="center">
            <Icon name="puzzle piece" color="orange" />
            Register for chat
          </Header>
          <Form onSubmit={this.handSubmit} size="large">
            <Segment stacked>
              <Form.Input
                fluid
                name="username"
                icon="user"
                iconPosition="left"
                placeholder="username"
                onChange={this.handleChange}
                type="text"
                value={username}
              />
              <Form.Input
                fluid
                name="email"
                icon="mail"
                iconPosition="left"
                placeholder="Email Address"
                onChange={this.handleChange}
                type="email"
                value={email}
                className={this.handleError(errors, "email")}
              />
              <Form.Input
                fluid
                name="password"
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                onChange={this.handleChange}
                type="password"
                value={password}
                className={this.handleError(errors, "password")}
              />
              <Form.Input
                fluid
                name="passwordConfirmation"
                icon="repeat"
                iconPosition="left"
                placeholder="Confirm Password"
                onChange={this.handleChange}
                type="password"
                value={passwordConfirmation}
                className={this.handleError(errors, "password")}
              />
              <Button
                disabled={loading}
                className={loading ? "loading" : ""}
                color="orange"
                fluid
                size="large"
              >
                Submit
              </Button>
            </Segment>
          </Form>
          {this.state.errors.length > 0 && (
            <Message error>
              <h3>Error</h3>
              {this.displayErrors(errors)}
            </Message>
          )}
          <Message>
            Already a user?<Link to="/signin"> Sign In </Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default SignUp;
