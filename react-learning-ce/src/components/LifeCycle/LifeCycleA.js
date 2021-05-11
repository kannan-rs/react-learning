import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Kannan",
            lifeCycle: "-- Parent Comp mount --"
        }
        console.log(this.state.lifeCycle)
        console.log("Lifecycle A - Constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycle A - getDetivedStateFromProps");
        return null;
    }

    componentDidMount() {
        console.log("LifeCycle A - componentDidMount")
    }

    shouldComponentUpdate() {
        console.log("LifeCycle A - shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifeCycle A - getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate() {
        console.log("LifeCycle A - componentDidUpdate")
    }

    changeState = () => {
        this.setState(
            {
                name: "updated",
                lifeCycle: "-- Parent Comp update --"
            }
        )
    }

    render() {
        console.log("Lifecycle A -  Render")
        return (
            <div>
                <div> Parent - Life Cycle - A - Check {this.state.name} </div>
                <button onClick={this.changeState}> Update </button>
                <LifeCycleB />
            </div>
        )
    }

}

export default LifeCycleA
