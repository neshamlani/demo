import React from 'react';
import MediaQuery from 'react-responsive';
import Header from './Header';
import Banner from './Banner';
import Details from './Details';
import './App.css';

const App = () => {

  return (
    <div className='root'>
      <Banner />
      <Header />
      <MediaQuery maxWidth={600}>
        <Details isMobile />
      </MediaQuery>
      <MediaQuery minWidth={600}>
        <Details />
      </MediaQuery>
    </div>
  )
}

export default App;