import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import { Tooltip } from "@material-ui/core";
import "./Dashboard.css";

const thm = createMuiTheme({
  overrides: {
    MuiDrawer: {
      paperAnchorLeft: {
        top: 65,
        width: 260,
        background: "white",
      },
      paperAnchorDockedLeft: {
        borderRight: "1px solid transparent",
      },
    },
    MuiAppBar: {
      colorPrimary: {
        color: "black",
        backgroundColor: "white",
      },
      root: {
        left: "auto",
      },
    },
  },
});
export default function PersistentDrawerLeft() {
  // const [age, setAge] = useState(42)
  // }
  // const [fruit, setFruit] = useState('banana');
  // const [todos, setTodos] = useState('[{ text: Learn Hooks }]');

  const [open, setOpen] = useState(true);

  const handleToggle = () => {
    // let toggle=!open
    setOpen(!open);
    console.log("demo", open);
  };

  return (
    <div>
      <MuiThemeProvider theme={thm}>
        <AppBar position="fixed">
          <Toolbar className="toolBar">
            <Tooltip title="Main menu">
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={handleToggle}
              >
                <MenuIcon id="menu" />
              </IconButton>
            </Tooltip>
            {/* <div>{todos}</div> */}
            <div className="menuBar">
              <div>Keep</div>
              <div>
                <TextField
                  placeholder="Search"
                  variant="outlined"
                  className="searchField"
                  margin="normal"
                />
              </div>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer open={open} variant="persistent" anchor="left">
          <div className="mainDrawer">
            <Button>Notes</Button>

            <Button>Reminder</Button>

            <Button>Edit Label</Button>

            <Button>Archive</Button>

            <Button>Trash</Button>
          </div>
        </Drawer>
      </MuiThemeProvider>
    </div>
  );
}
