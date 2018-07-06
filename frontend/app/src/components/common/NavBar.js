// ./src/components/common/NavBar.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../../utils/AuthService';
import '../css/clear.css';
import '../css/common.css';
import '../css/sm-clean.css';
import '../css/SideBar.css';
import '../css/froala_blocks.css';

const auth = new AuthService();

class NavBar extends Component  {
    login() {
        auth.login();
    }
    
    logout() {
        auth.logout();
    }

    render() {
        const { isAuthenticated } = auth;
        return (
            <div id="content" className="site-content">
                <header>
                    <div className="container">
                        <nav className="navbar navbar-expand-md no-gutters">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav2" aria-controls="navbarNav2" aria-expanded="true" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                
                            <div className="col-4 col-md-2 text-right text-md-center order-lg-6">
                                <Link to='/'>
                                    <img src="http://icooon-mono.com/i/icon_14423/icon_144230_256.png" height="30" alt="something not this lmao"/>
                                    Penguin Devs
                                </Link>
                            </div>
                
                            <div className="collapse navbar-collapse col-12 col-md-5 order-lg-1" id="navbarNav2">
                                <ul className="navbar-nav col-5">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    {
                                        ( isAuthenticated() ) ? <Link className="nav-link" to="/writepost">Write Post</Link> : '' 
                                    }
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/posts">Posts</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                                </ul>
                            </div>
                
                            <ul className="navbar-nav justify-content-end col-sm-5 order-lg-12 d-none d-md-flex">
                                <li className="nav-item">
                                <a className="nav-link" href="https://www.twitter.com/penguindevs"><i className="fa fa-twitter"></i></a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="https://www.github.com/callumhemsley"><i className="fa fa-github"></i></a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="https://www.slack.com"><i className="fa fa-slack"></i></a>
                                </li>
                                <li className="nav-item">
                                    {
                                        (isAuthenticated()) ? ( <button className="nav-link" onClick={this.logout.bind(this)}>Log out </button> ) : ( '' )
                                    }
                                </li>

                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
          );
    }
}
export default NavBar; 