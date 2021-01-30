import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import useWindowSize from '../../utils/hooks/useWindowSize';
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
  const { width } = useWindowSize();
  const toggleMenu = () => setActiveMenu(!activeMenu);

  useEffect(() => {
    setActiveMenu(!activeMenu);
    if (typeof window !== 'undefined') {
      if (width >= 1024) setTimeout(() => setActiveMenu(true), 1);
    }
  }, [location]);

  useEffect(() => {
    if (typeof window !== 'undefined') setActiveMenu(width > 1024);
  }, [width]);

  return (
    <nav className='navbar has-background-white-bis has-shadow'>
      <div className='container'>
        <div className='navbar-brand'>
          <NavbarBurger
            active={activeMenu}
            toggleMenu={toggleMenu}
          />
        </div>
        {activeMenu && <div className={`navbar-menu ${activeMenu ? 'is-active' : ''}`}>
          <div className='navbar-start'>
            <Link to={'/'} className='navbar-item' href='/'>
              Home
            </Link>
            <ServicesMenu activeMenu={activeMenu}/>
          </div>
          <div className='navbar-end has-background-white-bis'>
            <div className='navbar-item'>
              <CallEmailBtns/>
            </div>
          </div>
        </div>}
      </div>
    </nav>
  );

};

export default Navbar;

