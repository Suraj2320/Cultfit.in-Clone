import "./App.css";
import { Store } from "./Components/Store/Store";
// import Care from './Components/Care/Care';
// import Footer from './Components/Footer/Footer';
// import Home from './Components/Home/Home';
import Navbar from "./Components/navbar/Navbar";
import AllRoutes from "./Components/AllRoutes";
import Footer from "./Components/Footer/Footer";
import Fitness1 from "./Components/Fitness/Fitness1";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
