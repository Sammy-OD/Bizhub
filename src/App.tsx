import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import SingleListing from "./pages/SingleListing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Create from "./pages/Create";
import ProtectedRoute from "./ProctectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/listing/:id" element={<SingleListing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/create" element={<Create />} />
      </Route>
    </Routes>
  )
}

export default App
