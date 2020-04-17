import React, { Component } from "react";
// style
import { Menu } from "semantic-ui-react";
// components
import UserPanel from "../user-panel/UserPanel";
import Channels from "../channels/Channels";

export default class SidePanel extends Component {
  render() {
    return (
      <Menu
        size="large"
        inverted
        fixed="left"
        vertical
        style={{ background: "#4c3c4c", fontSize: "1.2rem" }}
      >
        <UserPanel />
        <Channels />
      </Menu>
    );
  }
}
