import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import '../css/SideBar.css';

class PostForm extends Component  {
    onImageDrop(files) {
        console.log(files);
        var photoInput = files[0];
        console.log(photoInput);
        this.props.handleImageChange(photoInput);
    }
    render() {
        let titleInput, bodyInput, categoryInput, excerptInput = null;
        return (
            <form className="contact-form" onSubmit={e => {
                e.preventDefault();
                //Assemble data into an object.
                var input = {
                    title: titleInput.value,
                    //image: imageInput.value,
                    category: categoryInput.value,
                    body: bodyInput.value,
                    excerpt: excerptInput.value,
    
                };
                //Call method from parent component to handle submit
                this.props.submitPost();
                //reset form.
                e.target.reset();
            }}>
                <div>
                    <label>Title: </label>
                    <div>
                        <input type="text"
                        value={this.props.valueTitle}
                        onChange={this.props.handleTitleChange}
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
                        value={this.props.valueCategory}
                        onChange={this.props.handleCategoryChange}
                        name="category"
                        ref={node => categoryInput = node}
                        />
                    </div>
                </div>
                <br/>
                <div>
                    <label>Image: </label>
                    <div>
                        <Dropzone
                            multiple={false}
                            accept="image/*"
                            //value={this.props.valueImage}
                            //ref={node => imageInput = node}
                            onDrop={this.onImageDrop.bind(this)}>
                            <p>Drop an image or click to upload</p>
                        </Dropzone>
                    </div>
                <br/>
                <div>
                    <label>Excerpt: </label>
                    <div>
                        <input type="text"
                        value={this.props.valueExcerpt}
                        onChange={this.props.handleExcerptChange}
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
                        value={this.props.valueBody}
                        onChange={this.props.handleBodyChange}
                        name="body"
                        ref={node => bodyInput = node}
                        />
                    </div>
                </div>
                <button
                class="btn mt-4">Submit
                </button>
                </div>
            </form>
          );
    }
}

PostForm.PropTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string
}

PostForm.defaultprops = {
    value: ''
}

export default PostForm;