import {compose, pipe } from 'loadsh/fp'

function Currying() {
    // Currying
    /**
     * Pass "SOME" params to parent function and "SOME" parms to the return function from HOF
     * Helps in multiple ways
    */

    // Example
    console.log("")
    console.log("")
    console.log("=== Currying ===")
    let input = "     JavaScript    "

    const trim = str => str.trim()
    // const wrapInDiv = (type, str) => `<${type}>${str}</${type}>`
    const toLowerCase = str => str.toLowerCase()

    // Wont work as WrapInDiv need 2 params
    // const transform = pipe(trim, toLowerCase, wrapInDiv)

    // Wont work as WrapInDiv can take only function as argument 
    // const wrapInDiv = (type, str) => `<${type}>${str}</${type}>`
    // const transform = pipe(trim, toLowerCase, wrapInDiv("DIV"))

    // Solved as Follows 
    // Refer Currying.js
    const wrapInDiv = type => str => `<${type}>${str}</${type}>`
    const transform = pipe(trim, toLowerCase, wrapInDiv("DIV"))
    console.log(transform(input))

    const transform2 = pipe(trim, toLowerCase, wrapInDiv("SPAN"))
    console.log(transform2(input))


}

export default Currying