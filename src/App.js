import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./componets/Login";
import Signup from "./componets/Signup";
import Home from "./componets/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
