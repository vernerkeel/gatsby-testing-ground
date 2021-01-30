import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import { FaPhone, FaVideo, FaComments, FaEnvelope } from 'react-icons/fa';
import { ImArrowDownRight } from 'react-icons/im';
import { IconContext } from 'react-icons';

const LondonPage = () => {
  const mapOptions = {
    center: [53.510302, -2.33581],
  };

  const contactOptions = [
    {
      Icon: FaPhone,
      iconSize: `2.5rem`,
      iconColor: 'has-text-danger',
      btnColor: 'is-danger',
      headline: `Call to a Lawyer`,
      description: `Talk to a specialist lawyer today. Talk to a specialist lawyer today.`,
      btnText: `0161 794 0088`,
    },
    {
      Icon: FaEnvelope,
      iconSize: `2.5rem`,
      iconColor: 'has-text-primary',
      btnColor: 'is-primary',
      headline: `Send us an email`,
      description: `Send us a confidential message and we get back to you as soon as possible.`,
      btnText: `Send email`,
    },
    {
      Icon: FaVideo,
      iconSize: `2.5rem`,
      iconColor: 'has-text-danger',
      btnColor: 'is-danger',
      headline: `Meet over video`,
      description: `Meet our specialist lawyers over Zoom. Arrange a meeting today.`,
      btnText: `Arrange conference`,
    },
  ];

  return (
    <Layout>
      <div className='section mb-0'>
        <div className='container'>
          <div className='columns is-centered'>
            <div className='column is-7'>
              <div className='content has-text-centered is-medium'>
                <h1 className='title is-size-1 '>London Office</h1>
                <p>
                  We are happy to speak to you if you have a query, and either
                  have a free consultation on the phone or in person if
                  necessary. We offer services in the following legal areas:
                  Criminal, Motoring, Fraud and Business Crime.
                </p>
              </div>
            </div>
          </div>
          <hr className='mb-0' />
        </div>
      </div>
      <div className='section mt-0'>
        <div className='container'>
          <div class='tile is-ancestor'>
            <div class='tile is-12 is-parent'>
              {contactOptions.map((i, idx) => (
                <div key={idx} className='tile is-parent'>
                  <article class='tile is-child box'>
                    <div className='content has-text-centered is-medium'>
                      {' '}
                      <IconContext.Provider value={{ size: i.iconSize }}>
                        <span
                          className={['icon', 'is-large', i.iconColor].join(
                            ' '
                          )}
                        >
                          <i.Icon />
                        </span>
                      </IconContext.Provider>
                      <h3 className='mt-1 mb-2 title is-3'>{i.headline}</h3>
                      <p>{i.description}</p>
                      <button
                        className={['button', 'is-large', i.btnColor].join(' ')}
                      >
                        {i.btnText}
                      </button>
                    </div>
                  </article>
                </div>
              ))}

              <div class='tile is-parent'>
                <article class='tile is-child box'>
                  <div className='content has-text-centered is-medium'>
                    {' '}
                    <IconContext.Provider value={{ size: '2.5rem' }}>
                      <span className='icon has-text-primary is-large'>
                        <FaComments />
                      </span>
                    </IconContext.Provider>
                    <h2 className='mt-1 mb-2 title is-3'>
                      Have a chat with us
                    </h2>
                    <p>
                      Click on a chat icon at the bottom right to start a
                      confidential chat with us.
                    </p>
                    <IconContext.Provider value={{ size: '2.5rem' }}>
                      <span className='icon has-text-primary is-large'>
                        <ImArrowDownRight />
                      </span>
                    </IconContext.Provider>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LondonPage;
