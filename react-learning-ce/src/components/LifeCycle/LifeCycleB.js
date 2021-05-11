import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Kannan - Child",
            lifeCycle: "-- Child Comp mount --"
        }
        console.log(this.state.lifeCycle)
        console.log("Lifecycle B - Constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycle B - getDetivedStateFromProps");
        return null;
    }

    componentDidMount() {
        console.log("LifeCycle B - componentDidMount")
    }

    shouldComponentUpdate() {
        console.log("LifeCycle B - shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifeCycle B - getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate() {
        console.log("LifeCycle B - componentDidUpdate")
    }

    changeState = () => {
        this.setState({
            name: "Comp B updated",
            lifeCycle: "-- Child Comp update --"

        })
    }

    render() {
        console.log("Lifecycle B -  Render")
        return (
            <div>
                <div> Life Cycle - B - Child Check {this.state.name} </div>
                <button onClick={this.changeState}> Update Comp B </button>
            </div>
        )
    }

}

export default LifeCycleB
