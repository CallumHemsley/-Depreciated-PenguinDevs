import auth0 from 'auth0-js';
import {history} from '../store/configureStore';

export default class Auth {
    constructor() {
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
    }

    requestedScopes = 'openid profile read:messages write:messages';

    auth0 = new auth0.WebAuth({
        domain: 'penguindevs.eu.auth0.com',
        clientID: 'npUUguUiNi7EYwyEAR48pc8OpK1HqNPa',
        redirectUri: 'http://penguindevs.xyz/callback',
        //redirectUri: 'http://localhost:5000/callback',
        audience: 'https://penguindevs.eu.auth0.com/userinfo',
        responseType: 'token id_token',
        scope: this.requestedScopes
    });

    login() {
        this.auth0.authorize();
    }

    handleAuthentication() {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
              this.setSession(authResult);
              history.replace('/');
            } else if (err) {
              history.replace('/');
              console.log(err);
            }
          }); 
    }

    setSession(authResult) {
        const scopes = authResult.scope || this.requestedScopes || '';
        const authid = 'npUUguUiNi7EYwyEAR48pc8OpK1HqNPa'
        // Set the time that the access token will expire at
        let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        localStorage.setItem('scopes', JSON.stringify(scopes));
        // navigate to the home route
        history.replace('/');
    }

    userHasScopes(scopes){
        const grantedScopes = JSON.parse(localStorage.getItem('scopes')).split(' ');
        return scopes.every(scope => grantedScopes.includes(scope));
    }

    logout() {
        // Clear access token and ID token from local storage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // navigate to the home route
        history.replace('/');
    }

    isAuthenticated() {
        // Check whether the current time is past the 
        // access token's expiry time
        let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }
}































































/* import auth0 from 'auth0-js';
import decode from 'jwt-decode';
import {history} from '../store/configureStore';
const ID_TOKEN_KEY = 'id_token';
const ACCESS_TOKEN_KEY = 'access_token';

const CLIENT_ID = 'npUUguUiNi7EYwyEAR48pc8OpK1HqNPa';
const CLIENT_DOMAIN = 'penguindevs.eu.auth0.com';
const REDIRECT = 'http://localhost:5000/callback';
const SCOPE = 'full:access';
const AUDIENCE = 'http://localhost:5000';

var auth = new auth0.WebAuth({
    clientID: CLIENT_ID,
    domain: CLIENT_DOMAIN
});

export function login() {
    auth.authorize({
        responseType: 'token id_token',
        redirectUri: REDIRECT,
        audience: AUDIENCE,
        scope: SCOPE
    });
}

export function logout() {
    clearIdToken();
    clearAccessToken();
    history.push('/');
}

export function requireAuth(nextState, replace){
    if(!isLoggedIn()) {
        replace({pathname: '/'});
    }
}

export function getIdToken(){
    return localStorage.getItem(ID_TOKEN_KEY);
}

export function getAccessToken() {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
}
  
function clearIdToken() {
    localStorage.removeItem(ID_TOKEN_KEY);
}

function clearAccessToken() {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
}

//helper function to allow extraction of access and id tokens.
function getParameterByName(name) {
    let match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

//Get and store access token in local storage.
export function setAccessToken() {
    let accessToken = getParameterByName('access_token');
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
}

export function setIdToken() {
    let idToken = getParameterByName('id_token');
    localStorage.setItem(ID_TOKEN_KEY, idToken);
}

export function isLoggedIn() {
    const idToken = getIdToken();
    return !!idToken && !isTokenExpired(idToken);
}

function getTokenExpirationDate(encodedToken) {
    const token = decode(encodedToken);
    if (!token.exp) { return null; }
  
    const date = new Date(0);
    date.setUTCSeconds(token.exp);
  
    return date;
}

function isTokenExpired(token) {
    const expirationDate = getTokenExpirationDate(token);
    return expirationDate < new Date();
} */