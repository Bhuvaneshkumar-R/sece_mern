import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home/Home";
import Register from "./services/auth/register/Register";
import Login from "./services/auth/login/Login";

function App() {
  return (
    <>
      <Home />
      <Login/>
      <Register />
    </>
  );
}

export default App;
