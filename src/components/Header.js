import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';


const Header = () => {
    return(
        
        <div className="ui secondary pointing menu">
          <Link to="/" className="item">
             Home
          </Link>
          <div className="right menu">
          <Link to="/form" className="item">
             Add Car
          </Link>
          <div className="right menu">
            <Link to="/inventory" className="item">
                Inventory
            </Link>
            <GoogleAuth />it should be here
          </div>
         </div>
        </div>
        
    )
};

export default Header;