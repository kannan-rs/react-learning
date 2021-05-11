import React from 'react'

// Step #1: Create User Context
const userContext = React.createContext("Context Default Name as Kannan")

// By default it contains 2 method PROVIDE and CONSUMER

const UserProvider = userContext.Provider
const UserConsumer = userContext.Consumer

export {UserProvider, UserConsumer}
export default userContext