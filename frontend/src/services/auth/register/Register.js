import React from "react";

function Register() {
  var [formData, setFormData] = React.useState({
    username: "",
    email: "",
    fullname: "",
    password: "",
  });
  var username = "",
    email = "",
    password = "",
    fullname = "";

  function handleSubmit(e) {
    e.preventDefault();
    setFormData({
      username: username,
      email: email,
      fullname: fullname,
      password: password,
    });
    console.log(formData);
  }

  function handleUsername(event) {
    username += event.target.value;
    console.log(username);
  }
  function handleEmail(event) {
    email += event.target.value;
    console.log(email);
  }
  function handleFullName(event) {
    fullname += event.target.value;
    console.log(fullname);
  }
  function handlePassword(event) {
    password += event.target.value;
    console.log(password);
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit} method="post">
        <input
          onChange={handleUsername}
          name="username"
          type="text"
          placeholder="Enter Username"
        />
        <input
          onChange={handleEmail}
          name="email"
          type="email"
          placeholder="Enter Email"
        />
        <input
          onChange={handleFullName}
          name="fullname"
          type="text"
          placeholder="Enter Full Name"
        />
        <input
          onChange={handlePassword}
          name="password"
          type="password"
          placeholder="Enter Password"
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Register;
