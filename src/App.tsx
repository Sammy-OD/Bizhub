import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import SingleListing from "./pages/SingleListing";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/listing" element={<SingleListing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default App
