import React from 'react';
import {connect} from 'react-redux';
import * as postActions from '../../actions/postActions';
import Disqus from '../post/Disqus';
import ReactMarkdown from 'react-markdown';
import '../css/clear.css';
import '../css/common.css';
import '../css/sm-clean.css';
import '../css/SideBar.css';
import '../css/froala_blocks.css';

class PostDetailsPage extends React.Component {
    componentDidMount(){
        this.props.fetchPostById(this.props.match.params.number);
    }
    handleNewComment(comment) {
		console.log(comment.text);
	}
    render(){
        return (
            <div id="content" className="site-content center-relative">
                <div className="single-post-wrapper content-1070 center-relative">
                    <article className="center-relative">
                        <h1 className="entry-title">
                            {this.props.post.title}
                        </h1>
                        <div className="post-info content-660 center-relative">
                            <div className="cat-links">
                                <ul>
                                    <li><a href="/">{this.props.post.category}</a></li>
                                </ul>
                            </div>
                            <div className="entry-date published">{this.props.post.date}</div>
                            <div className="clear"></div>
                        </div>
                        <div className="post-full-width">
                            <img src="http://placehold.it/200/450" alt=""/>
                        </div>
                        <div className="entry-content">
                            <div className="content-wrap content-660 center-relative">
                                <ReactMarkdown
                                    source={this.props.post.body} />
                            </div>
                        </div>
                        <div className="clear"></div>
                    </article>
                    <Disqus shortname="test" title="title" url="penguindevs"/>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailsPage);