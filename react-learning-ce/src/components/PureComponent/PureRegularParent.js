import React, { Component } from 'react'
import MemoComp from './MemoComp'
import PureComps from './PureComps'
import RegularComp from './RegularComp'

class PureRegularParent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "kannan"
        }
    }

    
    componentDidMount = () => {
        setInterval(() => {
            this.setState({
                name: "kannan"
            })
        }, 2000)
    }

    
    
    render() {
        console.log("--- Parent Rendered ---")
        return (
            <div>
                Parent Component
                <RegularComp name={ this.state.name } />
                <PureComps name= { this.state.name } />
                <MemoComp name= {this.state.name } />
            </div>
        )
    }
}

export default PureRegularParent
