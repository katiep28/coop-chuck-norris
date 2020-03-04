import React from 'react';

class NameSearch extends React.Component {
    state = {
        name : "",
        specialCharacters : ["1","2","3","4","5","6","7","8","9","0",
                             "!","@","£","$","%","^","&","*","(",")","_","+","=",
                             "{","}","[","]",";",":","|","<",">",",",".",
                             "\"","'","`","~","±","§","€"]
    }

    handleKeyPress = (e) => {

        if (e.key === 'Enter') {
            this.onButtonPress();
        }
    }
    onButtonPress =() => {
        if (!this.checkName()){
            return;
        }
        const indexOfSpace = this.state.name.indexOf(" ");

        const firstName = this.state.name.substring(0, indexOfSpace);
        const secondName = this.state.name.substring((indexOfSpace+1),this.state.name.length);

        this.props.getJokeWithNameFunc(firstName, secondName);
        
    }
    checkName = () => {
        if (this.state.name === "") {
            alert("ERROR: You must enter a name");
            return false;
        }
        if (this.state.name.indexOf(" ") === -1){
            alert("ERROR: You must enter a first name and a second name separted with a space");
            return false;
        }

        if (!this.checkSpecialCharacters()) {
            alert("ERROR: Your name must not contain numbers or special characters");
            return false;
        }
        return true;
    }

    checkSpecialCharacters = () => {

        let error = true;

        this.state.specialCharacters.map(char => {
            if (this.state.name.indexOf(char) > -1){
                error = false;
                return error;
            }
        });
        if (error === true) {
            return true;
        }
        else{
            return false;
        }
    }
    updateName = (event) => {
        if (event.target.id === "nameId"){
          this.setState({ name: event.target.value })
        }
    }

    render() {
        return (
            <div>
            <div className="row padding-left">
                <div className="col-6 col-lg-10" >
                    <input
                        id="nameId"
                        type="text"
                        className="form-control"
                        placeholder="Enter a first name and a second name" style={{ height: "40px"}}
                        onKeyPress={this.handleKeyPress}
                        value={this.state.name}
                        onChange={this.updateName} />
                </div>
                
                <div className="col-12 col-lg-2">
                    <button type="button"
                      style={{ height: "40px"}}
                      className="btn btn-success"
                      onClick={this.onButtonPress}>
                      Search
                    </button>
                </div>
            </div>

            </div>
        );
    }
}

export default NameSearch;
