// ./src/components/common/NavBar.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '../../utils/auth-wrapper';
import '../css/clear.css';
import '../css/common.css';
import '../css/sm-clean.css';
import '../css/SideBar.css';
import '../css/froala_blocks.css';
import WritePost from './WritePost';


const GateWrite = () => {  
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    return (
        <div id="content" className="site-content">
            {
                ( isAuthenticated ) ? <WritePost/>: 'Not authenticated.' 
            }
        </div>
        );
}
export default GateWrite; 