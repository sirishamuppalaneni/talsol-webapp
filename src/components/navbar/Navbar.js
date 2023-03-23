import React from 'react';
import {Link} from "react-router-dom";

class Navbar extends React.Component{
    // constructor(props) {
    //     super(props);
        
    // }
    render() {
        return (
            <React.Fragment>
                <nav className='navbar navbar-dark bg-warning navbar-expand-sm'>
                    <div className='container'>
                    <a href='/Home' className='mainh '>Talsol Technologies </a>
                    <div className="collapse navbar-collapse">
                    <ul className='navbar-nav ml-auto '>
                        <li className='nav-item px-2'>
                            <Link to='/Home' className='nav-link'>Home</Link>
                        </li>
                        
                        <li className='nav-item px-2'>
                            <Link to='/About' className='nav-link'>About</Link>
                        </li>
                        <li className='nav-item px-2'>
                            <Link to='/Services' className='nav-link'>Services</Link>
                        </li>
                        <li className='nav-item px-2'>
                            <Link to='/ContactUs' className='nav-link'>Contactus</Link>
                        </li>
                        
                        
                       
                    </ul>
                    </div>
                    
                    </div>
                </nav>
            </React.Fragment>

            
        );
    }
    
}
export default Navbar;


