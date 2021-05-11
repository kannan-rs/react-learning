import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export class PortalComp extends Component {
    render() {
        return ReactDOM.createPortal(
            <div>
                Rendering under portal component     
            </div>,
            document.getElementById("portal-root")
        )
    }
}

export default PortalComp
