import React from 'react';
import './NavBar.css';
import img from './logo192.png';
import Cart from '../CartWidget/CartWidget';

const NavBar = (props) => {
	return (
<>
<nav className='navbar navbar-expand-lg navbar-light bg-light'>
  <a className='navbar-brand' href='/'><img src={img} width={60} alt='logo-coder-house' /></a>
  <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
    <span className='navbar-toggler-icon'></span>
  </button>
  <div className='collapse navbar-collapse d-flex justify-content-center' id='navbarNav'>
    <ul className='navbar-nav'>
      <li className='nav-item active'>
        <a className='nav-link' href='/'>Inicio<span className='sr-only'></span></a>
      </li>
      <li className='nav-item'>
        <a className='nav-link' href='/'>Item 2</a>
      </li>
      <li className='nav-item'>
        <a className='nav-link' href='/'>Item 3</a>
      </li>
      <li className='nav-item'>
        <a className='nav-link' href='/'>Item 4</a>
      </li>
      <li className='nav-item'>
        <Cart />
      </li>
    </ul>
  </div>
</nav>
</>
	);
};

export default NavBar;
