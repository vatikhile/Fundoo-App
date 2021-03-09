import React, { useEffect, useState } from "react";
import Service from "../../Service/NoteService/noteService";
import AllNotes from "../../Components/DisplayNotes/displayNotes";
import './Archive.css'
export default function Archive() {
  const noteService = new Service();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getUpdateNotes();
  }, []);
  const getUpdateNotes = async () => {
    await noteService
      .getarchieveNotes()
      .then((allNotes) => {
        setNotes(allNotes.data.data.data);
        console.log("notesarray2212", allNotes);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="mainArchive">
      <AllNotes notesdata={notes} allNotes={getUpdateNotes} />
    </div>
  );
}