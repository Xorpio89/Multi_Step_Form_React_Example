import React, { Component } from "react";

import { TextField, Button } from "@material-ui/core";

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <React.Fragment>
        <br />
        <TextField
          placeholder="Enter your first name"
          label="First Name"
          onChange={handleChange("firstName")}
          defaultValue={values.firstName}
        />
        <br />
        <br />
        <TextField
          placeholder="Enter your Last Name"
          label="Last Name"
          onChange={handleChange("lastName")}
          defaultValue={values.lastName}
        />
        <br />
        <br />
        <TextField
          placeholder="Enter your Email"
          label="Email"
          onChange={handleChange("email")}
          defaultValue={values.email}
        />
        <br />
        <br />
        <Button
          variant="contained"
          color="primary"
          style={styles.button}
          onClick={this.continue}
        >
          Continue
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

export default FormUserDetails;
