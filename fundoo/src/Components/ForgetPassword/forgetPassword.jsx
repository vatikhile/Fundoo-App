import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import UserService from "../../Service/userService/userService";
import { Link } from "react-router-dom";
const thm = createMuiTheme({
  overrides: {
    MuiContainer: {
      root: {
        height: "100%",
      },
    },
    MuiInputLabel: {
      formControl: {
        top: "-9px",
      },
    },
    MuiInputBase: {
      root: {
        height: "35px",
      },
    },
  },
});
const service = new UserService();
export default class forgetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailID: "",
      isEmailError: false,
      emailMsg: "",
      isValid: false,
      open: false,
      snackMsg: "",
    };
  }

  validate = () => {
    this.isValid = false;
    this.setState({ isEmailError: false });
    this.setState({ emailMsg: "" });
    var regEmail = /^[A-Za-z0-9]+([._+-][0-9a-zA-Z]+)?@[a-zA-Z0-9]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2})?/;
    if (!regEmail.test(this.state.emailID)) {
      this.setState({ isEmailError: true });

      this.setState({ emailMsg: "Invalid Email" });
      this.isValid = true;
    }
    return this.isValid;
  };
  handleChanges = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleClick = (e) => {
    e.preventDefault();
    this.setState({ snackMsg: "" });
    if (!this.validate()) {
      console.log("API true");
      let userData = {
        email: this.state.emailID,
      };
      service
        .resetPass(userData)
        .then((data) => {
          this.setState({ open: true });
          this.setState({ snackMsg: data.data.message });
          this.setState({ emailID: "" });
          this.props.history.push("/login");
        })
        .catch((error) => {
          this.setState({ open: true });
          this.setState({ snackMsg: error.message });
        });
    }
  };
  render() {
    return (
      <div className="mainContent">
        <div className="contentBox">
          <div className="content">
            <div className="headerLogin">
              <span>Fundoo</span>
            </div>
            <h2>Find your email</h2>
            <h4>Enter your recovery email</h4>
            <MuiThemeProvider theme={thm}>
              <div className="text-container">
                <TextField
                  error={this.state.isEmailError}
                  helperText={this.state.emailMsg}
                  label="Email"
                  placeholder="Email"
                  name="emailID"
                  variant="outlined"
                  className="emailFieldlogin"
                  margin="normal"
                  onChange={this.handleChanges}
                />
              </div>
            </MuiThemeProvider>
            <div className="login-button">
              <Button color="primary">
                <Link to="/login" className="linkButton">
                  Login
                </Link>
              </Button>

              <Button variant="contained" onClick={this.handleClick}>
                Next
              </Button>
            </div>
          </div>
          <Snackbar
            open={this.state.open}
            autoHideDuration={3000}
            message={this.state.snackMsg}
            severity="success"
            onClose={() => this.setState({ open: false })}
          />
        </div>
      </div>
    );
  }
}
