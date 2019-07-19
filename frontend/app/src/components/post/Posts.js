import React from  'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAuth0 } from '../../utils/auth-wrapper';

function Posts(props){
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    //return JSX, map method creates array with results of calling a provided function on every element in calling array.
    return(
        <div id="content" className="site-content">
          <div className="container">
            {props.posts.slice(0,1).reverse().map((b, i) => {
                return(
                  <tr key={i}>
                    <article id="post-1" className="blog-item-holder featured-post">
                      <div className="entry-content relative">
                          <div>
                              <div class="cat-links">
                                  <ul id="catid">
                                      <li>
                                          <Link to={`/postcategory/${b.category}`}>{b.category}</Link>
                                      </li>
                                  </ul>
                              </div>
                              <div className="entry-date published">{b.date}</div>
                              <div className="views">  Views: {b.views}</div>
                              <h2 className="entry-title">
                                  <Link to={`/posts/${b.id}`}>{b.title}</Link>
                              </h2>
                              <div className="excerpt">
                                  {b.excerpt}
                              </div>
                              { (isAuthenticated) ? <Link to={`/editpost/${b.id}`}>Edit</Link> : '' }
                          </div>
                      </div>
                  </article>
                  </tr>
                )
              })}


              {props.posts.slice(1).reverse().map((b, i) => {
                return(
                  <tr key={i}>
                    <article id="post-2" class="blog-item-holder">
                      <div className="entry-content relative">
                          <div className="content-1170 center-relative">
                              <h2 className="entry-title">
                                  <Link to={`/posts/${b.id}`}>{b.title}</Link>
                              </h2>
                              <div class="cat-links">
                                  <ul id="catid">
                                      <li>
                                          <Link to={`/postcategory/${b.category}`}>{b.category}</Link>
                                      </li>
                                  </ul>
                              </div>
                              <div className="entry-date published">{b.date}</div>
                              <div className="views">Views: {b.views}</div>
                              <div className="excerpt">
                                  {b.excerpt}
                              </div>
                              { (isAuthenticated) ? <Link to={`/editpost/${b.id}`}>Edit</Link> : '' }
                          </div>
                      </div>
                  </article>
                  </tr>
                )
              })}
          </div>
        </div>
    )
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