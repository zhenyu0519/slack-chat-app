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

export default class extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handSubmit = async (event) => {
    event.preventDefault();
    const { email, password, passwordConfirmation } = this.state;
    if (password !== passwordConfirmation) {
      alert("passwords does not match!");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log("new user is ", user);
      this.setState({
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const { username, email, password, passwordConfirmation } = this.state;
    return (
      <Grid textAlign="center" verticalAlign="middle" className="app">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" icon color="orange" textAlign="center">
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
              />
              <Button color="orange" fluid size="large">
                Submit
              </Button>
            </Segment>
          </Form>
          <Message>
            Already a user?<Link to="/signin"> Sign In </Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}
