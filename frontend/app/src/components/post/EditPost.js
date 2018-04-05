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
			markdownSrc: this.props.post.body
        };
        console.log(this.props.post.body);
	}
    componentDidMount(){
        this.props.fetchPostById(this.props.match.params.number);
        this.setState({markdownSrc: this.props.post.body})
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

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);