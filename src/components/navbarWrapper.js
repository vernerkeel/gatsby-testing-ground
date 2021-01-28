import React from 'react';

import Navbar from './megamenu/Navbar';

const navbarWrapper = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

export default navbarWrapper;
