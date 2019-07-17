// ./src/components/common/HomePage.js
import React from 'react';
import {Helmet} from 'react-helmet';
import '../css/clear.css';
import '../css/common.css';
import '../css/sm-clean.css';
import '../css/SideBar.css';
import '../css/froala_blocks.css';
import '../css/test.css';
const Contact = () => {
  return (
    <div id="content" className="site-content center-relative">
        <Helmet>
          <title>PenguinDevs - Contact Page</title>
          <meta name="description" content="Here contains my social medias, etc to contact me." />
        </Helmet>
        <div className="single-post-wrapper content-1070 center-relative">
            <article className="center-relative">
                <div className="post-info content-660 center-relative">
                    <div className="cat-links">
                        <ul>
                            <li>Email: cthemsley@gmail.com</li>
                            <li>Github: CallumHemsley</li>
                            <li>Twitter: @PenguinDevs</li>
                            <li>Instagram: PenguinDevs</li>
                        </ul>
                    </div>
                    <div className="clear"></div>
                    <div className="clear"></div>
                </div>
                <div className="clear"></div>
            </article>
        </div>
    </div>
  );
};

export default Contact; 