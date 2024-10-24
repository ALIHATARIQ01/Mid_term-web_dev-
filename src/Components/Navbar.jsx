import React from 'react'
import './Navbar.css'
import Searchbar from './Searchbar';
const Navbar = () => {
    return (
        <>
      <header className="header">
        <h1>Movie Explorer</h1>
        <ul>
         <li>Home</li> 
         <li>about</li> 
         <li>Favourites</li> 
        </ul>
      </header>
      </>
    );
  };
export default Navbar;

