import React from 'react';
import './Results.css';

const Results = (props) => {
    // if the category object has a code, then it's an error message
    const error = props.category.code;
    // if category has a length, then it's an Array and we can show the top element
    return error ? 
           <div className='result'> Server encountered an error: {props.category.error}</div>
           :
           props.category.length > 0 ? 
                <div className='result'> Category is: {props.category[0].label}</div>
                :
                null
}
 
export default Results;