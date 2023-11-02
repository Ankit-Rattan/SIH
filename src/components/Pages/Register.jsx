import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Register() {
  const [userData, setUserData] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
  });
  let name, value;

  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  // firebase connection
  const submitData = async (event) => {
    event.preventDefault();

    const { username, phone, email, password } = userData;
    const res = await fetch(
      "https://ecourt-reg-default-rtdb.firebaseio.com/userDataRecords.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          phone,
          email,
          password,
        }),
      }
    );

    if (res) {
      alert("Thank you for Registration");
    } else {
      alert("Fill the Data properly");
    }
  };
  return (
    <div className="container login mt-5 shadow-lg p-5">
      <h2 className="text-center">REGISTRATION FORM</h2>
      <form action="POST">
        <div className="form-group">
          <label htmlFor="exampleInputUsername1">Username</label>
          <input
            onChange={postUserData}
            value={userData.username}
            type="text"
            name="username"
            className="form-control"
            autoComplete="off"
            placeholder="Username"
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPhone1">Phone</label>
          <input
            value={userData.phone}
            onChange={postUserData}
            type="number"
            name="phone"
            className="form-control"
            placeholder="Enter your phone number"
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            value={userData.email}
            onChange={postUserData}
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            autoComplete="off"
            placeholder="Email"
          ></input>
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            value={userData.password}
            onChange={postUserData}
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            autoComplete="off"
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Confirm Password</label>
          <input
            type="password"
            name="cpassword"
            className="form-control"
            id="exampleInputPassword1"
            autoComplete="off"
          ></input>
        </div>

        <button className="submit" onClick={submitData}>
          Submit
        </button>
      </form>

      <br />
      <p>OR</p>

      <Link to="/signin" className="sign-in">SignIn Page</Link>
    </div>
  );
}
export default Register;
