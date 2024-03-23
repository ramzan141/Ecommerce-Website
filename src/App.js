
import './App.css';
import Home from './pages/Home';
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";

import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
    <div className="bg-slate-900">
      <Navbar/>
    </div>

    <Routes>
      <Route path="/" element={<Home/> }/>
      <Route path="/Cart" element={<Cart/> }/>
    </Routes>
    </div>
  );
}

export default App;
