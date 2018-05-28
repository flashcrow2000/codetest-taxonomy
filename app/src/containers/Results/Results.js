import React from 'react';
import './Results.css';

const Results = (props) => {
    return props.category.length > 0 ? 
        <div className='result'> Category is {props.category[0].label}</div>
        :
        null
}
 
export default Results;