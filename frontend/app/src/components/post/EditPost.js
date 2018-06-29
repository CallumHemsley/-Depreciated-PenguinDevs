import React from 'react';
import {connect} from 'react-redux';
import * as postActions from '../../actions/postActions';
import Disqus from '../post/Disqus';
import PostForm from './PostForm';
import ReactMarkdown from 'react-markdown';
import '../css/clear.css';
import '../css/common.css';
import '../css/sm-clean.css';
import '../css/SideBar.css';
import '../css/froala_blocks.css';

var postSuccess = false;
class EditPost extends React.Component {
    constructor(props){
        super(props);
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleExcerptChange = this.handleExcerptChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
		this.state = {
            id: '',
            title: '',
            category: '',
            excerpt: '',
            body: '',
            image: null
        }; 
    }
    componentDidMount(){
        this.props.fetchPostById(this.props.match.params.number)
            .then((post) => {
                if (this.props.post.title != undefined){
                    this.setState({
                        id: this.props.post.id,
                        title: this.props.post.title,
                        body: this.props.post.body,
                        category: this.props.post.category,
                        excerpt: this.props.post.excerpt,
                    })
                }
            })
            .catch(err => console.log("Axios err: ", err));
    }
    //componentDidMount(){
      //  if (this.props.post.title != undefined){
        //    this.setState({
          //      title: this.props.post.title,
            //    body: this.props.post.body,
              //  category: this.props.post.category
            //})
       // }
    //}
    handleBodyChange(evt){
        console.log(evt.target.value);
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

    handleImageChange(image){
        this.setState({
            image: image,
        })
    }

	submitPost(input){
        this.props.editPost(this.state).then((post) => {
            postSuccess = true;
        })
        .catch(err => console.log("Axios err: ", err));;
        console.log("submitted")
    }
    render(){
        if (postSuccess === true) {
            return (
                <h1> success </h1>
            )
        }
        else {
            return (
                <div id="content" className="site-content center-relative">
                    {this.props.post.title}
                    <PostForm valueTitle={this.state.title}
                     valueCategory={this.state.category} 
                     valueBody={this.state.body} 
                     valueExcerpt={this.state.excerpt}
                     handleTitleChange={this.handleTitleChange} 
                     handleBodyChange={this.handleBodyChange} 
                     handleExcerptChange={this.handleExcerptChange}
                     handleCategoryChange={this.handleCategoryChange}
                     handleImageChange={this.handleImageChange} 
                     submitPost={this.submitPost.bind(this)} />
                    <ReactMarkdown
                        source={this.state.body} />
                </div>  
            );
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        post: state.post,
        initialValues: state.post
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        //Triger the ajax request we setup in actions.
        fetchPostById: postId => dispatch(postActions.fetchPostById(postId)),
		editPost: post => dispatch(postActions.putPostById(post))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);




















/* import React from 'react';
import {connect} from 'react-redux';
import * as postActions from '../../actions/postActions';
import Disqus from '../post/Disqus';
import PostForm from './PostForm';
import ReactMarkdown from 'react-markdown';
import '../css/clear.css';
import '../css/common.css';
import '../css/sm-clean.css';
import '../css/SideBar.css';
import '../css/froala_blocks.css';


class EditPost extends React.Component {
    constructor(props){
        super(props);
        this.getPostWithId = this.getPostWithId.bind(this);
        this.handleMarkdownChange = this.handleMarkdownChange.bind(this);
		this.state = {
            title: '',
            category: '',
			body: ''
        };
    }
    getPostWithId(){
        this.props.fetchPostById(this.props.match.params.number);
        this.setState({title: this.props.post.title});
        this.setState({category: this.props.post.category});
        this.setState({body: this.props.post.body});
    }
    componentDidMount(){
        this.getPostWithId();
        //this.setState({body: this.props.post.body});
        //onsole.log(this.props.post.body);
    }
    handleMarkdownChange(evt){
		this.setState({body: evt.target.value})
	}

	submitPost(input){
        this.props.editPost(input);
    }
	  
    render(){
        return (
            <div id="content" className="site-content center-relative">
				<PostForm value={this.state.body} onChange={this.handleMarkdownChange} submitPost={this.submitPost.bind(this)} />
				<ReactMarkdown
            		source={this.state.body} />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        post: state.post
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        //Triger the ajax request we setup in actions.
		fetchPostById: postId => dispatch(postActions.fetchPostById(postId)),
		editPost: post => dispatch(postActions.putPostById(post))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPost); */

