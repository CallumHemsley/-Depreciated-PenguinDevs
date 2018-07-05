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
            <header className="blog-header">
              <h1 className="blog-title">Penguin Devs</h1>
              <h2 clasName="blog-description"> I'm a Software Developer from England. This website is about my thoughts and my projects. </h2>
            </header>
            <Posts/>
        </div>
    </div>
  );
};

export default HomePage; 