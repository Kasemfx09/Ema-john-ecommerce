import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
     return (
          <div className='header'>              
               <img src={logo} alt="" />
               <div className='nav'>
                    <ul>
                         <li><a href="/order">Order</a> </li>
                         <li><a href="/order">Order View</a> </li>
                         <li><a href="/order">Manage Inventory</a> </li>
                         <li><a href="/order">Login</a> </li>
                         
                    </ul>
               </div>              
              
          </div>
     );
};

export default Header;