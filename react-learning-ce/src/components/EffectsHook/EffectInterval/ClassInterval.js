import React, { Component } from 'react'

class ClassInterval extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }

    componentDidMount = () => {
        this.interval = setInterval(this.tick, 1000)
    }

    tick = () => {
        console.log("Comp Class - Interval Running")
        this.setState(
            {count: this.state.count + 1}
        )
    }

    componentWillUnmount = () => {
        clearInterval(this.interval)
    }
    
    render() {
        const { count } = this.state
        return (
            <div>
                <h2>Class Comp - Count Using Interval { count }</h2>
            </div>
        )
    }
}

export default ClassInterval
