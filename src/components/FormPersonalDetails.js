import React, { Component } from "react";

import { TextField, Button } from "@material-ui/core";

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <React.Fragment>
        <br />
        <TextField
          placeholder="Enter your Occupation"
          label="Occupation"
          onChange={handleChange("occupation")}
          defaultValue={values.occupation}
        />
        <br />
        <br />
        <TextField
          placeholder="Enter your City"
          label="City"
          onChange={handleChange("city")}
          defaultValue={values.city}
        />
        <br />
        <br />
        <TextField
          placeholder="Enter your Biography"
          label="Biography"
          onChange={handleChange("bio")}
          defaultValue={values.bio}
        />
        <br />
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

export default FormPersonalDetails;
