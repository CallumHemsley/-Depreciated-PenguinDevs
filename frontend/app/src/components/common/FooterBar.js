// ./src/components/common/NavBar.js
import { Link } from 'react-router-dom';
import React from 'react';
import '../css/clear.css';
import '../css/common.css';
import '../css/sm-clean.css';
import '../css/SideBar.css';
import '../css/froala_blocks.css';

const FooterBar = () => {
  return (
    <div id="foot">
      <div id="content" className="site-content">
          <footer className="fdb-block footer-small">
            <div id="footMargin" className="container">
            <Link className="nav-link" to='/writepost'>
              <div className="contact">
               © 2018 Callum Hemsley 
              </div></Link>
              <div id="icon" className="col-12 mt-4 mt-md-0 text-center text-md-center">
                <a href="mailto:cthemsley@gmail.com"><i className="fa fa-envelope-o" aria-hidden="true"> </i></a>&nbsp;&nbsp;
                <a href="https://www.twitter.com/penguindevs"><i className="fa fa-twitter" aria-hidden="true"> </i></a>&nbsp;&nbsp;
                <a href="https://www.instagram.com/penguindevs"><i className="fa fa-instagram" aria-hidden="true"> </i></a>&nbsp;&nbsp;
              </div>
            </div>
          </footer>
      </div>
    </div>
  );
};

export default FooterBar; 