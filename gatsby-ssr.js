const React = require('react');
const NavbarWrapper = require('./src/components/navbarWrapper');
export const wrapPageElement = ({ element, props }) => (
  <NavbarWrapper {...props}>{element}</NavbarWrapper>
);
