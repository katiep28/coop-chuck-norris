import React from 'react';
import './App.css';
import RandomJoke from './components/RandomJoke';


const axios = require('axios');

class App extends React.Component {

  state = {
    jokeData : [],
    jokeValues: []
  }

  getRandomJoke = () => {

    
    axios.get('http://api.icndb.com/jokes/random?exclude=[explicit]')
      .then((response) => {
console.log(response);

        this.setState({
          jokeData: response.data,
          jokeValues : response.data.value
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  render() {

    return (
      <div>
        <div className="row">
          <div className="col-12 col-lg-12">
            <h1>Chuck Norris Jokes</h1>
          </div>
        </div>
        <br/>
        <br/>
        <div className="row">
          <div className="col-4 col-lg-4">      
            <RandomJoke
                  getRandomJokeFunc={this.getRandomJoke}
                  key="1" /> 
          </div>
          <div className="col-8 col-lg-8"> 
            <h3>  {this.state.jokeValues.joke}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
