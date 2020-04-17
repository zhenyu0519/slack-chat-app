import React, { Component } from "react";
//  components
import MessagesHeader from "../messages-header/MessagesHeader";
import MessagesForm from "../messages-form/MessagesForm";
// style
import { Segment, Comment } from "semantic-ui-react";

export default class Messages extends Component {
  render() {
    return (
      <React.Fragment>
        <MessagesHeader />
        <Segment>
          <Comment.Group className="messages"></Comment.Group>
        </Segment>
        <MessagesForm />
      </React.Fragment>
    );
  }
}
