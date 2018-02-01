import React from  'react';
import { connect } from 'react-redux';

class Post extends React.Component{

    // submitPost(input){
    //     this.props.addPost(input);
    // }

    render() {

      //return JSX, map method creates array with results of calling a provided function on every element in calling array.
      return(
          <div>
            <h3> Posts: </h3>
            <ul>
              {this.props.posts.map((b, i) => <li key={i}>{b.title}</li>)}
            </ul>
          </div>
      )
    }
}
//State from store to props.
const mapStateToProps = (state, ownProps) => {
  return {
    //Now we can say this.props.posts
    posts: state.posts
  }
};

const mapDispatchToProps =(dispatch) => {
  return {//Can now say this.props.addPost
    //addPost: post => dispatch(postActions.addPost(post))
  }
};
//Connect to put everything together.
export default connect(mapStateToProps, mapDispatchToProps)(Post);