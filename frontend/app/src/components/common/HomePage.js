// ./src/components/common/HomePage.js
import React from 'react';
import Posts from '../post/Posts';
import '../css/clear.css';
import '../css/common.css';
import '../css/sm-clean.css';
import '../css/SideBar.css';
import '../css/froala_blocks.css';
import '../css/test.css';
const HomePage = () => {
  return (
    <div id="content" className="site-content">
        <div className="container">
            <div className="blog-holder">
                <Posts/>
            </div>
        </div>
    </div>
  );
};

export default HomePage; 