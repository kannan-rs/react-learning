import React, { Component } from 'react'
import { ClusterConsumer } from './context2'
import { UserConsumer } from './userContext'

class MultiContextConsumer extends Component {
    render() {
        return (
            <ClusterConsumer>
                {
                    (cluster) => (
                        <UserConsumer>
                            {
                                (user) => (
                                    <div>
                                        <div>Data from 1st Context - Cluster is - "{cluster}" </div>
                                        <div>Data from 2st Context - User is - "{user}" </div>
                                    </div>
                                )
                            }
                        </UserConsumer>
                    )
                }
            </ClusterConsumer>
        )
    }
}

export default MultiContextConsumer
