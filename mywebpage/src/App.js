import React from 'react';
import {Route, Routes} from "react-router-dom";
import Homepage from './frontpage';
import Loginpage from './Login';
import Signuppage from './SignUp';
import Types11 from './secondpage';
import Checkout from './payment';
import Homepage1 from './afterpayment';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardContainer from "./CardContainer";
import FrontPage from './pics';
import SimplePaper1 from './feedback';
import FAQ from "./review"

function App() {
  const appStyle = {
    backgroundColor: '#101629',
    color:'white',
    minHeight: '100vh', 
  };
  return (
    <>
    <div style={appStyle}>

  <Routes>

  <React.Fragment>
  <Route path="/card-container" element={<CardContainer />} />
  <Route path="/login" element={<Loginpage/>}/> 
  <Route path="/el" element={<FAQ/>}/> 
  <Route path="/" element={<Homepage/>}/> 
  <Route path="/pic" element={<FrontPage/>}/> 
  <Route path="/feedbackform" element={<SimplePaper1/>}/>
  <Route path="/signuppage" element={<Signuppage/>}/> 
  <Route path="/coursepage" element={<Types11/>}/> 
  <Route path="/payment" element={<Checkout/>}/> 
  <Route path="/coursecontent" element={<Homepage1/>}/> 
  </React.Fragment>

</Routes>

</div>
    </>
  );
  }

export default App;


