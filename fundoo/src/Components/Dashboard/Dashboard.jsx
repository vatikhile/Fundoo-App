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
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import MailIcon from "@material-ui/icons/Mail";
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
import AddNewCard from "../../Components/Add_NewCards/AddNewCards";
// import Icon from '@material-ui/core/Icon';
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
const drawerWidth = 284;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
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
    borderRight:"0",
  },
  drawerOpen: {
    width: drawerWidth,
    marginTop: 64,
    borderRight:"0",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    borderRight:"0",
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
  MuiDrawer:{
  paperAnchorLeft:{
    borderRight:"0"
  }
}
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
  // const mainClasses=useStyles2()
  // const theme = useTheme();
  // const [age, setAge] = useState(42)
  // }
  // const [fruit, setFruit] = useState('banana');
  // const [todos, setTodos] = useState('[{ text: Learn Hooks }]');

  const [open, setOpen] = useState(true);
  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar className="toolbar-content" position="fixed">
        <Toolbar>
          <Tooltip title="Main menu">
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
            >
              <MenuIcon id="menu" />
            </IconButton>
          </Tooltip>
          <img src={Logo} alt="FundooImg" style={{ width: "38px" }} />
          <div className="menuBar">
            <div>FundooNotes</div>
            <div className="searchSection">
              <SearchSharpIcon />
              <StyledTextField
                placeholder="Search"
                variant="outlined"
                className="searchField"
                margin="normal"
              />
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
          <div>
            <List>
              <ListItem button>
                <ListItemIcon>
                  <EmojiObjectsOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Notes" />
              </ListItem>
            </List>
          </div>
          <div>
            <List>
              <ListItem button>
                <ListItemIcon>
                  <img src={Reminder} alt="FundooImg" />
                </ListItemIcon>
                <ListItemText primary="Reminder" />
              </ListItem>
            </List>
          </div>
          <div>
            <List>
              <ListItem button>
                <ListItemIcon>
                  <img src={Edit} alt="FundooImg" />
                </ListItemIcon>
                <ListItemText primary="Edit" />
              </ListItem>
            </List>
          </div>
          <div>
            <List>
              <ListItem button>
                <ListItemIcon>
                  <img src={Archive} alt="FundooImg" />
                </ListItemIcon>
                <ListItemText primary="Archive" />
              </ListItem>
            </List>
          </div>
          <div>
            <List>
              <ListItem button>
                <ListItemIcon>
                  <img src={Trash} alt="FundooImg" />
                </ListItemIcon>
                <ListItemText primary="Trash" />
              </ListItem>
            </List>
          </div>
        </div>
        {/* <div >
          <div>
          <SearchSharpIcon />
          <Button>Notes</Button>
          </div>
          <Button>Reminder</Button>
          <Button>Edit Label</Button>
          <Button>Archive</Button>
          <Button>Trash</Button>
        </div> */}
      </Drawer>
      <main className={classes.content}>
        <AddNewCard />
        {/* <div className={classes.toolbar} />
        <div className="main" onClick={handleAddCard}>
          Take a note
        </div>
        <WarningBanner warn={openCard} /> */}
      </main>
    </div>
  );
}

// <div>
//   <MuiThemeProvider theme={thm}>
//     <AppBar position="fixed">
//       <Toolbar className="toolBar">
//         <Tooltip title="Main menu">
//           <IconButton
//             color="inherit"
//             aria-label="Open drawer"
//             onClick={handleToggle}
//           >
//             <MenuIcon id="menu" />
//           </IconButton>
//         </Tooltip>
//         {/* <div>{todos}</div> */}
//         <div className="menuBar">
//           <div>Keep</div>
//           <div>
//             <TextField
//               placeholder="Search"
//               variant="outlined"
//               className="searchField"
//               margin="normal"
//             />
//           </div>
//         </div>
//       </Toolbar>
//     </AppBar>
//     <Drawer open={open} variant="persistent" anchor="left">

//     </Drawer>
//   </MuiThemeProvider>
// </div>
/* 
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */
