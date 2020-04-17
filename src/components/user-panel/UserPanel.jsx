import React from "react";
// style
import { Grid, Header, Icon, Dropdown, Image } from "semantic-ui-react";
// firebase
import { auth } from "../../firebase/firebase";
// redux
import { connect } from "react-redux";

const UserPanel = ({ currentUser }) => {
  const handleSignout = () => {
    auth.signOut().then(() => console.log("signed out"));
  };
  const dropdownOptions = [
    {
      key: "user",
      text: (
        <span>
          signed in as <strong>{currentUser.displayName}</strong>
        </span>
      ),
      disabled: true,
    },
    {
      key: "avatar",
      text: (
        <span>
          Change Avatar <strong>User</strong>
        </span>
      ),
    },
    {
      key: "signout",
      text: (
        <span onClick={handleSignout}>
          Sign Out <strong>User</strong>
        </span>
      ),
    },
  ];

  return (
    <Grid style={{ background: "#4c3c4c" }}>
      <Grid.Column>
        <Grid.Row style={{ padding: "1.2em", margin: 0 }}>
          <Header>
            <Icon name="code" />
            <Header.Content>DevChat</Header.Content>
          </Header>
        </Grid.Row>
        <Header style={{ padding: "0.25em" }} as="h4" inverted>
          <Dropdown
            trigger={
              <span>
                <Image src={currentUser.photoURL} spaced="right" avatar />
                {currentUser.displayName}
              </span>
            }
            options={dropdownOptions}
          ></Dropdown>
        </Header>
      </Grid.Column>
    </Grid>
  );
};

const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser,
});

export default connect(mapStateToProps)(UserPanel);
