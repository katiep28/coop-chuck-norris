import React from 'react';

class NameSearch extends React.Component {
    state = {
        firstName : "",
        secondName : ""
    }

    handleKeyPress = (e) => {

        if (e.key === 'Enter') {
            this.checkName();
        }
    }
    onButtonPress =() => {
        if (!this.checkName()){
            return;
        }

        this.props.getJokeWithNameFunc(this.state.firstName, this.state.secondName);
        
    }
    checkName = () => {
        if (this.state.firstName === "") {
            alert("ERROR: You must enter a First Name");
            return false;
        }
        if (this.state.secondName === ""){
            alert("ERROR: You must enter a Second Name");
            return false;
        }
        return true;
        
    }
    updateName = (event) => {
        if (event.target.id === "firstNameId"){
          this.setState({ firstName: event.target.value })
        }
        if (event.target.id === "secondNameId"){
            this.setState({ secondName: event.target.value })
          }
    }

    render() {
        return (
            <div>
            <div className="row">
                <div className="col-4 col-lg-4" >
                    <input
                        id="firstNameId"
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="First Name" style={{ height: "40px" }}
                        onKeyPress={this.handleKeyPress}
                        value={this.state.firstName}
                        onChange={this.updateName} />
                </div>
                <div className="col-4 col-lg-4" >
                    <input
                        id="secondNameId"
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Second Name" style={{ height: "40px" }}
                        onKeyPress={this.handleKeyPress}
                        value={this.state.secondName}
                        onChange={this.updateName} />
                </div>
                <div className="col-2 col-lg-2">
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
