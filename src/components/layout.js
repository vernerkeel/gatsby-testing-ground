import React from 'react';
import '../bulma/bulma.scss';
import Navbar from './megamenu/Navbar';
import EmailForm from './EmailForm';

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <EmailForm />
    </>
  );
};

export default Layout;
