import React from 'react';
import {Route, Routes} from "react-router-dom";
import Homepage from './frontpage';
import Loginpage from './Login';
import Signuppage from './SignUp';
import Types11 from './secondpage';
import Checkout from './payment';
import Homepage1 from './afterpayment';
import ResponsiveAppBar from './admin';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardContainer from "./CardContainer";
import FrontPage from './pics';

function App() {
  const appStyle = {
    backgroundColor: 'white',
    color:'black',
    minHeight: '100vh', 
  };
  return (
    <>
    <div style={appStyle}>

  <Routes>
  <React.Fragment>

  <Route path="/card-container" element={<CardContainer />} />


  <Route path="/login" element={<Loginpage/>}/> 
  <Route path="/" element={<Homepage/>}/> 

  <Route path="/pic" element={<FrontPage/>}/> 


  <Route path="/signuppage" element={<Signuppage/>}/> 
  {/* <Route path="/teacherprofile" element={<TeacherProfile/>}/>  */}
  {/* <Route path="/studentprofile" element={<StudentProfile/>}/>  */}
  <Route path="/coursepage" element={<Types11/>}/> 
  {/* <Route path="/admin" element={<ResponsiveAppBar/>}/>  */}
  <Route path="/payment" element={<Checkout/>}/> 
  <Route path="/coursecontent" element={<Homepage1/>}/> 
  {/* <CardContainer/>
  <FormProductData/> */}
  </React.Fragment>

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