import * as actionTypes from '../actions/types';
//handle array of posts
export const postsReducer= (state = [], action) => {
    switch (action.type) {
      case actionTypes.CREATE_POST_SUCCESS:
      return [
        ...state, //Use "..." to pass the whole props object of state
        Object.assign({}, action.post)
      ];
      case actionTypes.FETCH_POSTS_SUCCESS:
            return action.posts;
      default:
            return state;
    }
  }; //Return the state as it is from server when action is dispatched.

//handle a single post:
export const postReducer = (state= [], action) => {
  switch(action.type){
    //handle fetch by id.
    case actionTypes.FETCH_POST_BY_ID_SUCCESS:
      return action.post;
    default:
      return state;
  }
};


//OLD CODE BELOW
// export  default (state = [], action) => {
//     switch (action.type){
//         //is action ADD_POST
//         case 'ADD_POST':
//             return [ //Create another array of data and update its content with previous state and add changes.
//                 ...state,
//                 Object.assign({}, action.post)
//             ];
//             //state.push(action.post); <--- CANT DO THIS BECAUSE MUTATION NOT creating another array like above
//         default:
//             return state;
//     }
// };