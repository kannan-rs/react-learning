import React from 'react'
import CounterFourCustomHooks from './CustomHooks1/CounterFourCustomHooks'
import CounterOne from './CustomHooks1/CounterOne'
import CounterThreeCustomHooks from './CustomHooks1/CounterThreeCustomHooks'
import CounterTwo from './CustomHooks1/CounterTwo'
import CounterOperation1 from './CustomHooks2/CounterOperation1'
import CounterOperation3Hooks from './CustomHooks2/CounterOperation3Hooks'
import CounterOperation4Hooks from './CustomHooks2/CounterOperation4Hooks'
import CounterOperation2 from './CustomHooks2/CountOperation2'
import UserForm from './CustomHooks3/UserForm'
import UserFormWithHooks from './CustomHooks3/UserFormWithHooks'

function CustomHookParent() {
    return (
        <div>
            <h2> Using Regular useEffects Following Components update DOC TITLE</h2>
            <CounterOne />
            <CounterTwo />
            <h2> Using Customer Hooks Following Components update DOC TITLE</h2>
            <CounterThreeCustomHooks />
            <CounterFourCustomHooks />
            <br/>
            <br/>
            <br/>
            <CounterOperation1 />
            <CounterOperation2 />
            <h2> useCounter - Custom Hooks</h2>
            <CounterOperation3Hooks />
            <CounterOperation4Hooks />

            <h2> useInput Hooks for Binding onchange and the value </h2>
            <UserForm />
            <UserFormWithHooks />
        </div>
    )
}

export default CustomHookParent
