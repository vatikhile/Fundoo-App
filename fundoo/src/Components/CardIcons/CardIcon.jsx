import React, { useState } from "react";
import Reminder from "../../Asset/reminder.svg";
import Colaborators from "../../Asset/colaborator.svg";
import Palette from "../../Asset/colorcard.svg";
import Archive from "../../Asset/archive.svg";
import More from "../../Asset/more_.svg";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { IconButton, Tooltip } from "@material-ui/core";
import "./CardIcons.css";
// import Color from "../../Components/Color/Color";
export default function Icons({ id, checkArchived, checkTrash, checkColor }) {
  const [openColor, setSetColor] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [color, setAnchor] = useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    checkTrash(id, true);
    setAnchorEl(null);
  };
  const handleClick = () => {
    checkArchived(id, true);
  };
  const handleColor = (event) => {
    setSetColor(!openColor);
    setAnchor(event.currentTarget);
  };
  const handleColorClose = () => {
    setAnchor(null);
  };
  const selectColor = (e) => {
    console.log("value", e.target.value);
    checkColor(id, e.target.value);
  };
  const hexCodesAndNames = [
    { name: "lightcoral", hexCode: "#f28b81" },
    { name: "lavender", hexCode: "#e8eaed" },
    { name: "orange", hexCode: "#f7bc02" },
    { name: "green", hexCode: "#ccff8f" },
    { name: "yellow", hexCode: "#fcf475" },
    { name: "paleturquoise", hexCode: "#a7ffeb" },
    { name: "lightcyan", hexCode: "#cbf0f8" },
    { name: "lightblue", hexCode: "#aecbfa" },
    { name: "plum", hexCode: "#d7aefb" },
    { name: "wheat", hexCode: "#e6c9a8" },
    { name: "mistyrose", hexCode: "#fbcfe8" },
    { name: "white", hexCode: "#ffffff" },
  ];
  const changeCardColor = hexCodesAndNames.map((colorKey) => (
    <Tooltip title={colorKey.name} key={colorKey.hexCode}>
      <IconButton
        style={{ backgroundColor: colorKey.hexCode, margin: "2px" }}
        value={colorKey.hexCode}
        onClick={selectColor}
        // onMouseOver={this.handleToggle}
      ></IconButton>
    </Tooltip>
  ));
  return (
    <div>
      <div className="IconsList">
        <div>
          <img src={Reminder} alt="" />
        </div>
        <div>
          <img src={Colaborators} alt="" />
        </div>
        <div onClick={handleColor}>
          <img src={Palette} alt="" />
        </div>

        <div onClick={handleClick}>
          <img src={Archive} alt="" />
        </div>
        <div onClick={handleMenu}>
          <img src={More} alt="" />
        </div>
      </div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Delete Note</MenuItem>
        <MenuItem onClick={handleClose}>Add Label</MenuItem>
        <MenuItem onClick={handleClose}>Add Drawer</MenuItem>
      </Menu>

      <Menu
        id="simple-menu"
        anchorEl={color}
        keepMounted
        open={Boolean(color)}
        onClose={handleColorClose}
        autoWidth={true}
      >
        <MenuItem style={{ width: "144px", height: "102px" }}>
          {" "}
          <div className="paperPallet">{changeCardColor}</div>
        </MenuItem>

        {/* <MenuItem onClick={handleClose}>Add Label</MenuItem>
        <MenuItem onClick={handleClose}>Add Drawer</MenuItem> */}
      </Menu>
    </div>
  );
}
