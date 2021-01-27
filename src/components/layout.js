import React from 'react';
import '../bulma/bulma.scss';
import Navbar from './navbar';
import EmailForm from './emailForm';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <EmailForm />
    </>
  );
};

export default Layout;
