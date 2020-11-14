import React, { Fragment } from 'react';
import MediaQuery from 'react-responsive';
import Desktop from './Desktop';
import Mobile from './Mobile';

const Details = () => {
  return (
    <Fragment>
      <MediaQuery maxWidth={600}>
        <Mobile />
      </MediaQuery>
      <MediaQuery minWidth={600}>
        <Desktop />
      </MediaQuery>
    </Fragment>
  )
}

export default Details;