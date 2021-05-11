import React, { Component } from 'react'
import ComponentRefChild from './ComponentRefChild'

class ComponentRef extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }

        this.componentRef = React.createRef();
    }

    clickhandler = () => {
        this.componentRef.current.focusInput()
    }
    
    render() {
        return (
            <div>
                <ComponentRefChild ref={ this.componentRef } />
                <button onClick={ this.clickhandler }>Focus</button>
            </div>
        )
    }
}

export default ComponentRef
