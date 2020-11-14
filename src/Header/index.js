import React from 'react';
import MediaQuery from 'react-responsive';
import Desktop from './Desktop';
import Mobile from './Mobile'

const Header = () => {

  return (
    <div>
      <MediaQuery maxWidth={600}>
        <Mobile />
      </MediaQuery>
      <MediaQuery minWidth={600}>
        <Desktop />
      </MediaQuery>
    </div>
  )
}

export default Header;