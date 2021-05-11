import React, { Component } from 'react'
import axios from 'axios'

class GetListFromAPI extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            posts : [], 
            errorMsg : ""
        }
    }

    componentDidMount = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then( response => {
            this.setState({
                posts : response.data
            })
            console.log(this.state.postsList)
        })
        .catch( error => {
            this.setState({
                errorMsg : "Error Retriving data"
            })
        })
    }
    
    render() {
        const { posts, errorMsg } = this.state
        return (
            <React.Fragment>
                <div>
                    <h2> List of post from "POSTS" API</h2>
                    {
                        posts.length ? posts.map ( post => { return <div key={ post.id } > { post.title } </div>}) : <div>No post at this moment</div>
                    }
                </div>

                <div> { errorMsg ? errorMsg : ""} </div>
            </React.Fragment>
        )
    }
}

export default GetListFromAPI
