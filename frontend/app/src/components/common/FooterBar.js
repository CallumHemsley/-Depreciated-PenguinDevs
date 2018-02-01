// ./src/components/common/NavBar.js
import React from 'react';
import '../css/clear.css';
import '../css/common.css';
import '../css/sm-clean.css';
import '../css/SideBar.css';
import '../css/froala_blocks.css';
const FooterBar = () => {
  return (
    <div>
        <footer className="fdb-block footer-small">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md-6">
                <ul className="nav justify-content-center justify-content-md-start">
                  <li className="nav-item">
                    <a className="nav-link active" href="https://www.froala.com">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://www.froala.com">Features</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://www.froala.com">Terms</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://www.froala.com">About</a>
                  </li>
                </ul>
              </div>
      
              <div className="col-12 col-md-6 mt-4 mt-md-0 text-center text-md-right">
                <a href="https://www.froala.com">/<i className="fa fa-twitter" aria-hidden="true"> </i></a>&nbsp;&nbsp;
                <a href="https://www.froala.com">/<i className="fa fa-facebook" aria-hidden="true"> </i></a>&nbsp;&nbsp;
                <a href="https://www.froala.com">/<i className="fa fa-instagram" aria-hidden="true"> </i></a>&nbsp;&nbsp;
                <a href="https://www.froala.com">/<i className="fa fa-pinterest" aria-hidden="true"> </i></a>&nbsp;&nbsp;
                <a href="https://www.froala.com">/<i className="fa fa-google" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
        </footer>
    </div>
  );
};

export default FooterBar; 