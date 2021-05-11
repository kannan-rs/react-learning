import React from 'react'
import PropTypes from 'prop-types'

const withCounter = (WrappedComponent, incNumber) => {
    class WithCounter extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                counter: 0
            }
        }

        incrementCounter = () => {
            this.setState((prevState) => {
                return {counter: prevState.counter + incNumber}
            })
        }

        render() {
            return (
                <WrappedComponent counter = {this.state.counter} incrementCounter = {this.incrementCounter} {...this.props} />
            )
        }
    }

    return WithCounter
}

export default withCounter