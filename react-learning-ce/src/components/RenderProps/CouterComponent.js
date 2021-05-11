import React, { Component } from 'react'

// Container Component
export class CouterComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    incrementCount = () => {
        this.setState((prevState) => {
            return { count: prevState.count + 1 } 
        })
    }

    render() {
        if( this.props.render) {
            return (
                <React.Fragment>
                    Using Props Render - {this.props.render(this.state.count, this.incrementCount)}
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    Using Props Children - {this.props.children(this.state.count, this.incrementCount)}
                </React.Fragment>
            )
        }
    }
}

export default CouterComponent
