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
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.state = {
          title: '',
          category: '',
			    body: initialSource,
        };
    }

    handleBodyChange(evt){
      this.setState(
          {
              body: evt.target.value,
            })
    }
    handleTitleChange(evt){
        this.setState(
            {
                title: evt.target.value,
            }
        )
    }
    handleCategoryChange(evt){
        this.setState(
            {
                category: evt.target.value,
            }
        )
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
          <PostForm valueTitle={this.state.title}
                  valueCategory={this.state.category} 
                  valueBody={this.state.body}
                  handleTitleChange={this.handleTitleChange} 
                  handleBodyChange={this.handleBodyChange} 
                  handleCategoryChange={this.handleCategoryChange} 
                  submitPost={this.submitPost.bind(this)} />
          <ReactMarkdown
            source={this.state.body} />
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