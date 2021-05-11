import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError:false
        }
    }
    
    static getDerivedStateFromError( error ) {
        // Return State
        return {
            hasError: true
        }
    }

    componentDidCatch (error, info) {
        console.log("error")
        console.log(error)
        console.log("info")
        console.log(info)
    }



    render() {
        if(this.state.hasError) {
            return <h1> Has Some thing goes Wrong </h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary