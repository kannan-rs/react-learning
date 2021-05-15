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
            <div>
                <h3> Create Form</h3>
                <h3>Set Form Elements Value from State </h3>
                <h3> Update state while element value change (During input Keypress or change)</h3>
                <h3> Form Submit EventHandler</h3>
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
            </div>
            
        )
    }
}

export default Form
