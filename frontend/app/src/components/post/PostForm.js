import React from 'react';
import PropTypes from 'prop-types';
import '../css/SideBar.css';
const PostForm = (props) => {
    //collector variables.
    let titleInput, bodyInput, categoryInput, excerptInput = null;
    return(
        <form className="contact-form" onSubmit={e => {
            e.preventDefault();
            //Assemble data into an object.
            var input = {
                title: titleInput.value,
                category: categoryInput.value,
                body: bodyInput.value,
                excerpt: excerptInput.value,

            };
            //Call method from parent component to handle submit
            props.submitPost(input);
            //reset form.
            e.target.reset();
        }}>
            <div>
                <label>Title: </label>
                <div>
                    <input type="text"
                    value={props.valueTitle}
                    onChange={props.handleTitleChange}
                    name="title"
                    ref={node => titleInput = node}
                    />
                </div>
            </div>
            <br/>
            <div>
                <label>Category: </label>
                <div>
                    <input type="text"
                    value={props.valueCategory}
                    onChange={props.handleCategoryChange}
                    name="category"
                    ref={node => categoryInput = node}
                    />
                </div>
            </div>
            <br/>
            <div>
                <label>Excerpt: </label>
                <div>
                    <input type="text"
                    value={props.valueExcerpt}
                    onChange={props.handleExcerptChange}
                    name="category"
                    ref={node => excerptInput = node}
                    />
                </div>
            </div>
            <br/>
            <div>
                <label>Body of text: </label>
                <div>
                    <textarea type="text"
                    value={props.valueBody}
                    onChange={props.handleBodyChange}
                    name="body"
                    ref={node => bodyInput = node}
                    />
                </div>
            </div>
            <button class="btn mt-4">Submit</button>
        
        </form>
    );
};

PostForm.PropTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string
}

PostForm.defaultprops = {
    value: ''
}

export default PostForm;