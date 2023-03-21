import React from "react";
import { postNewNote, getAllNotes } from "../services/notes/notes";

export default function addNoteForm({ user, setNotes }) {
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const newNote = {
      content: ev.target.noteContent.value,
      important: ev.target.importantNote.checked,
    };
    await postNewNote(newNote, user.token);
    const notes = await getAllNotes();
    console.log(notes);
    setNotes(notes);
  };
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="noteContent"
          placeholder="New note content"
        ></input>

        <div className="checkbox-container">
          <input type="checkbox" name="importantNote" />
          <span>Important?</span>
        </div>
      </form>
    </React.Fragment>
  );
}
