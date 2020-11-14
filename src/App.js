import React from 'react';
import MediaQuery from 'react-responsive';
import Header from './Header';
import Banner from './Banner';
import Details from './Details';

const App = () => {

  return (
    <div>
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