import React from 'react';
import { FaPhone, FaRegEnvelope } from 'react-icons/fa';

const callEmailBtns = () => {
  return (
    <div className='field is-grouped'>
      <p className='control'>
        <a
          className='button is-danger response-tap'
          onClick={() => {
            'rTapClickToCall(432151)';
          }}
        >
          <span className='icon'>
            <FaPhone className='is-size-5' />
          </span>

          <span className='rTapNumber432151'>0161 794 0088</span>
        </a>
      </p>

      <p className='control'>
        <a className='button is-primary' href='/'>
          <span className='icon'>
            <FaRegEnvelope />
          </span>
          <span>Send email</span>
        </a>
      </p>
    </div>
  );
};

export default callEmailBtns;
