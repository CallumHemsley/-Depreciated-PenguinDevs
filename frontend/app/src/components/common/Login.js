// ./src/components/common/NavBar.js
import React from 'react';
import { useAuth0 } from '../../utils/auth-wrapper';
import '../css/clear.css';
import '../css/common.css';
import '../css/sm-clean.css';
import '../css/SideBar.css';
import '../css/froala_blocks.css';

//const auth = new AuthService();
const Login = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    return (
        <div id="content" className="site-content">
            {
                (isAuthenticated) ? ( 
                    <a className="nav-link" href="/">You're logged in. Go to home.</a> 
                ) : 
                ( 
                    <div>
                        <button
                            onClick={() =>
                                loginWithRedirect({})
                            }
                            >
                            Log in
                        </button>
                    </div>
                )
            }
        </div>
        );
};
export default Login; 