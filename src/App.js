import React from 'react';
import logo from './logo.svg';
import './App.css';
import RandomJoke from './components/RandomJoke';


const axios = require('axios');

class App extends React.Component {

  state = {
  }
  render() {

    return (
      <div>
        <div className="row">
          <div className="col-12 col-lg-12">
            <h1>Chuck Norris Jokes</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-6 col-lg-6">
            <RandomJoke/>
                  {/* searchCocktailFunc={this.searchCocktailByName}
                  showRecipeFunc={this.showRecipe}
                  key="0" /> */}
          </div>
          <div className="col-6 col-lg-6">
          </div>
        </div>
      </div>
    );
  }
}

export default App;
