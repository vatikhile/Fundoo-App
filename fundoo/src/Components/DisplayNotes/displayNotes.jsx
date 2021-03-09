import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import NoteServices from "../../Service/NoteService/noteService";
import Icons from "../../Components/CardIcons/CardIcon";
import { TextField } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import MuiDialogContent from "@material-ui/core/DialogContent";
import Snackbar from "@material-ui/core/Snackbar";

import "./displayNotes.css";

const useStyles = makeStyles({
  root: {
    boxShadow: "none",
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    width: "239px",
    position: "relative",
    marginTop: "18px",
    marginLeft: "18px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  Dialog: {
    paddingTop: "10",
    paddingBottom: "0",
  },
  paper: {
    borderRadius: "10px",
  },
});
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
const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);
export default function AllNotes(props) {
  const Notes = new NoteServices();
  const classes = useStyles();
  const [noteId, setNoteId] = useState();
  const [info, setInfo] = useState({ title: "", description: "",color:"" });
  const [open, setOpen] = useState(false);
  const [isEdit, setValid] = useState(false);
  const [openSnack, setSnack] = useState(false);

  useEffect(() => {
    console.log("postObject", props);
  });

  const handleToggleOpen = (noteId, noteTitle, noteDesc,notecolor) => {
    setNoteId(noteId);
    info.title = noteTitle;
    info.description = noteDesc;
    info.color=notecolor
    setOpen(true);
    console.log("id ......", noteId);
    console.log("note id ......", noteTitle);
  };
  const handleClose = (e) => {
    e.preventDefault();
    setOpen(false);
    if (isEdit) {
      console.log("true");
      var data = {
        noteId: noteId,
        title: info.title,
        description: info.description,
        color:info.color
      };
      Notes.updateNote(data)
        .then((response) => {
          console.log("uddate note function", response);
          setSnack(true);
          props.allNotes();
        })
        .catch((err) => {
          console.log("Eroorrrrrr....", err);
        });
    }
  };
  const handleChanges = (e) => {
    setValid(true);
    const { name, value } = e.target;
    setInfo((prevState) => ({
      ...prevState,

      [name]: value,
    }));
  };

  const handleArchive = (id, isArchive) => {
    console.log("displaynotes", id);
    console.log("displaynotes", isArchive);
    // this.setState({ isArchived: isArchive });
    // console.log(this.state.isArchived);

    var note = {
      noteIdList: [id],
      isArchived: isArchive,
    };

    //Update service
    Notes.archiveNote(note)
      .then((response) => {
        console.log(response);
        // props.notesdata.filter((item) => item.isArchived === false);
        // console.log("result", result);
        props.allNotes();
      })
      .catch((err) => {
        console.log("Eroorrrrrr....", err);
      });
  };
  const handleTrash = (id, isTrash) => {
    console.log("displaynotes", id);
    console.log("displaynotes", isTrash);
    // this.setState({ isArchived: isArchive });
    // console.log(this.state.isArchived);

    var noteTrash = {
     
        'noteIdList': [id],
        'isDeleted': isTrash
  
    };

    //Update service
    Notes.trashNote(noteTrash)
      .then((response) => {
        console.log("trash",response);
        // props.notesdata.filter((item) => item.isArchived === false);
        // console.log("result", result);
        props.allNotes();
      })
      .catch((err) => {
        console.log("Eroorrrrrr....", err);
      });
  };
 const handleColorChanger = (id, value) => {
    // this.setState({ color: value })
    var note = {
        'noteIdList': [id],
        'color': value,
    }

    Notes.changesColorNotes(note)
        .then(response => {
          console.log("response color",response);
          props.allNotes();
        })
        .catch(err => {
            console.log("Eroorrrrrr....", err);
        })
}



  const content = props.notesdata.reverse().map((post) => (
    <Card className={classes.root} style={{ backgroundColor: post.color}}>
      <CardContent
        onClick={() => handleToggleOpen(post.id, post.title, post.description ,post.color)}
      >
        <Typography className="textContent" variant="body1">
          {post.title}
        </Typography>
        <Typography className="textContent" variant="body1">
          {post.description}
        </Typography>
      </CardContent>
      <CardActions className="CardsIcons">
        <Icons id={post.id} checkArchived={handleArchive} checkTrash={handleTrash} checkColor={handleColorChanger}/>
      </CardActions>
    </Card>
  ));

  return (
    <div className="maincard" >
      {content}
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        classes={{
          paper: classes.paper,
        }}
      >
        <DialogContent dividers className={classes.Dialog}   style={{ backgroundColor: info.color}}>
          <div className="dialogExtend">
            <div>
              <StyledTextField
                placeholder="Title"
                variant="outlined"
                name="title"
                value={info.title}
                onChange={handleChanges}
                fullWidth={true}
              />
            </div>

            <div className="dialogDescription">
              <StyledTextField
                placeholder="Take a note"
                variant="outlined"
                name="description"
                value={info.description}
                onChange={handleChanges}
                fullWidth={true}
              />
            </div>

            <div className="showsIcons">
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
        </DialogContent>
      </Dialog>
      ;
      <Snackbar
        open={openSnack}
        autoHideDuration={3000}
        message="Note updated sucessfully"
        severity="success"
        onClose={() => setSnack(!openSnack)}
      />
    </div>
  );
}
