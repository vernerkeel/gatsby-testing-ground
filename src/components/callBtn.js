import React from 'react';
import { FaPhone } from 'react-icons/fa';

const ResponseTapBtn = () => {
  return (
    <>
      <p className='control'>
        <a
          className='button is-danger response-tap'
          onClick={'rTapClickToCall(432151)'}
        >
          <span className='icon'>
            <FaPhone className='is-size-5' />
          </span>

          <span className='rTapNumber432151'>0161 794 0088</span>
        </a>
      </p>
    </>
  );
};

export default ResponseTapBtn;
