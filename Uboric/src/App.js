
import './App.css';
import AllRoutes from './component/AllRoutes';
import Cart from './component/Cart';

// import {signInWithGoogle} from "./services/firebase"

function App() {
  return (
    <div className="App">
     <AllRoutes/>
     
    <Cart/>
    </div>
  );
}


export default App;
