import React from 'react';
export const FormError = ({formErrors}) => 
    <div> 
        {Object.keys(formErrors).map((fieldName, i) => {
            if(formErrors[fieldName].length > 0){
                return (
                    <p key={i}> {fieldName} {formErrors[fieldName]}</p>
                )
            }
            else {
                return '';
            }
        })}
    </div> //Iterate through all form validation errors and display them.