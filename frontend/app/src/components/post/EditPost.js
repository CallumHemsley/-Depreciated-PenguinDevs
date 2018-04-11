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


class EditPost extends React.Component {
    constructor(props){
        super(props);
        this.handleMarkdownChange = this.handleMarkdownChange.bind(this);
		this.state = {
            title: '',
            category: '',
			markdownSrc: ''
        }; 
    }
    componentDidMount(){
        this.props.fetchPostById(this.props.match.params.number)
            .then((post) => {
                if (this.props.post.title != undefined){
                    this.setState({
                        title: this.props.post.title,
                        markdownSrc: this.props.post.body,
                        category: this.props.post.category
                    })
                }
            })
            .catch(err => console.log("Axios err: ", err));
    }
    //componentDidMount(){
      //  if (this.props.post.title != undefined){
        //    this.setState({
          //      title: this.props.post.title,
            //    markdownSrc: this.props.post.body,
              //  category: this.props.post.category
            //})
       // }
    //}
    handleMarkdownChange(evt){
        console.log(evt.target.value);
        this.setState(
            {
                markdownSrc: evt.target.value,
            })
    }


	submitPost(input){
        this.props.editPost(input);
    }
    render(){
        return (
            <div id="content" className="site-content center-relative">
                {this.props.post.title}
                <PostForm valueTitle={this.state.title} valueCategory={this.state.category} valueBody={this.state.markdownSrc} onChange={this.handleMarkdownChange} submitPost={this.submitPost.bind(this)} />
                <ReactMarkdown
                    source={this.state.markdownSrc} />
            </div>  
        );
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
        fetchPostById: postId => dispatch(postActions.fetchPostById(postId))
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
			markdownSrc: ''
        };
    }
    getPostWithId(){
        this.props.fetchPostById(this.props.match.params.number);
        this.setState({title: this.props.post.title});
        this.setState({category: this.props.post.category});
        this.setState({markdownSrc: this.props.post.body});
    }
    componentDidMount(){
        this.getPostWithId();
        //this.setState({markdownSrc: this.props.post.body});
        //onsole.log(this.props.post.body);
    }
    handleMarkdownChange(evt){
		this.setState({markdownSrc: evt.target.value})
	}

	submitPost(input){
        this.props.editPost(input);
    }
	  
    render(){
        return (
            <div id="content" className="site-content center-relative">
				<PostForm value={this.state.markdownSrc} onChange={this.handleMarkdownChange} submitPost={this.submitPost.bind(this)} />
				<ReactMarkdown
            		source={this.state.markdownSrc} />
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

