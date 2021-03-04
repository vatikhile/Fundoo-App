import React from "react";
import AddNewCard from "../../Components/Add_NewCards/AddNewCards";
import GetAllNotes from "../../Components/GetAllNotes/getAllNotes"

export default function content() {
  return (
    <div>
      <AddNewCard />
      <GetAllNotes />
    </div>
  );
}
