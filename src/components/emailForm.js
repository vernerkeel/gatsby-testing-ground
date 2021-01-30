import React, { useState } from 'react';
import axios from 'axios';
import { FaPhone, FaUser, FaEnvelope } from 'react-icons/fa';

const EmailForm = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: 'post',
      url: 'https://getform.io/f/319389d3-8a1a-474e-b38c-4506e1e367b6',
      data: new FormData(form),
    })
      .then((r) => {
        handleServerResponse(true, 'Thanks!', form);
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };

  const formFields = [
    {
      fieldId: 'name',
      placeholder: 'Your name',
      Icon: FaUser,
      Tag: 'Input',
    },
    {
      fieldId: 'phone',
      placeholder: 'Your phone number',
      Icon: FaPhone,
    },
    {
      fieldId: 'email',
      placeholder: 'Your email',
      Icon: FaEnvelope,
    },
  ];
  return (
    <div className='section has-background-info'>
      <div className='container'>
        <div className='columns is-centered'>
          <div className='column box is-6'>
            <div className='columns is-centered'>
              <div className='column is-12'>
                <div className='section'>
                  <h2 className='title is-2'>
                    Send us a confidential message and we get back to you as
                    soon as possible{' '}
                  </h2>
                </div>
              </div>
            </div>

            <div className='columns is-centered'>
              <div className='column is-10'>
                <form onSubmit={handleOnSubmit}>
                  {formFields.map((i, idx) => (
                    <div key={idx} className='field'>
                      <label className='label' htmlFor={i.fieldId}>
                        Name
                      </label>
                      <div className='control has-icons-left'>
                        <input
                          className='input'
                          required='required'
                          id={i.fieldId}
                          type='text'
                          name={i.fieldId}
                          placeholder={i.placeholder}
                        />
                        <span className='icon is-small is-left'>
                          <i.Icon />
                        </span>
                      </div>
                    </div>
                  ))}

                  <div className='field'>
                    <label className='label'>Enquiry</label>
                    <div className='control has-icons-left'>
                      <textarea
                        className='textarea'
                        placeholder='How can we help you?'
                        type='text'
                      />
                    </div>
                  </div>

                  <div className='field is-grouped'>
                    <div className='control'>
                      <button
                        type='submit'
                        className='button is-link is-large mb-6'
                        disabled={serverState.submitting}
                      >
                        Submit Enquiry
                      </button>
                    </div>
                  </div>
                  {serverState.status && (
                    <p className={!serverState.status.ok ? 'errorMsg' : ''}>
                      {serverState.status.msg}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailForm;
