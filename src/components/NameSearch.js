import React from 'react';

class NameSearch extends React.Component {
    state = {
    
    }

    onButtonPress = (event) => {

        this.props.getRandomJokeFunc();

    }

    render() {
        return (
            <div visibility="hidden">
<h1 visibility="hidden"> HELLO</h1>
             
        </div>
        );
    }
}

export default NameSearch;
