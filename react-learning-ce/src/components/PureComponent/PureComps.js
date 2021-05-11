import React, { PureComponent } from 'react'

class PureComps extends PureComponent {
    render() {
        console.log("------- Pur Comp Render --------")
        return (
            <div>
                It is Pure component - {this.props.name}
            </div>
        )
    }
}

export default PureComps
