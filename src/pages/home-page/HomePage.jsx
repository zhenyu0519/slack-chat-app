import React from "react";
// style
import { Grid } from "semantic-ui-react";
// components
import ColorPanel from "../../components/color-panel/ColorPanel";
import SidePanel from "../../components/side-panel/SidePanel";
import Messages from "../../components/messages/Messages";
import MetaPanel from "../../components/meta-panel/MetaPanel";

const HomePage = () => (
  <Grid columns="equal" className="app" style={{ background: "#eee" }}>
    <ColorPanel />
    <SidePanel />
    <Grid.Column style={{ marginLeft: 320 }}>
      <Messages />
    </Grid.Column>
    <Grid.Column width={4}>
      <MetaPanel />
    </Grid.Column>
  </Grid>
);

export default HomePage;
