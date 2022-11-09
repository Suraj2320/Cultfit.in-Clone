import { Route, Routes } from "react-router-dom";
import Admin from "./admin";
import Forgot from "./Forgot";
import Login from "./Login";
 import Signup from "./signup";
import User from "./users";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/users" element={<User />} />
      <Route path="/forgot" element={<Forgot />} />
    </Routes>
  );
}
