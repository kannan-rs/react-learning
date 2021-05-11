import React, {useState, useEffect} from 'react'
import axios from 'axios'

function ApiCallsUsingEffects() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then( response => {
            console.log(response.data)
            setPosts(response.data)
        })
        .catch( error => {
            console.log("Some Thing went wrong")
        })
        return () => {
            
        }
    }, [])
    // https://jsonplaceholder.typicode.com/posts
    // https://jsonplaceholder.typicode.com/posts/1
    return (
        <div>
            <ul>
            {
                posts.map( (post) => <li key={post.id} >{post.title}</li>)
            }
            </ul>
        </div>
    )
}

export default ApiCallsUsingEffects
