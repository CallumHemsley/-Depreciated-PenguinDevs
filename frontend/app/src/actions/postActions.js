import * as actionTypes from './types';
import moment from 'moment';
//Use axios to make http request
import Axios from 'axios';
import { push } from 'connected-react-router'
//API URL
if (process.env.NODE_ENV == 'production') {
    var apiUrl = "https://penguindevs.xyz/users/posts";
}
else {
    var apiUrl = "http://localhost/users/posts";
}

//Sync action
export const fetchPostByIdSuccess = (post) => {
    return {
        type: actionTypes.FETCH_POST_BY_ID_SUCCESS,
        post
    }
};

//Async action
export const fetchPostById = (postId) => {
    return (dispatch) => {
        return Axios.get(apiUrl + '/' + postId)
            .then(response => {
                dispatch(fetchPostByIdSuccess(response.data));
            })
            .catch(error => {
                throw(error);
            });
    };
};


//Sync action
export const putPostById = (post) => {
    const fd = new FormData();
    var scopes = localStorage.getItem('scopes');
    fd.append('id', post.id);
    fd.append('title', post.title);
    fd.append('category', post.category);
    fd.append('excerpt', post.excerpt);
    fd.append('body', post.body);
    fd.append('image', post.image);
    fd.append('tokenid', scopes);
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    };
    return (dispatch) => {
        return Axios.put(
            (apiUrl + '/' + post.id),
                fd,
                config
        )
            .then(response => {
                //dispatch async action.
                dispatch(push('/posts'))
                dispatch(createPostSuccess(response.data)) //is it even reaching this now? FIND OUT.
            })
            .catch(error => {
                throw(error);
            });
    };
}

//async
export const putPostByIdSuccess = (post) => {
    return {
        type: 'PUT_POST_SUCCESS',
        post
    }
};

//Sync action
export const fetchPostsSuccess = (posts) => {
    return { //_SUCCESS used to keep track of state of actions
        type: 'FETCH_POSTS_SUCCESS',
        posts
    }
};

//Async action
export const fetchPosts = () => {
    //Return dispatcher function
    //dispatches action at a later time.
    return (dispatch) => {

        //Return a promise (think try/catch but for async)
        return Axios.get(apiUrl)
            .then(response => {
                //Dispatch another action to consume data.
                dispatch(fetchPostsSuccess(response.data))
            })
            //If error, throw error pretty much.
            .catch(error => {
                throw(error);
            });
    };
};

export const createPostSuccess = (post) => {
    return {
        type: 'CREATE_POST_SUCCESS',
        post
    }
};
//thunk updates the data on the server and return new post. For sake of UX, just append the post to existing posts state.
export const createPost = (post) => {
    //console.log(post.image);
    //console.log(post.title);
    var scopes = localStorage.getItem('scopes');
    var date = moment().format('MMMM Do, YYYY');
    const fd = new FormData();
    fd.append('title', post.title);
    fd.append('category', post.category);
    fd.append('excerpt', post.excerpt);
    fd.append('body', post.body);
    fd.append('date', String(date));
    fd.append('image', post.image);
    fd.append('tokenid', scopes);
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    };
    console.log(fd.get('image'));
    return (dispatch) => {
        return Axios.post(
            apiUrl, fd, config
        )
            .then(response => {
                //dispatch async action.
                dispatch(push('/posts'))
                dispatch(createPostSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};




//OLD CODE BELOW
// export const addPost = (post) => {
//     return {
//         type: 'ADD_POST',

//         //payload
//         post: post
//     }
// };