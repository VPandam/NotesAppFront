import React from "react";
import { deleteNote, getAllNotes } from "../services/notes/notes";
export default function Note({ note, user, setNotes }) {
  return (
    <div className="note" key={note.id}>
      <p>{note.id}</p>
      <p>{note.content}</p>
      <p>On date: {note.date}</p>
      <button
        onClick={async () => {
          await deleteNote(note.id, user.token);
          const notes = await getAllNotes();
          setNotes(notes);
        }}
      >
        DELETE
      </button>
    </div>
  );
}
