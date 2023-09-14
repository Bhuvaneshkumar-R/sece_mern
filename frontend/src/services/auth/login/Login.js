import React from "react";

function Login() {
  var [username, setUsername] = React.useState("");
  var [password, setPassword] = React.useState("");
  
  var [formData, setFormData] = React.useState({
    username: username,
    password: password,
  });
  
  function handleUsername(event) {
    setUsername(event.target.value);
    console.log(username);
  }
  function handlePassword(event) {
    setPassword(event.target.value);
    console.log(password);
  }
  function handleSubmit(event) {
    event.preventDefault();
    setFormData({
      username: username,
      password: password,
    });
    console.log(formData);
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} method="post">
        <input
          onChange={handleUsername}
          name="username"
          type="text"
          value={username}
          placeholder="Enter Username"
        />
        <input
          onChange={handlePassword}
          name="password"
          type="password"
          value={password}
          placeholder="Enter Password"
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Login;
