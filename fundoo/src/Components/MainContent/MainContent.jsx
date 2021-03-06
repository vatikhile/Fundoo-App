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
        const result = allNotes.data.data.data.filter((item) => {
          return (item.isArchived === false && item.isDeleted === false);
        });

        setNotes(result);

        console.log("notesarray", notes);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <AddNewCard Notes={getUpdateNotes} />

      <AllNotes notesdata={notes} allNotes={getUpdateNotes} />
    </div>
  );
}
// export default getUpdateNotes()
