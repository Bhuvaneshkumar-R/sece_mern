import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home/Home";
import Register from "./services/auth/register/Register";

function App() {
  return (
    <>
      <Home />
      <Register />
    </>
  );
}

export default App;
