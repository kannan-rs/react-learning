import React, { Component } from 'react'

class ConditionRender extends Component {
    state = {
        elementOne: false,
        elementTwo: true,
        isLoggedIn: true
    }

    
    

    render() {
        let domElement = <div><h2>Conditional Rendering</h2>
        <h3> Has 3 approach + Shorthand, Uncommeent Each Block for Understanding</h3>
        <h3> Since all condition has RETURN statement, so cannot be enabled at once</h3>
        </div>


        // Approach #1 (RETURN in IF statement itself)
        /*
        let approach1 = <h4>Approach #1  - Direct return inside the If statement</h4>
        if( this.state.elementOne ) {
            return <div>{domElement}{approach1} Element #1 display</div>
        }
        if( this.state.elementTwo ) {
            return <div>{domElement}{approach1}Element #2 display</div>
        }
        */



        // Approach #2 (Element Variable method)
        /*
        let elements
        let approach2 = <h4>Approach #2 - If statement defines the element and return at the end</h4>
        if( this.state.elementOne ) {
            elements = <div>{domElement}{approach2}Element #1 display</div>
        }
        if( this.state.elementTwo ) {
            elements = <div>{domElement}{approach2}Element #2 display</div>
        }

        return <div>{elements}</div>
        */


        // Approach #3
        let approach2 = <h4>Approach #3 - Return has condition as Unari operator and return based on condition</h4>
        return ( this.state.isLoggedIn ? <div>{domElement}{approach2} is logged In User</div> : <div>{domElement}{approach2} is Guest User</div>)

        //Short hand
        /*
        let shortHand = <div><h4>ShortHand Operator - Used for simple validation and Rendering</h4></div>
        return ( this.state.isLoggedIn && <div>{domElement}{shortHand} user logged In</div>)
        */
    }
}

export default ConditionRender
