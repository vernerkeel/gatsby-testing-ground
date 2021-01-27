// MailWidgetWrapper.js
import React from 'react';

import Navbar from './navbar';

const navbarWrapper = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

export default navbarWrapper;
