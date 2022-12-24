import { Route, Routes } from "react-router-dom";
import Admin from "./admin";
import Forgot from "./Forgot";
import Login from "./Login";
 import Signup from "./signup";
 import {  Womens } from "./pages/womens";

import Cart from './Cart';
import Home from './Home/Home'
import {Fitness} from './Fitness/Fitness'
import Care from './Care/Care'
import {Mind} from './Mind/Mind'
import {Store} from './Store/Store'
import Fitness1 from "./Fitness/Fitness1";
export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={<Signup />} />
      <Route path='/fitness' element={<Fitness1/>} />
      <Route path='/mind' element={<Mind/>} />
      <Route path='/store' element={<Store/>} />
      <Route path="/:head" element={<Womens/>}/>
      <Route path='/care' element={<Care/>} />
      <Route path="/admin" element={<Admin />} />
     
      <Route path="/forgot" element={<Forgot />} />
      <Route path='/cart' element={<Cart/>} />
    </Routes>
  );
}
