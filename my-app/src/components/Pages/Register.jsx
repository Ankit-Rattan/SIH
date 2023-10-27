import React, {  useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Register() {
  const history = useNavigate();
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:4000/register", {
          username,
          phone,
          email,
          password,
        })
        .then((res) => {
          if ((res.data = "exist")) {
            history("/", { state: { id: email, name: username } });
          } else if ((res.data = "notexist")) {
            alert("User has not signed up");
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
    
<div class="container login mt-5 shadow-lg p-5">
<h2 class="text-center">REGISTRATION FORM</h2>
<form action="POST" >

    <div class="form-group">
        <label for="exampleInputUsername1">Username</label>
        <input type="text"  onChange={(e) => {
            setUsername(e.target.value);
          }} name="username" class="form-control" autocomplete="off"></input>
      </div>

    <div class="form-group">
        <label for="exampleInputPhone1">Phone</label>
        <input type="number"  onChange={(e) => {
            setPhone(e.target.value);
          }} name="phone" class="form-control"></input>
      </div>

    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email"  onChange={(e) => {
            setEmail(e.target.value);
          }} name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autocomplete="off"></input>
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>

    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" name="password"  onChange={(e) => {
            setPassword(e.target.value);
          }} class="form-control" id="exampleInputPassword1" autocomplete="off"></input>
    </div>

    <div class="form-group">
      <label for="exampleInputPassword1">Confirm Password</label>
      <input type="password" name="cpassword" class="form-control" id="exampleInputPassword1" autocomplete="off"></input>
    </div>

  

    <input type="submit" onClick={submit} />
  </form>

  <br />
      <p>OR</p>

      <Link to="/signin">SignIn Page</Link>

</div>
  );
}
export default Register;

