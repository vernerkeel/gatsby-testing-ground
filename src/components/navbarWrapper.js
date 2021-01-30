import React from 'react';

import Navbar from './megamenu/navbar';

const navbarWrapper = ({ children, location }) => (
  <>
    <Navbar location={location}/>
    {children}
  </>
);

export default navbarWrapper;
