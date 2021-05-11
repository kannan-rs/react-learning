import React from 'react'

const ContextCluster = new React.createContext("Cluster US")

const ClusterProvider = ContextCluster.Provider
const ClusterConsumer = ContextCluster.Consumer


export { ClusterProvider, ClusterConsumer}
export default ContextCluster