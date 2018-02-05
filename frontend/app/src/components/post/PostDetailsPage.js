import React from 'react';
import {connect} from 'react-redux';
import PostDetails from './PostDetails';
import * as postActions from '../../actions/postActions';

class PostDetailsPage extends React.Component {
    componentDidMount(){
        this.props.fetchPostById(this.props.match.params.number);
    }
    render(){
        return (
            <div>
                <h1>Post Details page. {this.props.match.params.number} </h1>
        {/*pass post prop down to PostDetails*/}
                <PostDetails post={this.props.post}/>
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
        fetchPostById: postId => dispatch(postActions.fetchPostById(postId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailsPage);