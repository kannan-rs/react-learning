import React, { Component } from 'react'

class ConditionRender extends Component {
    state = {
        elementOne: false,
        elementTwo: true,
        isLoggedIn: true
    }

    render() {
        //Short hand
        return ( this.state.isLoggedIn && <div>user logged In</div>)
        
        
        
        // Approach #3
        //return ( this.state.isLoggedIn ? <div> is logged In User</div> : <div> is Guest User</div>)



        // Approach #2 (Element Variable method)

        // let elements
        // if( this.state.elementOne ) {
        //     elements = <div>Element #1 display</div>
        // }
        // if( this.state.elementTwo ) {
        //     elements = <div>Element #2 display</div>
        // }

        // return <div>{elements}</div>




        // Approach #1 (RETURN in IF statement itself)

        // if( this.state.elementOne ) {
        //     return <div>Element #1 display</div>
        // }
        // if( this.state.elementTwo ) {
        //     return <div>Element #2 display</div>
        // }
    }
}

export default ConditionRender
