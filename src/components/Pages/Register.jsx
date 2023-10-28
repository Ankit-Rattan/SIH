import React, {  useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Register() {
  // const history = useNavigate();
  
  // const [username, setUsername] = useState("");
  // const [phone, setPhone] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // async function submit(e) {
    //   e.preventDefault();
    
    //   try {
      //     await axios
      //       .post("http://localhost:4000/register", { 
        //         username,
        //         phone,
        //         email,
        //         password,
        //       })
        //       .then((res) => {
          //         if ((res.data = "exist")) {
            //           history("/", { state: { id: email, name: username } });
            //         } else if ((res.data = "notexist")) {
              //           alert("User has not signed up");
              //         }  
              //       })
              //       .catch((e) => {
  //         alert("Wrong details");
  //         console.log(e);
  //       });
  //   } catch (e) {
    //     console.log(e);
    //   }
    // }
    
    
      const [userData, setUserData] = useState({
        username:"",
        phone:"",
        email:"",
        password:""
    
      });
    let name, value;
    
    const postUserData = (event) =>{
      name  = event.target.name;
      value  = event.target.value;

      setUserData({
        ...userData, [name]:value
      })
  }

  // firebase connection
  const submitData = async(event) =>{
    event.preventDefault();

    const { username, phone, email, password } = userData;
    const res = await fetch(
      'https://ecourt-reg-default-rtdb.firebaseio.com/userDataRecords.json',
      {
        method : "POST",
        headers:{
          "Content-Type" : "application/json",
        },
        body:JSON.stringify({
          username, phone, email, password 
        })
      }
      );

      if(res){
        alert("Thank you for Registration");
      }else{
        alert("Fill the Data properly");
      }

  }
  return (
    
<div class="container login mt-5 shadow-lg p-5">
<h2 class="text-center">REGISTRATION FORM</h2>
<form action="POST" >

    <div class="form-group">
        <label for="exampleInputUsername1">Username</label>
        <input 
          onChange={postUserData}      
          value={userData.username}
          type="text"  
          name="username" 
          className="form-control"
          autocomplete="off"/>
      </div>

    <div class="form-group">
        <label for="exampleInputPhone1">Phone</label>
        <input 
              value={userData.phone}
              onChange={postUserData}
              type="number"  
              name="phone" 
              className="form-control"></input>
      </div>

    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input 
            value={userData.email}
            onChange={postUserData}
            type="email" 
            name="email" 
            className="form-control" 
            id="exampleInputEmail1" aria-describedby="emailHelp" autocomplete="off"></input>
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>

    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input 
            value={userData.password}
            onChange={postUserData}
            type="password" name="password"
            className="form-control" 
            id="exampleInputPassword1" 
            autocomplete="off"></input>
    </div>

    <div class="form-group">
      <label for="exampleInputPassword1">Confirm Password</label>
      <input type="password" nameName="cpassword" class="form-control" id="exampleInputPassword1" autocomplete="off"></input>
    </div>

  

    <button className="submit" onClick={submitData}>Submit</button>
  </form>

  <br />
      <p>OR</p>

      <Link to="/signin">SignIn Page</Link>

</div>
  );
}
export default Register;

