import React from 'react';

class RandomJoke extends React.Component {
    state = {
       
    }

    onButtonPress = (event) => {

        this.props.getRandomJokeFunc();
    }

    render() {
        return (
            <div className="col-12 col-lg-12">
                <button type="button"
                    className="btn btn-success"
                    onClick={this.onButtonPress}>
                    Get Random Joke
                </button>
            </div>
        );
    }
}

export default RandomJoke;
