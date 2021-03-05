import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import NoteServices from "../../Service/NoteService/noteService";
import Icons from "../../Components/CardIcons/CardIcon";
import Snackbar from "@material-ui/core/Snackbar";
import "./AddNewCards.css";
const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    backgroundColor: "white",

    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  noExtend: {
    display: "none",
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
    .MuiOutlinedInput-input {
      padding: 0;
    }
  }
`;

export default function AddCard() {
  const classes = useStyles();
  const addNotes = new NoteServices();

  const [openCard, setOpenCards] = useState(false);
  const [info, setInfo] = useState({ title: "", description: "" });
  const [open, setOpen] = useState(false);

  const handleAddCard = () => {
    setOpenCards(true);
  };

  const validate = () => {
    if (info.title.length !== 0 && info.description.length !== 0) {
      var data = {
        title: info.title,
        description: info.description,
        reminder: "",
        labelIdList: [""],
        color: "",
        isArchived: false,
        collaborators: [""],
        imageUrl: "",
      };
      var token = localStorage.getItem("userToken");
      addNotes
        .addNote(data, token)
        .then((response) => {
          console.log("create note 109 ", response);
          setOpen(true);
        })
        .catch((err) => {
          console.log("Eroorrrrrr....", err);
        });
    }
  };
  const handleClose = (e) => {
    e.preventDefault();
    validate();
    info.title = "";
    info.description = "";

    setOpenCards(false);
  };

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setInfo((prevState) => ({
      ...prevState,

      [name]: value,
    }));
  };

  return (
    <div>
      <div className={classes.toolbar}></div>

      <div className="main">
        <div>
          <div className={openCard ? "extendCard" : "noExtend"}>
            <StyledTextField
              placeholder="Title"
              variant="outlined"
              name="title"
              value={info.title}
              onChange={handleChanges}
              fullWidth={true}
            />
          </div>

          <div onClick={handleAddCard} className="descriptionField">
            <StyledTextField
              placeholder="Take a note"
              variant="outlined"
              name="description"
              value={info.description}
              onChange={handleChanges}
              fullWidth={true}
            />
          </div>
          <div className={openCard ? "showsIcons" : "noExtend"}>
            <div>
              <Icons />
            </div>
            <div>
              <Button onClick={handleClose} focusVisible={false}>
                close
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        message="Add new Note sucessfully"
        severity="success"
        onClose={() => setOpen(!open)}
      />
    </div>
  );
}
