import React, { useEffect, useState } from "react";
import AddNewCard from "../../Components/Add_NewCards/AddNewCards";
import Service from "../../Service/NoteService/noteService";
import AllNotes from "../../Components/DisplayNotes/displayNotes";

export default function Content() {
  console.log("fff");
  const noteService = new Service();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getUpdateNotes();
  }, []);
  const getUpdateNotes = async () => {
    await noteService
      .getAllNotes()
      .then((allNotes) => {
        setNotes(allNotes.data.data.data);
        console.log("notesarray", notes);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <AddNewCard />

      <AllNotes notesdata={notes} allNotes={getUpdateNotes} />
    </div>
  );
}
// export default getUpdateNotes()

