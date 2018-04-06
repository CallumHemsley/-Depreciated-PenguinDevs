import React from  'react';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import AuthService from '../../utils/AuthService';
import * as postActions from '../../actions/postActions';
import ReactMarkdown from 'react-markdown'; 

const auth = new AuthService();

const initialSource = `
# Live demo
`

class WritePost extends React.Component{
    constructor(props){
        super(props); //pass props back to parent.
        this.handleMarkdownChange = this.handleMarkdownChange.bind(this);
        this.state = {
          markdownSrc: initialSource,
        };
    }

    handleMarkdownChange(evt){
      this.setState({markdownSrc: evt.target.value})
    }
    submitPost(input){
        this.props.addPost(input);
    }
    render() {
      const { isAuthenticated } = auth;
      //return JSX
      return(
        <div class="container">
          <h3> New Post </h3>
          <PostForm value={this.state.markdownSrc} onChange={this.handleMarkdownChange} submitPost={this.submitPost.bind(this)} />
          <ReactMarkdown
            source={this.state.markdownSrc} />
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
      addPost: post => dispatch(postActions.createPost(post))
    }
  };
  //Connect to put everything together.
  export default connect(mapStateToProps, mapDispatchToProps)(WritePost);