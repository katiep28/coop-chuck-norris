import React from 'react';
import './App.css';
import RandomJoke from './components/RandomJoke';
import NameSearch from './components/NameSearch';


const axios = require('axios');

class App extends React.Component {

  state = {
    jokeData: [],
    jokeValues: [],
    display: false
  }

  getRandomJoke = () => {

    axios.get('http://api.icndb.com/jokes/random?exclude=[explicit]')
      .then((response) => {
        console.log(response);

        this.setState({
          jokeData: response.data,
          jokeValues: response.data.value
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  getJokeWithName =(firstName, secondName) => {
    
    axios.get('http://api.icndb.com/jokes/random?exclude=[explicit]?escape=javascript&firstName=' + firstName + 
              '&lastName=' + secondName)
    
    // axios.get('http://api.icndb.com/jokes/random?escape=javascript&firstName=John&lastName=Doe')
      .then((response) => {
        console.log(response);

        this.setState({
          jokeData: response.data,
          jokeValues: response.data.value,
          display: false
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  setVisibility = () => {

    this.setState({
      display: true
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
        <br />
        <br />
        <div className="row">
          <div className="col-2 col-lg-2">
            <RandomJoke
              getRandomJokeFunc={this.getRandomJoke}
              key="1" />
          </div>
 
          <div className="col-2 col-lg-2">
            <button type="button"
              style={{ height: "40px" }}
              className="btn btn-success"
              onClick={this.setVisibility}>
              Search Joke
            </button>
          </div>
          <div className="col-8 col-lg-8">
            {this.state.display &&
              <NameSearch
                display={this.state.display}
                getJokeWithNameFunc={this.getJokeWithName}
                key="2" />
            }
          </div>
        </div>
        <br/>
        <br/>
        <div className = "row">
          <div className="col-6 col-lg-6">
            <h3>  {this.state.jokeValues.joke}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
