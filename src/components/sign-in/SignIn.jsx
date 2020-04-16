import React, { Component } from "react";
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

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: [],
      loading: false,
    };
  }

  displayErrors = (errors) =>
    errors.map((err, index) => {
      return <p key={index}>{err.message}</p>;
    });

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handSubmit = async (event) => {
    event.preventDefault();
    const { email, password, errors } = this.state;

    try {
      if (this.isFormValid()) {
        this.setState({ errors: [], loading: true });
        const { user } = await auth.signInWithEmailAndPassword(email, password);
        console.log("user is ", user);
        console.log('fafafafa')
        this.setState({
          email: "",
          password: "",
          errors: [],
          loading: false,
        });
      }
    } catch (error) {
      console.log('ererere',error)
      this.setState({ errors: errors.concat(error), loading: false });
    }
  };

  isFormValid = () => {
    let errors = [];
    let error;
    if (this.isFormEmpty(this.state)) {
      error = { message: "Fill in all fields!" };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else {
      return true;
    }
  };

  isFormEmpty = ({ email, password }) => {
    return !email.length || !password.length;
  };

  handleError = (errors, inputName) => {
    return errors.some((error) =>
      error.message.toLowerCase().includes(inputName)
    )
      ? "error"
      : "";
  };

  render() {
    const { email, password, errors, loading } = this.state;
    return (
      <Grid textAlign="center" verticalAlign="middle" className="app">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h1" icon color="violet" textAlign="center">
            <Icon name="code branch" color="violet" />
            Login for chat
          </Header>
          <Form onSubmit={this.handSubmit} size="large">
            <Segment stacked>
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
              <Button
                disabled={loading}
                className={loading ? "loading" : ""}
                color="violet"
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
            Don't have an account?<Link to="/signup"> Sign Up </Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default SignIn;
