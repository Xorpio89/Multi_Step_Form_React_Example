import React, { Component } from "react";
import "./App.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import UserForm from "./components/UserForm";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#80DEEA",
      main: "#0097A7",
      dark: "#00838F",
      contrastText: "#fff"
    }
  },
  typography: {
    useNextVariants: true
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <UserForm />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
