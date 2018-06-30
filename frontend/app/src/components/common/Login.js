// ./src/components/common/NavBar.js
import React, { Component } from 'react';
import AuthService from '../../utils/AuthService';
import '../css/clear.css';
import '../css/common.css';
import '../css/sm-clean.css';
import '../css/SideBar.css';
import '../css/froala_blocks.css';

const auth = new AuthService();

class Login extends Component  {

    render() {
        const { isAuthenticated } = auth;
        return (
            <div id="content" className="site-content">
                {
                    (isAuthenticated()) ? ( 
                        <a className="nav-link" href="/">You're logged in. Go to home.</a> 
                    ) : 
                    ( 
                        <div>
                            {auth.login()}
                        </div>
                    )
                }
            </div>
          );
    }
}
export default Login; 