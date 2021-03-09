import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import UserService from "../../Service/userService/userService";
import Snackbar from "@material-ui/core/Snackbar";
import { Link } from "react-router-dom";
import "./login.css";
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
export default class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailID: "",
      isEmailError: false,
      emailMsg: "",
      password: "",
      isPasswordError: false,
      passwordMsg: "",
      open: false,
      isPasswordCheck: false,
      isValid: false,
    };
  }
  validate = () => {
    this.isValid = false;
    this.setState({ isEmailError: false });
    this.setState({ emailMsg: "" });
    this.setState({ isPasswordError: false });
    this.setState({ passwordMsg: "" });
    var regEmail = /^[A-Za-z0-9]+([._+-][0-9a-zA-Z]+)?@[a-zA-Z0-9]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2})?/;
    let regPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
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
    return this.isValid;
  };
  handleClick = (e) => {
    e.preventDefault();
    if (!this.validate()) {
      console.log("API call");
      let userData = {
        email: this.state.emailID,
        password: this.state.password,
      };

      service
        .login(userData)
        .then((data) => {
          console.log("SUCESS", data);
          localStorage.setItem("userToken", data.data.id);
          localStorage.setItem("email", data.data.email);
          localStorage.setItem("fname", data.data.firstName);
          localStorage.setItem("lname", data.data.lastName);
          this.setState({ open: true });
          this.props.history.push("/dashboard");
        })
        .catch((error) => {
          console.log("ERROR", error);
        });
    }
  };
  handleChanges = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  toggleSwitch = () => {
    let toggle = !this.state.isPasswordCheck;
    this.setState({ isPasswordCheck: toggle });
  };
  render() {
    return (
      <div className="mainContent">
        <div className="contentBox">
          <div className="content">
            <div className="headerLogin">
              <span>Fundoo</span>
            </div>
            <h2>Sign in</h2>
            <h4>Continue to Fundoo</h4>
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
                <TextField
                  error={this.state.isPasswordError}
                  helperText={this.state.passwordMsg}
                  label="Password"
                  placeholder="Password"
                  name="password"
                  variant="outlined"
                  type={this.state.isPasswordCheck ? "text" : "password"}
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
            <div className="login-button">
              <Button color="primary">
                <Link to="/forget" className="linkButton">
                  Forgot password?
                </Link>
              </Button>

              <Button variant="contained" onClick={this.handleClick}>
                Login
              </Button>
            </div>
            <div className="create-button"> <Button color="primary">
                <Link to="/" className="linkButton">
                  Create Account
                </Link>
              </Button></div>
          </div>
          <Snackbar
            open={this.state.open}
            autoHideDuration={3000}
            message="User Login sucessfully"
            severity="success"
            onClose={() => this.setState({ open: false })}
          />
        </div>
      </div>
    );
  }
}
