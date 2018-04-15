import React from  'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AuthService from '../../utils/AuthService';

const auth = new AuthService();
class Posts extends React.Component{
  //constructor(props){
  //  super(props);
  //}
    // submitPost(input){
    //     this.props.addPost(input);
    // }
    
    render() {
      const { isAuthenticated } = auth;
      //return JSX, map method creates array with results of calling a provided function on every element in calling array.
      return(
          <div id="content" className="site-content">
            <div className="container">
              <div className="center-relative">
                <h3> Posts: </h3>
              </div>
              <ul>
                {this.props.posts.slice(0).reverse().map((b, i) => {
                  return(
                    <tr key={i}>
                      <article id="post-2" class="blog-item-holder">
                        <div className="entry-content relative">
                            <div className="content-1170 center-relative">
                                <h2 className="entry-title">
                                    <Link to={`/posts/${b.id}`}>{b.title}</Link>
                                </h2>
                                <div class="cat-links">
                                    <ul>
                                        <li>
                                            <Link to={`/postcategory/${b.category}`}>{b.category}</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="entry-date published">{b.date}</div>
                                <div className="excerpt">
                                    {b.excerpt}
                                </div>
                                <li>{ (isAuthenticated()) ? <Link to={`/editpost/${b.id}`}>Edit</Link> : '' } </li>
                                <div class="clear"></div>
                            </div>
                        </div>
                    </article>
                    </tr>
                  )
                })}
              </ul>
            </div>
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
    //addPost: post => dispatch(postActions.addPost(post))
  }
};
//Connect to put everything together.
export default connect(mapStateToProps, mapDispatchToProps)(Posts);