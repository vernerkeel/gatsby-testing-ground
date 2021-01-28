import React from 'react';
import { Link } from 'gatsby';
import { FaMapMarkerAlt } from 'react-icons/fa';
const ServicesMenu = () => {
  return (
    <div className='navbar-item has-dropdown is-hoverable is-mega'>
      <div className='navbar-link flex'>
        <FaMapMarkerAlt className='is-size-4 has-text-info' />
        <Link to={'/offices'}> &nbsp;Offices </Link>
      </div>
      <div
        id='blogDropdown'
        className='navbar-dropdown '
        data-style={{ width: '18rem' }}
      >
        <div className='container is-fluid'>
          <div className='columns'>
            <div className='column'>
              <Link to={'/about'}>
                <h1 className='title is-6 is-mega-menu-title is-hovered'>
                  About
                </h1>
              </Link>

              <Link to={'/london'} className='navbar-item '>
                London
              </Link>
              <Link to={'/london'} className='navbar-item '>
                London
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesMenu;
