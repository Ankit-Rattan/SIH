import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:4000/signin", {
          email,
          password,
        })
        .then((res) => {
          if ((res.data = "exist")) {
            alert("User already exists");
          } else if ((res.data = "notexist")) {
            history("/", { state: { id: email } });
          }
        })
        .catch((e) => {
          alert("Wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="signin">
      <h1>SignIn</h1>

      <form action="POST">
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
        ></input>

        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
        ></input>

        <input type="submit" onClick={submit} />
      </form>
      <br />
      <p>OR</p>

      <Link to="/register">Register Page</Link>
    </div>
  );
}
export default SignIn;
