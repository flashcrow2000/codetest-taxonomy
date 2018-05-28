import React, { Component } from 'react';
import Header from './components/Header/Header';
import URL from './components/URL/URL';
import Results from './containers/Results/Results';
import './App.css';

class App extends Component {

  state = {
    category: []
  }
  onCategoryReceived = (categ) => {
    console.log(categ);
    this.setState({category:categ});
  }
  render() {
    return (
      <div className="App">
        <Header />
        <URL categoryReceived={this.onCategoryReceived}/>
        <Results category={this.state.category}/>
      </div>
    );
  }
}

export default App;
