import React from 'react';
import ResponsiveAppBar from './pages/header';
import Types from './pages/body';
import BasicSelect from './pages/hours';
import Types1 from './pages/coursetitle';
import MediaCard from './pages/card';
import Types2 from './pages/mentors';
import Types3 from './pages/review';
import Footer from './pages/footer';
import Copyright  from './signuppage.js/signup';
function App() {
  const appStyle = {
    backgroundColor: '#FFEBEB', // Replace with your desired color code
    minHeight: '100vh', // Ensures the background color covers the entire viewport height
  };

  return (
    <>
     <div style={appStyle}>
    
    <ResponsiveAppBar/> 
    <Types/>
    <BasicSelect/>
    <Types1/>
    <MediaCard/>
    <Types2/>
    <Types3/>
    <Footer/>
     {/* <Copyright/>  */}
     </div>
     {/* <Copyright/> */}
    </>
  );
  }

export default App;