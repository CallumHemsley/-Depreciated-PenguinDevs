import React  from 'react';
import Routes from '../routes'
import SideBar from './common/NavBar';
import FooterBar from './common/FooterBar';
const Root = (props) => {
  return (
    <div>
      <SideBar/>
      {/* Each smaller components */}
      { Routes }
      {props.children}
      <FooterBar/>
    </div>
  );
};

export default Root;