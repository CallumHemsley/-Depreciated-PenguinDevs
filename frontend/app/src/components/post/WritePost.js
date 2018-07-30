import React from  'react';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import * as postActions from '../../actions/postActions';
import ReactMarkdown from 'react-markdown'; 
import CodeBlock from './CodeBlock'




const initialSource = `
# Live demo
`

var postSuccess = false;
class WritePost extends React.Component{
    constructor(props){
        super(props); //pass props back to parent.
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleExcerptChange = this.handleExcerptChange.bind(this);
        //this.onImageDrop = this.onImageDrop.bind(this);
        this.state = {
            title: '',
            category: '',
            image: null,
            excerpt: '',
		    body: initialSource,
        };

    }
    handleImageChange(image){
        console.log(image);
        this.setState({
            image: image,
        })

    }
    handleBodyChange(evt){
        this.setState({
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
    handleExcerptChange(evt){
        this.setState(
            {
                excerpt: evt.target.value,
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
    submitPost(){
        this.props.addPost(this.state).then((post) => {
            postSuccess = true;
            
        })
        .catch(err => console.log("Axios err: ", err));
    }
    render() {
      //return JSX
      if (postSuccess === true) {
          return(
              <h1> Success. </h1>
          )
      }
      else {
        return(
            <div class="container">
            <h3> New Post </h3>
            <PostForm valueTitle={this.state.title}
                    valueCategory={this.state.category} 
                    valueBody={this.state.body}
                    valueExcerpt={this.state.excerpt}
                    valueImage={this.state.image}
                    handleTitleChange={this.handleTitleChange} 
                    handleBodyChange={this.handleBodyChange} 
                    handleImageChange={this.handleImageChange}
                    handleCategoryChange={this.handleCategoryChange} 
                    handleExcerptChange={this.handleExcerptChange}
                    submitPost={this.submitPost.bind(this)} />
            <hr/>
            <h1 className="entry-title"> {this.state.title} </h1>
            <ReactMarkdown
                source={this.state.body}
                renderers={{code: CodeBlock}} />
            </div>
        )
    }
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