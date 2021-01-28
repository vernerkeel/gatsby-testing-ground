import React from 'react';
import '../bulma/bulma.scss';
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
