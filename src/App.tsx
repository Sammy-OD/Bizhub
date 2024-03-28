import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import SingleListing from "./pages/SingleListing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Create from "./pages/Create";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/listing" element={<SingleListing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  )
}

export default App
