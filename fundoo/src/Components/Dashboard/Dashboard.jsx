import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { TextField } from "@material-ui/core";
// import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
// import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import { Tooltip } from "@material-ui/core";
import "./Dashboard.css";
import Logo from "../../Asset/keep_logo.png";
import Archive from "../../Asset/archive.svg";
import Reminder from "../../Asset/reminder.svg";
import Edit from "../../Asset/edit.svg";
import Trash from "../../Asset/menuTrash.svg";
import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined";
import styled from "styled-components";
import MainContent from "../../Components/MainContent/MainContent";
import ArchiveNotes from "../../Components/ArchiveNotes/ArchiveNotes";
import TrashNotes from "../../Components/TrashNotes/TrashNotes"
import Profile from "../../Components/UserProfile/UserProfile";
// import { useHistory } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import { Route,Switch,Link } from "react-router-dom";
// import Icon from '@material-ui/core/Icon';
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
const drawerWidth = 284;
const name=localStorage.getItem("fname")
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  profileIcon: {
    width: "unset",
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    borderRight: "0",
  },
  drawerOpen: {
    width: drawerWidth,
    marginTop: 64,
    borderRight: "0",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    borderRight: "0",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    marginTop: 64,
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    backgroundColor: "white",

    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  PrivateNotchedOutline: {
    root: {
      borderWidth: "0",
    },
  },
  MuiDrawer: {
    paperAnchorLeft: {
      borderRight: "0",
    },
  },
}));
const StyledTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    fieldset {
      border: 0;
      color: black;
    }
    &:hover fieldset {
      border-color: white;
    }
    &.Mui-focused fieldset {
      border-color: white;
    }
  }
`;

export default function Dashboard() {
  const classes = useStyles();
  // const history = useHistory();

  const [open, setOpen] = useState(true);
  const [show, setShow] = useState(false);
  const [menuTitle, setMenuTitle] = useState("FundooNotes");
  const [openProfile, setProfile] = useState("");
  const handleDrawerOpen = () => {
    setOpen(!open);
  };
  const toggle = (e) => {
    setShow(true);
    e.style.display = show ? "block" : "none";
  };
  const handleClickNotes = (titleInfo) => {
    setMenuTitle(titleInfo);
    console.log("title", titleInfo);
  };
  const userProfile = () => {
    setProfile("Profile");
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar className="toolbar-content">
        <Toolbar disableGutters={true}>
          <Tooltip title="Main menu">
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
            >
              <MenuIcon id="menu" />
            </IconButton>
          </Tooltip>
          <img
            src={Logo}
            alt="FundooImg"
            style={{ width: "38px" }}
            onClick={toggle}
          />
          <div className="menuBar">
            <div className="titleMenu">{menuTitle}</div>
            <div className="searchSection">
              <SearchSharpIcon />
              <StyledTextField
                placeholder="Search"
                variant="outlined"
                className="searchField"
                fullWidth={true}
              />
            </div>
            <div onClick={userProfile}>
              <Avatar>{name}</Avatar>
              {openProfile === "Profile" ? <Profile /> : null}
            </div>
          </div>
        </Toolbar>
        <Divider />
      </AppBar>

      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <Divider />
        <div className="mainDrawer">
          <div onClick={() => handleClickNotes("FundooNotes")}>
          <Link to="/dashboard" className="linkText">
            <List className={menuTitle === "FundooNotes" ? "backColor" : ""}>
              <ListItem button>
                <ListItemIcon>
                  <EmojiObjectsOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Notes" />
              </ListItem>
            </List>
            </Link>
          </div>
          <div onClick={() => handleClickNotes("Reminder")}>
            <List className={menuTitle === "Reminder" ? "backColor" : null}>
              <ListItem button>
                <ListItemIcon>
                  <img src={Reminder} alt="FundooImg" />
                </ListItemIcon>
                <ListItemText primary="Reminder" />
              </ListItem>
            </List>
          </div>
          <div onClick={() => handleClickNotes("Edit")}>
            <List className={menuTitle === "Edit" ? "backColor" : null}>
              <ListItem button>
                <ListItemIcon>
                  <img src={Edit} alt="FundooImg" />
                </ListItemIcon>
                <ListItemText primary="Edit" />
              </ListItem>
            </List>
          </div>
          <div onClick={() => handleClickNotes("Archive")}>
          
          <Link to="/dashboard/archive" className="linkText" >
                 
              
            <List className={menuTitle === "Archive" ? "backColor" : null}>
              <ListItem button>
                <ListItemIcon>
                  <img src={Archive} alt="FundooImg" />
                </ListItemIcon>
                <ListItemText primary="Archive" />
              </ListItem>
            </List>
            </Link>
          
          </div>
          <div onClick={() => handleClickNotes("Trash")}>
          <Link to="/dashboard/trash"  className="linkText">
            <List className={menuTitle === "Trash" ? "backColor" : null}>
              <ListItem button>
                <ListItemIcon>
                  <img src={Trash} alt="FundooImg" />
                </ListItemIcon>
                <ListItemText primary="Trash" />
              </ListItem>
            </List>
            </Link>
          </div>
        </div>
      </Drawer>
      <main className={classes.content}>
        <div>
          {/* {menuTitle === "FundooNotes" ? <MainContent /> : ""}
          {menuTitle === "Archive" ? <ArchiveNotes /> : ""} */}
          <Switch>
          <Route path="/dashboard/archive" component={ArchiveNotes} />
          <Route path="/dashboard/trash" component={TrashNotes} />
          <Route path="/dashboard" component={MainContent} />
          </Switch>
          {/* {menuTitle === "Trash" ? <TrashNotes /> : ""} */}
        </div>
      </main>
    </div>
  );
}
