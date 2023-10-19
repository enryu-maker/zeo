import './App.css'
import Bill from './pages/bill/bill';
import DosageHis from './pages/dosageHis/dosageHis';
import Home from "./pages/home/home";
import MedHis from './pages/medHis/medHis';
import PatientInfo from './pages/patientInfo/patientInfo';
import Profile from './pages/profile/profile';
import Room from "./pages/room/room";

import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div style={{
      width:'100vw',
      height:'100vh',
      display:'flex'
    }}>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/room' element={<Room/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/bill' element={<Bill/>}/>
      <Route path='/medhis' element={<MedHis/>}/>
      <Route path='/doshis' element={<DosageHis/>}/>
      <Route path='/patientinfo' element={<PatientInfo/>}/>
    </Routes>
    </div>
  )
}

export default App;
