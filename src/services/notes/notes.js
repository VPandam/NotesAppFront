const notesAppUrl = "http://localhost:3001/";
const loginUrl = "https://notes-app-back.onrender.com/";

export const getAllNotes = () => {
  return fetch(`${loginUrl}notes`)
    .then((response) => response.json())
    .catch((error) => console.log(error.message));
};

export const postNewNote = async (newNote, token) => {
  console.log(newNote);
  console.log(token);
  return fetch(`${loginUrl}notes`, {
    method: "POST",
    body: JSON.stringify(newNote),
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      getAllNotes();
    })
    .catch((error) => console.log(error.message));
};

export const deleteNote = async (id, token) => {
  console.log(id);
  return fetch(`${loginUrl}notes/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
