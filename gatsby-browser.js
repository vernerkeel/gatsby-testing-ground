import React from 'react';
import NavbarWrapper from './src/components/NavbarWrapper';
export const wrapPageElement = ({ element, props }) => (
  <NavbarWrapper {...props}>{element}</NavbarWrapper>
);
