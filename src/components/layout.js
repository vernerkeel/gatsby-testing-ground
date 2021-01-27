import React from 'react';
import '../bulma/bulma.scss';
import Navbar from './navbar';
import EmailForm from './emailForm';

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <EmailForm />
    </>
  );
};

export default Layout;
