
import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

const initialState = {
    post: {},
    error: '',
    loading : true
}

const reducer = ( state, action ) => {
    switch (action.type) {
        case "FETCH_SUCCESS":
            return {
                post: action.payLoad,
                error: '',
                loading : false
            }
        
            case "FETCH_ERROR":
                return {
                    post: {},
                    error: 'Something went Wrong',
                    loading : false
                }
    
        default:
            break;
    }
}

function DataFecthEffectReducer() {

    const [postObj, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        // Load API Call
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then( (response ) => {
            // This timeout is just to show loading text at the 1st time
            setTimeout(() => {
                dispatch({ type: "FETCH_SUCCESS", payLoad: response.data})
            }, 2000)
            
        })
        .catch(e => {
            dispatch({ type: "FETCH_ERROR"})
        })
        return () => {
        }
    }, [])

    return (
        <div>
            <h2> Data Fecth from API using HOOKS "useReducer and UseEffects"</h2>
            { postObj.loading && postObj.error === "" ? "Loading" : postObj.post.title }
            { postObj.error }
        </div>
    )
}

export default DataFecthEffectReducer

