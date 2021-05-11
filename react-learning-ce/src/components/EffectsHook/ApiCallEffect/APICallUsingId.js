import React, {useState, useEffect} from 'react'
import axios from 'axios'

function APICallUsingId() {

    const [posts, setPosts] = useState([])
    const [post, setPost] = useState({})
    const [userId, setUserId] =  useState(0)
    const [getDataForId, setDataForId] = useState(1)

    useEffect(() => {
        
        if(!getDataForId) {
            //axios.get(`https://jsonplaceholder.typicode.com/posts/${getDataForId}`)
            axios.get(`https://jsonplaceholder.typicode.com/posts/`)
            .then( response => {
                console.log(response.data)
                setPosts(response.data)
            })
            .catch( error => {
                console.log("Some Thing went wrong")
            })
            return () => {
                
            }
        } else {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${getDataForId}`)
            //axios.get(`https://jsonplaceholder.typicode.com/posts/`)
            .then( response => {
                console.log(response)
                setPost(response.data)
                setPosts([])
            })
            .catch( error => {
                console.log("Some Thing went wrong")
            })
            return () => {
                
            }
        }
    }, [getDataForId])
    
    return (
        <div>
            <h2> Get POSTs Data For a Give ID</h2>
            Enter Post ID: <input type="text" value={ userId } onChange={ (e) => setUserId(e.target.value) } />
            <button onClick = { () => setDataForId(userId)}> Get Data for ID {userId} </button>
            
            { posts.length ? <React.Fragment>
                <ul>
                {
                    posts.length && posts.map( (post) => <li key={post.id} >{post.title}</li>)
                }
                </ul>
            </React.Fragment> : null
            }
            {
                post ? <React.Fragment><div key={post.id} >{`POSTID - ${post.id}, POST-TITLE -  ${post.title}` }</div></React.Fragment> : null
            }
            
        </div>
    )
}

export default APICallUsingId