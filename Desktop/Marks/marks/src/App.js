
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
import Addresult from './Componenets/Addresult';
import Internals from './Componenets/Internals';
import Externals from './Componenets/Externals';
import Manageresult from './Componenets/Manageresult';
import Resgisterstu from './Componenets/Resgisterstu';
import Reghome from './Componenets/Reghome';
import Regint from './Componenets/Regint';
import Regext from './Componenets/Regext';
import Request from './Componenets/Request';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Loginpage/>}/>
      <Route path="register" element={<Registrationform/>}/>
      <Route path="Home" element={<Navbar/>}/>
      <Route path="register/regis" element={<Resgisterstu/>}/>
      <Route path="regis" element={<Resgisterstu/>}/>
      <Route path="profile" element={<Profile/>}/>
      {/* <Route path="add" element={<Addstudent/>}/> */}
      <Route path="manage" element={<Managestudent/>}/>
      <Route path="register/Home" element={<Navbar/>}/>
      <Route path="add" element={<Addstudent/>}/>
      <Route path="cs" element={<Createsubject/>}/>
      <Route path="ms" element={<Managesubject/>}/>
      <Route path="adr" element={<Addresult/>}/>
      <Route path="int" element={<Internals/>}/>
      <Route path="ext" element={<Externals/>}/>
      <Route path="mnr" element={<Manageresult/>}/>
      
      
      <Route path="register/int" element={<Regint/>}/>
      <Route path="register/ext" element={<Regext/>}/>
      
      <Route path="register/profile" element={<Reghome/>}/>
      {/* <Route path="add" element={<Addstudent/>}/> */}
      <Route path="register/manage" element={<Managestudent/>}/>
      <Route path="register/req" element={<Request/>}/>
      
    </Routes>
    </BrowserRouter>
    </>
   
  );
}

export default App;
