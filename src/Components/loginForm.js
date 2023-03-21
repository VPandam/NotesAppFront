import React from "react";
import { postLogin } from "../services/login/login";

export default function loginForm({ user, setUser }) {
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const user = await postLogin(
      ev.target.userName.value,
      ev.target.password.value
    );
    console.log(user);
    setUser(user);
  };
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <label>User Name:</label>
        <input type="text" name="userName" placeholder="User name" />
        <label>Password</label>
        <input type="text" name="password" placeholder="Password" />
        <button>Submit</button>
      </form>
    </React.Fragment>
  );
}
