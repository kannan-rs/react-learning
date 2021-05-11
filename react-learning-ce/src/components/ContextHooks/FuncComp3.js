import React, {useContext} from 'react'
import {ContextCluster, ContextUser} from './ContextHooksParent'

function FuncComp3() {
    const cluster = useContext(ContextCluster)
    const user = useContext(ContextUser)

    return (
        <div>
            I am Comp #3 nested under Parent {'>'} Comp #1 {`>`} comp #2,

            <div>Customer '<b>{user}</b>' from cluster - '<b>{cluster}</b>', all this values are get using context hooks</div>
        </div>
    )
}

export default FuncComp3
