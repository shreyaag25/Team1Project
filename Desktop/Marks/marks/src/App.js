
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Loginpage from './Componenets/Loginpage';
import { BrowserRouter } from 'react-router-dom';
import Registrationform from './Componenets/Registrationform';
import Navbar from './Componenets/Navbar';
import Profile from './Componenets/Profile';
import Addstudent from './Componenets/Addstudent';
import Managestudent from './Componenets/Managestudent';
import Createsubject from './Componenets/Createsubject';
import Managesubject from './Componenets/Managesubject';
import AddInternals from './Componenets/AddInternals';
import ManageInternals from './Componenets/ManageInternals';
import AddExternals from './Componenets/AddExternals';
import ManageExternals from './Componenets/ManageExternals';
import Resgisterstu from './Componenets/Resgisterstu';
// import Reghome from './Componenets/Reghome';
import Regint from './Componenets/Regint';
import Regext from './Componenets/Regext';
import Request from './Componenets/Request';
import Regprofile from './Componenets/Regprofile';
import ResultAnalysis from './Componenets/ResultAnalysis';

import Announcements from './Componenets/Announcements';
import StuAnnou from './Componenets/StuAnnou';
import Receivedqueries from './Componenets/Receivedqueries';
function App({store}) {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Loginpage store={store}/>}/>
      <Route path="register" element={<Registrationform/>}/>
      <Route path="Home" element={<Navbar/>}/>
      <Route path="register/regis" element={<Resgisterstu/>}/>
      <Route path="regis" element={<Resgisterstu/>}/>
      <Route path="profile" element={<Profile />}/>
      {/* <Route path="add" element={<Addstudent/>}/> */}
      <Route path="manage" element={<Managestudent/>}/>
      <Route path="register/Home" element={<Navbar/>}/>
      <Route path="add" element={<Addstudent/>}/>
      <Route path="cs" element={<Createsubject/>}/>
      <Route path="ms" element={<Managesubject/>}/>
      <Route path="adr" element={<AddInternals/>}/>
      <Route path="int" element={<ManageInternals/>}/>
      <Route path="ext" element={<AddExternals/>}/>
      <Route path="mnr" element={<ManageExternals/>}/>
      <Route path="recreq" element={<Announcements/>}/>
      <Route path="stano" element={<StuAnnou/>}/>
      <Route path="register/intstu" element={<Regint/>}/>
      <Route path="register/extstu" element={<Regext/>}/>
      <Route path="intstu" element={<Regint/>}/>
      <Route path="extstu" element={<Regext/>}/>
      <Route path="profilestu" element={<Regprofile/>}/>
      <Route path="reqstu" element={<Request/>}/>
      {/* <Route path="add" element={<Addstudent/>}/> */}
      <Route path="resanal" element={<ResultAnalysis/>}/>
      <Route path="register/reqstu" element={<Request/>}/>
      <Route path="recreqqq"  element={<Receivedqueries/>}/>
    </Routes>
    </BrowserRouter>
    </>
   
  );
}

export default App;
