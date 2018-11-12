import React, { Component } from "react";
// import { List, ListItem } from "material-ui/List";
import { Button, List, ListItem, ListItemText } from "@material-ui/core";

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio }
    } = this.props;
    return (
      <React.Fragment>
        <List>
          <ListItem button>
            <ListItemText
              align="center"
              primary="First Name"
              secondary={firstName}
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              align="center"
              primary="Last Name"
              secondary={lastName}
            />
          </ListItem>
          <ListItem button>
            <ListItemText align="center" primary="Email" secondary={email} />
          </ListItem>
          <ListItem button>
            <ListItemText
              align="center"
              primary="Occupation"
              secondary={occupation}
            />
          </ListItem>
          <ListItem button>
            <ListItemText align="center" primary="City" secondary={city} />
          </ListItem>
          <ListItem button>
            <ListItemText align="center" primary="Bio" secondary={bio} />
          </ListItem>
        </List>

        <br />
        <Button style={styles.button} variant="contained" onClick={this.back}>
          Back
        </Button>
        <Button
          color="primary"
          variant="contained"
          style={styles.button}
          onClick={this.continue}
        >
          Confirm & Continue
        </Button>
      </React.Fragment>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default Confirm;
