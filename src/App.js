import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Services from './components/services/Services';
import ContactUs from './components/contactus/ContactUs';


let App = () => {
  return(
    <React.Fragment>
     <Router>
          <Navbar/>
         <Routes>
                     <Route  path='/Home' element={<Home/>}/>
                    <Route  path='/about' element={<About/>}/> 
                    <Route path='/services' element={<Services/>}/>
                    <Route path='/contactus' element={<ContactUs/>}/>
                    

                    
                    
               </Routes>
            </Router>
    
      
    </React.Fragment>
  )
}
export default App;