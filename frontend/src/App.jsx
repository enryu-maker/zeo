import './App.css'
import Home from "./pages/home/home";
import Room from "./pages/room/room";

import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/room' element={<Room/>}/>
    </Routes>
  )
}

export default App;
