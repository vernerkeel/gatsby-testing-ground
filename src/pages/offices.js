import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Map from '../components/map/Map';

const OfficesPage = () => {
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
              <span>All offices</span>
            </a>
          </li>
          <li>
            <a>
              <span>Salford HQ</span>
            </a>
          </li>
          <li>
            <a>
              <span>Manchester</span>
            </a>
          </li>
          <li>
            <Link to={'/london'}>
              <span>London</span>
            </Link>
          </li>
          <li>
            <a>
              <span>Birmingham</span>
            </a>
          </li>
          <li>
            <a>
              <span>Leeds</span>
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default OfficesPage;
