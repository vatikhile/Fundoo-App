import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import UserService from "../../Service/userService/userService";
// import {useParams} from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import "./resetPassword.css";
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

export default class resetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      isPasswordError: false,
      passwordMsg: "",
      confirmPassword: "",
      isConfirmPasswordError: false,
      passwordShown: false,
      open: false,
      vertical: "top",
      horizontal: "center",
      isValid: false,
      passwordShow: false,
      snackMsgs: "",
    };
  }
  validate = () => {
    this.isValid = false;

    this.setState({ isPasswordError: false });
    this.setState({ passwordMsg: "" });
    this.setState({ isConfirmPasswordError: false });
    let regPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    console.log("clcik", this.state.lastName);

    if (
      !regPassword.test(this.state.password) &&
      !regPassword.test(this.state.confirmPassword)
    ) {
      this.setState({ isPasswordError: true });
      this.setState({ isConfirmPasswordError: true });

      this.setState({ passwordMsg: "Invalid password" });
      this.isValid = true;
    }
    if (this.state.password !== this.state.confirmPassword) {
      this.setState({ isPasswordError: true });
      this.setState({ isConfirmPasswordError: true });
      console.log("conform", this.state.isConfirmPasswordError);
      if (this.state.password) {
        this.setState({ passwordMsg: "Not Match Passwords" });
      }
      this.isValid = true;
    }

    return this.isValid;
  };

  handleClick = (e) => {
    e.preventDefault();
    if (!this.validate()) {
      console.log("APItrue");
      let userData = {
        newPassword: this.state.password,
      };
      var token = this.props.match.params.token;
      console.log("token", token);
      service
        .resetpassword(userData, token)
        .then((data) => {
          // this.props.history.push("login")
          console.log("Suucssss", data);
          this.setState({ snackMsgs: "Password change sucessfully" });
          this.setState({ open: true });
          this.setState({ password: "" });
          this.props.history.push("/login");
        })
        .catch((error) => {
          console.log("errorrr", error);
          this.setState({ open: true });
          this.setState({ snackMsgs: "Authorization Required" });
        });
    }
  };

  handleChanges = (e) => {
    // console.log("event", e.target.value);

    this.setState({ [e.target.name]: e.target.value });
  };
  toggleSwitch = () => {
    let toggle = !this.state.passwordShow;
    this.setState({ passwordShow: toggle });
  };
  render() {
    return (
      <div className="mainContent">
        <div className="contentBox">
          <div className="content">
            <div className="headerLogin">
              <span>Fundoo</span>
            </div>
            <h2>Change the Password</h2>
            <h4>Enter the new Password</h4>
            <MuiThemeProvider theme={thm}>
              <div className="text-container">
                <TextField
                  error={this.state.isPasswordError}
                  helperText={this.state.passwordMsg}
                  label="password"
                  placeholder="password"
                  name="password"
                  type={this.state.passwordShow ? "text" : "password"}
                  variant="outlined"
                  className="passwordFieldlogin"
                  margin="normal"
                  onChange={this.handleChanges}
                />
                <TextField
                  error={this.state.isConfirmPasswordError}
                  helperText={this.state.passwordMsg}
                  label="confirm Password"
                  placeholder="confirmPassword"
                  name="confirmPassword"
                  variant="outlined"
                  type={this.state.passwordShow ? "text" : "password"}
                  className="passwordFieldlogin"
                  margin="normal"
                  onChange={this.handleChanges}
                />
              </div>
              <div className="checkbox-field">
                <Checkbox
                  inputProps={{ "aria-label": "uncontrolled-checkbox" }}
                  color="primary"
                  onClick={this.toggleSwitch}
                />
                <div>Show password </div>
              </div>
            </MuiThemeProvider>
            <div className="confirm-button">
              <Button variant="contained" onClick={this.handleClick}>
                confirm
              </Button>
            </div>
          </div>
          <Snackbar
            open={this.state.open}
            autoHideDuration={3000}
            message={this.state.snackMsgs}
            severity="success"
            onClose={() => this.setState({ open: false })}
          />
        </div>
      </div>
    );
  }
}
