import React, { useEffect, useState } from "react";
import "./App.css";
import AddNoteForm from "./Components/addNoteForm";
import LoginForm from "./Components/loginForm";
import { getAllNotes } from "./services/notes/notes";
import Note from "./Components/Note";

function App() {
  const [notes, setNotes] = useState();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchNotes = async () => {
      const notes = await getAllNotes();
      console.log(notes);
      setNotes(notes);
    };

    fetchNotes();
  }, []);

  return (
    <div className="app">
      <div className="external-container">
        {notes &&
          notes.map((note) => {
            return (
              <Note note={note} user={user} setNotes={setNotes} key={note.id} />
            );
          })}
        {user ? (
          <AddNoteForm user={user} setNotes={setNotes} />
        ) : (
          <LoginForm setUser={setUser} />
        )}
      </div>
    </div>
  );
}

export default App;
