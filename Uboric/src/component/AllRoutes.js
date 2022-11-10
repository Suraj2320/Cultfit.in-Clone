import { Route, Routes } from "react-router-dom";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
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
      <Route path="/about-us" element={<About/>} />
      <Route path="/contact-us" element={<Contact/>} />
    </Routes>
  );
}
