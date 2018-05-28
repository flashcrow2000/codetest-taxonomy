import React, { Component } from 'react';
import axios from 'axios';
import './URL.css';

class URL extends Component {

    state = {
        website: ''
    }
    
    clickHandler = () => {
        const postObj = {
            url: this.state.website
        };
        console.log('postObj:', postObj);
        axios.post('http://localhost:3535', postObj)
        .then(response => {
            this.props.categoryReceived(response.data);
        })
        .catch(error => console.log(error));
        
        
    }

    render() { 
        return ( 
            <div className="container">
	            <div className="container__item">
			        <input type="email" className="form__field" placeholder="Website URL" 
                           value={this.state.website} 
                           onChange={(event) => this.setState({website: event.target.value})}/>
			        <button type="button" className="btn btn--primary btn--inside uppercase"
                            onClick={this.clickHandler}>Send</button>
	            </div>
            </div>
            /*<div>
                <label className='website-label'>Enter a website to fetch its category:</label><br/>
                <input type="text" value={this.state.website} 
                onChange={(event) => this.setState({website: event.target.value})} /><br />
                <button onClick={this.clickHandler}>Get category</button>
            </div>*/
         )
    }
}
 
export default URL;