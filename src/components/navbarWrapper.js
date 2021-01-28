import React from 'react';

import Navbar from './megamenu/navbar';

const navbarWrapper = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

export default navbarWrapper;
