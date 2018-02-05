import React from 'react';

const PostDetails = ({post}) => {
    return (
        <div>
            <div>
                <a href="/">
                    <img src="http://placehold.it/200/450" alt="placeholder"/>
                </a>
            </div>
            <div>
                <h4 className="media-heading">{post.title}</h4>
                <ul>
                    <li><stron>Description: </stron> post.description</li>
                    <li><stron>Posted at: </stron> post.postedAt</li>
                    <li><stron>Body: </stron> {post.body}</li>
                    <br/>
                </ul>
            </div>
        </div>
    );
};

export default PostDetails;