import React, { Component } from 'react'
import BasicRenderPropsSharing from './BasicRenderPropsSharing'
import ClickCounter from './ClickCounter'
import CouterComponent from './CouterComponent'
import HoverCounter from './HoverCounter'

class ParentRenderProps extends Component {

    methodToChild = () => {
        return "Returning and rendering a data from a parent component method to child component"
    }
    render() {
        return (
            <div>
                <BasicRenderPropsSharing 
                    name="Sneghan" 
                    method = {this.methodToChild }
                    method2 = { () => { return "Kannan"} }
                    method3 = { () => "Kannan" }
                    method4 = { (loggedIn) => loggedIn.toLowerCase() == "loggedin" ? "Welcome User" : "welcome Guest"} 
                    render = { () => { return "Returning from Render Method" }}>
                </BasicRenderPropsSharing>

                {/* <ClickCounter />
                <HoverCounter /> */}

                {/* <! -- Render Props -->  */}
                <CouterComponent 
                    render={ 
                        (count, incrementCount) => { 
                            return <ClickCounter count={count} incrementCount = {incrementCount} ></ClickCounter>
                        }
                    }>
                </CouterComponent>

                <CouterComponent 
                    render={ 
                        (count, incrementCount) => { 
                            return <HoverCounter count={count} incrementCount = {incrementCount} ></HoverCounter>
                        }
                    }>
                </CouterComponent>

                {/* <!-- Render using Children --> */}

                <CouterComponent> 
                        {
                            (count, incrementCount) => { 
                                return <ClickCounter count={count} incrementCount = {incrementCount} ></ClickCounter>
                            }
                        }
                </CouterComponent>

                <CouterComponent>
                        {(count, incrementCount) => (
                            <HoverCounter count={count} incrementCount = {incrementCount} ></HoverCounter>
                        )}
                </CouterComponent>

            </div>
        )
    }
}

export default ParentRenderProps
