import React, { Component } from 'react'
import { DefaultConsumer } from './context2'
import userContext, { UserConsumer } from './userContext'

class Comp2 extends Component {
    render() {
        return (
            <div>
                Comp #2 - Display Some thing from parent Context
                {/* Step #3 - Consume the Context value */}
                <UserConsumer>
                    {
                        (name) => { 
                            return <div>{name}</div>
                        }
                    }
                </UserConsumer>

                Component #2 access context directly - { this.context }
            </div>
        )
    }
}

Comp2.contextType = userContext

export default Comp2
