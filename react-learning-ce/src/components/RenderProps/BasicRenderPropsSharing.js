import React, { Component } from 'react'

class BasicRenderPropsSharing extends Component {
    render() {
        return (
            <div>
                This Value comes from parent property - { this.props.name } - method - "{ this.props.method() }" <br />
                data sent by a function with in params of parent component call - { this.props.method2() } <br />
                data sent by a function with in params of parent component call - { this.props.method3() } <br />
                Data changed based on the params passed from CHILD to Parent Function Call - {this.props.method4('not') } <br />
                <br />
                Function Call with Name Render --{'>'} {this.props.render()}
            </div>
        )
    }
}

export default BasicRenderPropsSharing
