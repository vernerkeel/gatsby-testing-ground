import { Link } from 'gatsby';
import React, { useEffect, useRef, useState } from 'react';
import CallEmailBtns from './callEmailBtns';
import ServicesMenu from './servicesMenu';

const NavbarBurger = (props) => (
  <div
    onClick={props.toggleMenu}
    className={`navbar-burger burger ${props.active ? 'is-active' : ''}`}
  >
    <span/>
    <span/>
    <span/>
  </div>
);

const Navbar = ({ location }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const fakeReference = useRef(null);
  const toggleMenu = () => {
    setActiveMenu(!activeMenu);
  };

  return (
    <nav className='navbar has-background-white-bis has-shadow' ref={fakeReference}>
      <div className='container'>
        <div className='navbar-brand'>
          <NavbarBurger
            active={activeMenu}
            toggleMenu={toggleMenu}
          />
        </div>
        <div
          className={`navbar-menu ${
            activeMenu ? 'is-active' : ''
          }`}
        >
          <div className='navbar-start'>
            <Link to={'/'} className='navbar-item' href='/'>
              Home
            </Link>
            <ServicesMenu location={location}/>
          </div>
          <div className='navbar-end has-background-white-bis'>
            <div className='navbar-item'>
              <CallEmailBtns/>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );

};

export default Navbar;

