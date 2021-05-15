import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetchingOnce() {

    const postIntialState = {}
    const loadingInitialStte = true
    const errorInitialState = ""

    const [loading, setLoading] = useState(loadingInitialStte)
    const [post, setPost] = useState(postIntialState)
    const [error, setError] = useState(errorInitialState)

    useEffect(() => {
        // Load API Call
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then( (response ) => {
            setTimeout(() => {
                setPost(response.data)
                setLoading(!loadingInitialStte)
            }, 2000)
            
        })
        .catch(e => {
            setError("Some thing went Wrong")
            setPost(postIntialState)
            setLoading(!loadingInitialStte)
        })
        return () => {
        }
    }, [])

    return (
        <div>
            <h2> Data Fecth from API using HOOKS "useState and UseEffects"</h2>
            { loading && error === "" ? "Loading" : post.title }
            {error }
        </div>
    )
}

export default DataFetchingOnce
