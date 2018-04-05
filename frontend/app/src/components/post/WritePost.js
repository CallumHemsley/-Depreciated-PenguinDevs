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
          title: '',
          markdownSrc: initialSource,
          formErrors: {title: '', body: ''},
          titleValid: false,
          markdownSrcValid: false,
          formValid: false
        };
    }

    handleMarkdownChange(evt){
      this.setState({markdownSrc: evt.target.value})
    }

    handleUserInput = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      this.setState({[name]: value},
          () => { this.validateField(name, value)});
    }
    
    validateField(fieldName, value) {
      let fieldValidationErrors = this.state.formErrors;
      let titleValid = this.state.titleValid;
      let markdownSrcValid = this.state.markdownSrcValid;

      switch(fieldName) {
        case 'title':
          if (0 < value.length > 15){
            titleValid = true;
          }
          fieldValidationErrors.title = titleValid ? '' : ' is invalid';
          break;
        case 'markdownSrc':
          markdownSrcValid = true;
          fieldValidationErrors.markdownSrc = markdownSrcValid ? '' : ' is invalid';
          break;
        default:
          break;
      }

      this.setState({formErrors: fieldValidationErrors,
        titleValid: titleValid,
        markdownSrcValid: markdownSrcValid}, this.validateForm);
    }

    validateForm() {
      this.setState({formValid: this.state.titleValid && this.state.markdownSrcValid});
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
          <button class="btn mt-4">Submit</button>
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