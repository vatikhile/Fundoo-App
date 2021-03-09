import React, { useEffect, useState } from "react";
import Service from "../../Service/NoteService/noteService";
import AllNotes from "../../Components/DisplayNotes/displayNotes";
import './TrashNotes.css'
export default function Trash() {
  const noteService = new Service();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getUpdateNotes();
  }, []);
  const getUpdateNotes = async () => {
    await noteService
      .getTrashNotes()
      .then((allNotes) => {
        setNotes(allNotes.data.data.data);
        console.log("notesarrayTrash", allNotes);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="mainArchive">
      <AllNotes notesdata={notes} allNotesTrash={getUpdateNotes} />
    </div>
  );
}