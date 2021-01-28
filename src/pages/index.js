import * as React from 'react';
import Layout from '../components/Layout';
import Map from '../components/map/Map';
import { Marker, Popup } from 'react-leaflet';

const IndexPage = () => {
  const mapOptions = {
    center: [53.510302, -2.33581],
  };
  return (
    <>
      <Layout>
        <div className='section'>
          <div className='container'>
            <div className='content'>
              <h1 className='title'>This is Home</h1>
            </div>
          </div>
        </div>
        <div className='section'>
          <div className='container'>
            <Map {...mapOptions}>
              <Marker position={[53.510302, -2.33581]}></Marker>
              <Marker position={[53.510302, -1.335001]}></Marker>
              <Marker position={[53.510302, -3.335001]}></Marker>
            </Map>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
