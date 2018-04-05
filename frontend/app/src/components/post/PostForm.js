import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import '../css/SideBar.css';
const PostForm = (props) => {
    //collector variables.
    let titleInput, bodyInput = null;
    return(
        <Formik
            initialValues={{
                title: '',
                body: '',
            }}
            validate={values => {
                let errors = {};
                if (!values.title) {
                    errors.title = 'Required';
                } 
                else if (values.title.length > 15) {
                    errors.title = 'Too long title';
                }
                return errors;
            }}
            render={({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
                <form onSubmit={e => {
                    e.preventDefault();
                    var input = {
                        title: titleInput.value,
                        body: bodyInput.value
                    }
                    props.submitPost(input);
                    e.target.reset();
                }}>
                    <input
                        type="title"
                        name="title"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.title} />
                </form>
            )}


        /**<form className="contact-form" onSubmit={e => {
            e.preventDefault();
            //Assemble data into an object.
            var input = {
                title: titleInput.value,
                body: bodyInput.value

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
                    name="title"
                    ref={node => titleInput = node}
                    />
                </div>
            </div>
            <br/>
            <div>
                <label>Body of text: </label>
                <div>
                    <textarea type="text"
                    value={props.value}
                    onChange={props.onChange}
                    name="title"
                    ref={node => bodyInput = node}
                    />
                </div>
            </div>
        
        </form>**/
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