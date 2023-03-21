const loginUrl = "https://notes-app-back.onrender.com/login";
const localHostURL = "http://localhost:3001/login";

export const postLogin = async (userName, password) => {
  const userToAdd = { userName, password };
  const parameters = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userToAdd),
  };
  return fetch(loginUrl, parameters)
    .then((res) => res.json())
    .catch((err) => console.log(err.message));
};
