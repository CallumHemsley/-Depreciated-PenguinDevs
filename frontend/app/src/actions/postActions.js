import * as actionTypes from './types';
import moment from 'moment';
//Use axios to make http request
import Axios from 'axios';
//API URL
var apiUrl = "http://localhost:3000/posts";
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
    return(dispatch) => {
        return Axios({
            method: 'put',
            url: (apiUrl + '/' + post.id),
            data: {
                id: post.id,
                title: post.title,
                category: post.category,
                excerpt: post.excerpt,
                body: post.body
            }
        })
            .then(response => {
                //dispatch async action.
                dispatch(putPostByIdSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    }
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
    console.log(post.image);
    console.log(post.title);
    var date = moment().format('MMMM Do, YYYY');
    return (dispatch) => {
        return Axios({
            method: 'post',
            url: apiUrl,
            data: {
                //id: post.id,
                title: post.title,
                category: post.category,
                image: post.image,
                excerpt: post.excerpt,
                body: post.body,
                date: String(date)
            }
        })
            .then(response => {
                //dispatch async action.
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