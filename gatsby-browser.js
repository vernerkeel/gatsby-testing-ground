import React from 'react';
import ResponseTapBtn from './src/components/responseTapBtn';
export const wrapPageElement = ({ element, props }) => (
  <ResponseTapBtn {...props}>{element}</ResponseTapBtn>
);
