import React from "react";

function Register() {

  function handleUsername(event) {
    console.log(event.target.value);
  }

  return (
    <div>
      <h1>Register</h1>
      <form>
        <input
          onChange={handleUsername}
          name="username"
          type="text"
          placeholder="Enter Username"
        />
        <input name="email" type="email" placeholder="Enter Email" />
        <input name="fullname" type="text" placeholder="Enter Full Name" />
        <input name="password" type="password" placeholder="Enter Password" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Register;
