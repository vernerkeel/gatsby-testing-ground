import * as React from 'react';
import Layout from '../components/layout';
import Map from '../components/map/Map';

const OfficesPage = (mapSettings, position) => {
  return (
    <Layout>
      <div className='section'>
        <div className='container'>
          <div className='columns is-centered'>
            <div className='column is-7'>
              <div className='content has-text-centered is-medium'>
                <h1 className='title is-size-1 '>Get in touch</h1>
                <p>
                  We are happy to speak to you if you have a query, and either
                  have a free consultation on the phone or in person if
                  necessary. We offer services in the following legal areas:
                  Criminal, Motoring, Fraud and Business Crime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='section'>
        <div className='container'>
          <div className='columns is-centered'>
            <div className='column is-5'>
              <div className='box'></div>
            </div>
            <div className='column is-5'>
              <div className='box'></div>
            </div>
          </div>
        </div>
      </div>
      <div className='section'>
        <div className='container'>
          <div className='columns is-centered'>
            <div className='column is-7'>
              <div className='content has-text-centered is-medium'>
                <h1 className='title is-size-2 '>
                  Connect with one of our national offices
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='tabs is-centered is-boxed is-medium'>
        <ul>
          <li class='is-active'>
            <a>
              <span class='icon is-small'>
                <i class='fas fa-image' aria-hidden='true'></i>
              </span>
              <span>Pictures</span>
            </a>
          </li>
          <li>
            <a>
              <span class='icon is-small'>
                <i class='fas fa-music' aria-hidden='true'></i>
              </span>
              <span>Music</span>
            </a>
          </li>
          <li>
            <a>
              <span class='icon is-small'>
                <i class='fas fa-film' aria-hidden='true'></i>
              </span>
              <span>Videos</span>
            </a>
          </li>
          <li>
            <a>
              <span class='icon is-small'>
                <i class='far fa-file-alt' aria-hidden='true'></i>
              </span>
              <span>Documents</span>
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default OfficesPage;
