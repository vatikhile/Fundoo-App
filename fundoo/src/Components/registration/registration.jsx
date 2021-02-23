import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { TextField, Container } from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import Account from "../../Asset/account.svg";
import Checkbox from '@material-ui/core/Checkbox';
import "./registration.css";
const thm = createMuiTheme({
  overrides: {
    MuiContainer:{
      root :{
        height:"100%"
      }
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
// var myBoolean = false;
// var error;
export default class registration extends Component {
  // var error:false;
  constructor() {
    super();
    this.state = {
      firstValue: "",
      isfirstNameError: false,
    };
  }

  handleClick = () => {
    console.log("clcik", this.state.firstValue);
    // if(this.state.firstValue==''){
    //  isfirstNameError= true,
    // }
    // else{
    //   isfirstNameError=false,
    // }
  };
  handleChanges=(e) => {
    console.log("event",e);
    // const { value } = et.target;
    this.setState({ firstValue: e.target.value});
  }

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
                    label="Last name"
                    placeholder="Last Name"
                    name="lastName"
                    margin="normal"
                    variant="outlined"
                    className="lastNameInput"
                  />
                  <div>
                    <TextField
                      label="Email"
                      placeholder="User name"
                      name="email"
                      margin="normal"
                      variant="outlined"
                      className="new-register-email"
                      type="email"
                    />
                    <div class="fieldHint">You can use letters, number</div>
                  </div>
                  <div className="password-field">
                    <TextField
                      label="Password"
                      placeholder="Password"
                      name="password"
                      margin="normal"
                      variant="outlined"
                      type="password"
                      className="passwordField"
                    />
                    <TextField
                      label="Confirm Password"
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      margin="normal"
                      variant="outlined"
                      type="password"
                      className="confirmField"
                    />
                  </div>
                  <div className="fieldHint">Use 8 or more character with mix of letters, number, symbols</div>
                  <div className="checkbox-field">

                  <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                  <div>Show password </div>
        
                  </div>
                  <div className="new-register-bottom">
                    <Button color="primary">Sign in instead</Button>

                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleClick}
                    >
                      Next
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
        </div>
      </Container>
    );
  }
}
