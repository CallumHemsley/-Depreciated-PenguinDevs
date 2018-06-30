//Stores authentication credentials and redirects back to page in our app we want.
import { Component } from 'react';


class CallBack extends Component {
    componentDidMount(){ //Invoked after a component is mounted.
        //auth.setSession(); //Mounting means put the object into rendering.
        window.location.href = "/";
    }

    render() {
        return null;
    }
}

export default CallBack;