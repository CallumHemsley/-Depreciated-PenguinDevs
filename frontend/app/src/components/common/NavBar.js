// ./src/components/common/NavBar.js
import React from 'react';
import '../css/clear.css';
import '../css/common.css';
import '../css/sm-clean.css';
import '../css/SideBar.css';
import '../css/froala_blocks.css';
const NavBar = () => {
  return (
    <div id="content" className="site-content">
        <header>
            <div className="container">
                <nav className="navbar navbar-expand-md no-gutters">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav2" aria-controls="navbarNav2" aria-expanded="true" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
        
                    <div className="col-4 col-md-2 text-right text-md-center order-lg-6">
                        <a href="/">
                            <img src="http://icooon-mono.com/i/icon_14423/icon_144230_256.png" height="30" alt="something not this lmao"/>
                            Penguin Devs
                        </a>
                    </div>
        
                    <div className="collapse navbar-collapse col-12 col-md-5 order-lg-1" id="navbarNav2">
                        <ul className="navbar-nav col-5">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/posts">Posts</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact</a>
                        </li>
                        </ul>
                    </div>
        
                    <ul className="navbar-nav justify-content-end col-sm-5 order-lg-12 d-none d-md-flex">
                        <li className="nav-item">
                        <a className="nav-link" href="https://www.froala.com"><i className="fa fa-twitter"></i></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="https://www.froala.com"><i className="fa fa-github"></i></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="https://www.froala.com"><i className="fa fa-slack"></i></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    </div>
  );
};

export default NavBar; 