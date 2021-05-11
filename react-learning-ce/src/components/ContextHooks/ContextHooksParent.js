import React from 'react'
import FuncComp1 from './FuncComp1'

export const ContextCluster = new React.createContext("Cluster US")
export const ContextUser = new React.createContext("Kannan")

function ContextHooksParent() {
    return (
        <div>
            <h2> I am Parent - Setting the Context But not passing to any children </h2>
            <ContextCluster.Provider value="Cluster EMEA">
                <ContextUser.Provider value="Sneghan">
                    <FuncComp1 />
                </ContextUser.Provider>
            </ContextCluster.Provider>
        </div>
    )
}

export default ContextHooksParent
