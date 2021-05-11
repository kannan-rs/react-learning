import React, { Component } from 'react'
import Comp1 from './Comp1'
import Comp3 from './Comp3'
import { ClusterProvider } from './context2'
import MultiContextConsumer from './MultiContextConsumer'
import { UserProvider } from './userContext'
// import { DefaltProvider } from './contextDefault'

// 1. Create Context
// 2. Provide Context Value
// 3. Consume the Context Value

class ContextParent extends Component {
    render() {
        return (
            <div>
                {/* Step #2 - Assign Provider and its value- All its child component consume provider */}
                Parent Component that holds Context and Comp #1 {">"} Comp #2
                
                <h2> Passing Default context value</h2>
                <Comp1 />

                <h2> Passing Params Value</h2>
                <UserProvider value="Context Params Kannan">
                    <Comp1 />
                </UserProvider>

                <h2>Using Static Value and Accessing Default</h2>
                <Comp3 />

                <h2>Using Static Value and Accessing Passed Context</h2>
                <UserProvider value="Context Params Kannan">
                    <Comp3 />
                </UserProvider>

                <h2> Multi Context Consumer as Default</h2>
                <MultiContextConsumer />

                <h2> Multi Context Consumer as params</h2>
                <ClusterProvider value="Cluster India">
                    <UserProvider value="Sneghan">
                        <MultiContextConsumer />
                    </UserProvider>
                </ClusterProvider>

                
            </div>
        )
    }
}

export default ContextParent
