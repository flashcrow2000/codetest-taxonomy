import React, { Component } from 'react';
// Use axios for http requests
import axios from 'axios';
import './URL.css';

class URL extends Component {
    // keep the website in the local state, for simplicity
    state = {
        website: ''
    }
    
    clickHandler = () => {
        // construct the POST obj
        const postObj = {
            url: this.state.website
        };
        
        axios.post('http://localhost:3535', postObj)
        .then(response => {
            this.props.categoryReceived(response.data);
        })
        .catch(error => {
            // in result we expect either one array of categories, or an error
            // object containing code and error
            this.props.categoryReceived({code: 400, error: error});
        });
        
        
    }

    render() { 
        return ( 
            <div className="container">
	            <div className="container__item">
			        <input type="text" className="form__field" placeholder="Website URL" 
                           value={this.state.website} 
                           onChange={(event) => this.setState({website: event.target.value})}/>
			        <button type="button" className="btn btn--primary btn--inside uppercase"
                            onClick={this.clickHandler}>Send</button>
	            </div>
            </div>
         )
    }
}
 
export default URL;