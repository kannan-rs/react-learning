import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            description: "",
            intrested: "Vue"
        }
    }

    handleUserNameChanged = ( event ) => {
        this.setState({
            userName: event.target.value
        })
    }

    handleDescriptionChanged = ( event ) => {
        this.setState({
            description: event.target.value
        })
    }

    handleIntrestChanged = ( event ) => {
        this.setState({
            intrested: event.target.value
        })
    }

    handleSubmit = ( event ) => {
        alert(`${this.state.userName} -> ${this.state.description} -> ${this.state.intrested}`)
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    User Name:
                    <input type="text" name="userName" value={this.state.userName} onChange={this.handleUserNameChanged} />
                </div>
                <div>
                    Description:
                    <textarea type="text" name="description" value={this.state.description} onChange={this.handleDescriptionChanged} />
                </div>
                <div>
                    Interested on:
                    <select type="text" name="intrest" value={this.state.intrested} onChange={this.handleIntrestChanged} >
                        <option value="React">React</option>
                        <option value="Vue">Vue</option>
                        <option value="Angular">Angular</option>
                    </select>
                </div>
                <button type="submit">Submit Form</button>
            </form>
            
        )
    }
}

export default Form
