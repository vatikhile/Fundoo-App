import React, { useEffect } from "react";
import Service from "../../Service/NoteService/noteService";
import Notes from "../../Components/DisplayNotes/displayNotes";
// import "./displayNotes.css";

export default function getAllNotes() {
  const NoteService = new Service();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    getUpdateNotes();
  });
  const getUpdateNotes = () => {
    NoteService.getAllNotes()
      .then((allNotes) => {
        console.log("allnotes", allNotes);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Notes />
    </div>
  );
}
