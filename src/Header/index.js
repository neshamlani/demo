import React, { useState } from 'react';
import MediaQuery from 'react-responsive';
import ToolBar from '../ToolBar';
import Drawer from '../Drawer';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div>
      <MediaQuery maxWidth={600}>
        <ToolBar open={() => setIsDrawerOpen(!isDrawerOpen)} />
        <Drawer open={isDrawerOpen} toggle={() => setIsDrawerOpen(!isDrawerOpen)} />
      </MediaQuery>
      <MediaQuery minWidth={600}>
        <ToolBar />
      </MediaQuery>
    </div>
  )
}

export default Header;