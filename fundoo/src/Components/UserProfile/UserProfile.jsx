import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./UserProfile.css";
import Avatar from '@material-ui/core/Avatar';
const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  root: {
    top: "56px",
  },
}));
const email=localStorage.getItem("email")
const name=localStorage.getItem("fname")
const lName=localStorage.getItem("lname")
export default function UserProfile() {
  const classes = useStyles();
  const [open, setOpenPop] = useState(true);

  const handleClose = () => {
    setOpenPop(false);
  };
  const handleOut = () => {
    localStorage.clear();
  };

  //   const id =  'simple-popover'
  return (
    <div className="mainPop">
      {/* <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
        Open Popover
      </Button> */}
      <Popover
        // id={id}
        open={open}
        //  onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        className={classes.root}
        // transformOrigin={{
        //   vertical: 'top',
        //   horizontal: 'end',
        // }}
      >
          <div className="profilrContent">
        <Avatar>{name}</Avatar>
        <div className="userInfo">
          <div className="profileName">
        <Typography cvariant="subtitle1">{name}</Typography>
        <Typography variant="subtitle1">{lName}</Typography>
        </div>
        <Typography variant="subtitle1">{email}</Typography>
       
        </div>

        <div className="profileButton">
          <Button variant="contained" color="primary" onClick={handleClose}>
            cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleOut}>
            <Link to="/login" className="link">
              Logout
            </Link>
          </Button>
        </div>
        </div>
      </Popover>
    </div>
  );
}
