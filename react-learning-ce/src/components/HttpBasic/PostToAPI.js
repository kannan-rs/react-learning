import React, { Component } from 'react'
import axios from 'axios'

class PostToAPI extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userId: "",
             title: "",
             body: ""
        }
    }

    handleChangeEvent = (e) => {
        this.setState({
             [e.target.name] : e.target.value
        })
    }

    submitPost = (e) => {
        e.preventDefault();
        console.log(this.state)

        axios.post("https://jsonplaceholder.typicode.com/posts")
        .then( response => {
            console.log( response )
        })
        .catch ( error => {
            console.log( error )
        })
    }
    
    render() {
        const {userId, name, body } = this.state
        return (
            <div>
                <form onSubmit={ this.submitPost }>
                    <div>User ID: <input name="userId" value={ userId } onChange={ this.handleChangeEvent }></input></div>

                    <div>Title: <input name="title" value={ name } onChange={ this.handleChangeEvent }></input></div>

                    <div>Body: <input name="body" value= { body } onChange={ this.handleChangeEvent }></input></div>

                    <button name="submit">Submit Post</button>
                </form>
            </div>
        )
    }
}

export default PostToAPI
