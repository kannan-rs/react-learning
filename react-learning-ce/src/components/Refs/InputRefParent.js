import React, { Component } from 'react'
import CallBackRef from './CallBackRef'
import InputRefs from './InputRefs'

class InputRefParent extends Component {
    render() {
        return (
            <div>
                <InputRefs />
                <CallBackRef />
            </div>
        )
    }
}

export default InputRefParent
