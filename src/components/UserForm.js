import React, { Component } from "react";

import { AppBar, Toolbar, Typography } from "@material-ui/core";

import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: ""
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };
    return (
      <React.Fragment>
        <AppBar color="primary" position="static">
          <Toolbar>
            <Typography style={styles.grow} variant="h6" color="inherit">
              {(() => {
                switch (step) {
                  case 1:
                    return "Enter User Details";
                  case 2:
                    return "Enter Personal Details";
                  case 3:
                    return "Confirm User Data";
                  case 4:
                    return "Success";
                  default:
                    return null;
                }
              })()}
            </Typography>
          </Toolbar>
        </AppBar>
        {(() => {
          switch (step) {
            case 1:
              return (
                <FormUserDetails
                  nextStep={this.nextStep}
                  handleChange={this.handleChange}
                  values={values}
                />
              );
            case 2:
              return (
                <FormPersonalDetails
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange={this.handleChange}
                  values={values}
                />
              );
            case 3:
              return (
                <Confirm
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  values={values}
                />
              );
            case 4:
              return <Success />;
            default:
              return null;
          }
        })()}
      </React.Fragment>
    );
  }
}

const styles = {
  grow: {
    flexGrow: 1
  }
};

export default UserForm;
