
import './App.css';
import AllRoutes from './component/AllRoutes';

import Navbar from './component/navbar/Navbar';

// import {signInWithGoogle} from "./services/firebase"

function App() {
  return (
    <div className="App">
      <Navbar/>
     <AllRoutes/>
     
    
    </div>
  );
}


export default App;
