import '../css/common.css';
import '../css/sm-clean.css';
import '../css/SideBar.css';
import '../css/froala_blocks.css';
import '../css/clear.css';
import React from 'react';
import {connect} from 'react-redux';
import * as postActions from '../../actions/postActions';
import DisqusThread from '../post/Disqus';
import ReactMarkdown from 'react-markdown';
class PostDetailsPage extends React.Component {
    componentDidMount(){
        this.props.fetchPostById(this.props.match.params.number).then((post) => {
            var img = document.createElement('img');
            img.src = 'data:image/jpeg;base64,' + btoa(this.props.post.image);
            document.body.appendChild(img);
        })
        .catch(err => console.log("Axios err: ", err));
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
                            <img src={"data:;base64," + this.props.post.image} alt="blogpost"/>
                            {/* <ImageLoader file={this.props.post.image} alt='some text'/> */}
                        </div>
                        <div className="entry-content">
                            <div className="content-wrap content-660 center-relative">
                                <ReactMarkdown
                                    source={this.props.post.body}
                                    renderers={{code: CodeRenderer}} />
                            </div>
                        </div>
                        <div className="clear"></div>
                    </article>
                    <DisqusThread
                        id={this.props.post.id}
                        title={this.props.post.title}
                        path="/blog/123-disquss-integration"
                        />
                </div>
            </div>
        );
    }
}

const DefaultCodeRenderer = ReactMarkdown.renderers.code

const CodeRenderer = props => {
  return <div id="code"><DefaultCodeRenderer {...props} /></div>
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