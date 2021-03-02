import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { TextField, Container } from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import Account from "../../Asset/account.svg";
import Checkbox from "@material-ui/core/Checkbox";
import Snackbar from "@material-ui/core/Snackbar";

import UserService from "../../Service/userService/userService";
import { Link } from "react-router-dom";
import "./registration.css";
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
    MuiFormControl: {
      marginNormal: {
        marginLeft: "10px",
      },
    },
  },
});
const service = new UserService();
// let history = useHistory();
export default class registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      isfirstNameError: false,
      firstNameMsg: "",
      lastName: "",
      islastNameError: false,
      lastNameMsg: "",
      emailID: "",
      isEmailError: false,
      emailMsg: "",
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
    };
  }

  validate = () => {
    this.isValid = false;
    this.setState({ isfirstNameError: false });
    this.setState({ firstNameMsg: "" });
    this.setState({ islastNameError: false });
    this.setState({ lastNameMsg: "" });
    this.setState({ isEmailError: false });
    this.setState({ emailMsg: "" });
    this.setState({ isPasswordError: false });
    this.setState({ passwordMsg: "" });
    this.setState({ isConfirmPasswordError: false });

    let regName = /^[A-Z]{1}[a-z]{2,}$/;
    var regEmail = /^[A-Za-z0-9]+([._+-][0-9a-zA-Z]+)?@[a-zA-Z0-9]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2})?/;
    let regPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    console.log("clcik", this.state.lastName);
    if (!regName.test(this.state.firstName)) {
      this.setState({ isfirstNameError: true });
      this.setState({ firstNameMsg: "Invalid First Name" });
      this.isValid = true;
    }
    if (!regName.test(this.state.lastName)) {
      this.setState({ islastNameError: true });
      this.setState({ lastNameMsg: "Invalid Last Name" });
      this.isValid = true;
    }
    if (!regEmail.test(this.state.emailID)) {
      this.setState({ isEmailError: true });

      this.setState({ emailMsg: "Invalid Email" });
      this.isValid = true;
    }
    if (!regPassword.test(this.state.password)) {
      this.setState({ isPasswordError: true });

      this.setState({ passwordMsg: "Invalid password" });
      this.isValid = true;
    }
    if (
      !regPassword.test(this.state.confirmPassword) ||
      this.state.password !== this.state.confirmPassword
    ) {
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
      var data = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        service: "advance",
        email: this.state.emailID,
        password: this.state.password,
      };
      service
        .userRegister(data)
        .then((data) => {
          this.setState({ open: true });
          this.props.history.push("/login");
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  };
  toggleSwitch = () => {
    let toggle = !this.state.passwordShown;
    this.setState({ passwordShown: toggle });
  };

  handleChanges = (e) => {
    console.log("event", e.target.value);

    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Container>
        <div className="mainContent">
          <div className="new-register">
            <div>
              <div className="header">
                <span>Fundoo</span>
              </div>
              <h2>Create your Fundoo Account</h2>
              <MuiThemeProvider theme={thm}>
                <div className="fieldContent">
                  <TextField
                    error={this.state.isfirstNameError}
                    helperText={this.state.firstNameMsg}
                    label="First name"
                    placeholder="First name"
                    name="firstName"
                    margin="normal"
                    variant="outlined"
                    autoFocus
                    className="firstInput"
                    onChange={this.handleChanges}
                  />
                  <TextField
                    error={this.state.islastNameError}
                    helperText={this.state.lastNameMsg}
                    label="Last name"
                    placeholder="Last Name"
                    name="lastName"
                    margin="normal"
                    variant="outlined"
                    className="lastNameInput"
                    onChange={this.handleChanges}
                  />
                  <div>
                    <TextField
                      error={this.state.isEmailError}
                      helperText={this.state.emailMsg}
                      label="Email"
                      placeholder="User name"
                      name="emailID"
                      margin="normal"
                      variant="outlined"
                      className="new-register-email"
                      type="email"
                      onChange={this.handleChanges}
                    />
                    <div class="fieldHint">You can use letters, number</div>
                  </div>
                  <div className="password-field">
                    <TextField
                      error={this.state.isPasswordError}
                      helperText={this.state.passwordMsg}
                      label="Password"
                      placeholder="Password"
                      name="password"
                      margin="normal"
                      variant="outlined"
                      type={this.state.passwordShown ? "text" : "password"}
                      className="passwordField"
                      onChange={this.handleChanges}
                    />
                    <TextField
                      error={this.state.isConfirmPasswordError}
                      label="Confirm Password"
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      margin="normal"
                      variant="outlined"
                      type={this.state.passwordShown ? "text" : "password"}
                      className="confirmField"
                      onChange={this.handleChanges}
                    />
                  </div>
                  <div className="fieldHint">
                    Use 6 or more character with mix of letters, number, symbols
                  </div>
                  <div className="checkbox-field">
                    <Checkbox
                      inputProps={{ "aria-label": "uncontrolled-checkbox" }}
                      color="primary"
                      onClick={this.toggleSwitch}
                    />
                    <div>Show password </div>
                  </div>
                  <div className="new-register-bottom">
                    <Button color="primary">
                      <Link to="/login" className="linkButton">
                        Sign in instead
                      </Link>
                    </Button>

                    <Button variant="contained" onClick={this.handleClick}>
                      Submit
                    </Button>
                  </div>
                </div>
              </MuiThemeProvider>
            </div>
            <div className="accountImage">
              <img src={Account} alt="" />
              <div>One account. All of Fundoo </div>
              <div>working for you</div>
            </div>
          </div>
          <Snackbar
            open={this.state.open}
            autoHideDuration={3000}
            message="User registered sucessfully"
            severity="success"
            onClose={() => this.setState({ open: false })}
          />
        </div>
      </Container>
    );
  }
}
