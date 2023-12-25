import React from 'react';
import {Route, Routes} from "react-router-dom";
import Homepage from './frontpage';
import Loginpage from './Login';
import Signuppage from './SignUp';
import Types11 from './secondpage';
import LoginComponent from './loginas';
import AdminLogin from './adminlogin.js';
import TeacherLogin from './teacherlogin.js';
import StudentLogin from './studentlogin.js';
function App() {
  const appStyle = {
    backgroundColor: '#FFEBEB',
    minHeight: '100vh', 
  };
  return (
    <>
    <div style={appStyle}>

  <Routes>
  <Route path="/" element={<Homepage/>}/> 
  <Route path="/loginpage" element={<LoginComponent/>}/> 
  <Route path="/adminlogin" element={<AdminLogin/>}/> 
  <Route path="/teacherlogin" element={<TeacherLogin/>}/> 
  <Route path="/studentlogin" element={<StudentLogin/>}/> 


</Routes>
</div>
    </>
  );
  }

export default App;





    {/* <div style={appStyle}>
    
    <ResponsiveAppBar/> 
    <Types/>
    <BasicSelect/> 
    <Types1/>
    <MediaCard/>
    <Types2/>
    <Types3/>
    <Footer/> */}
    {/* <Copyright/>   */}
{/* <Copyright/>    */}
{/* <ResponsiveAppBar1/>
<Types9/>
<NestedList/> */}
{/* <kavin/> */}

     {/* </div> */}