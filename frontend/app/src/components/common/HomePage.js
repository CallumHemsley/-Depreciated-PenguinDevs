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
              <div className="user"></div>
              <h2 className="blog-description"> I'm a Software Developer and university student from England.<br/> This website is about my thoughts and projects. </h2>
            </header>
            <div id="footMargin"/>
            <br/>
            <br/>
            <Posts/>
        </div>
    </div>
  );
};

export default HomePage; 