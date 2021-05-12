import {compose, pipe } from 'loadsh/fp'

function FunctionComposition() {
    // Function Composition
    /**
     * Break it down inot small fuctions for any functionality and wrap togther
     * Advantage
     *  1. Easy to understand
     *  2. Easy to test
     */

    console.log("")
    console.log("")
    console.log("===Function Composition===")
    // Example (Trim and wrap text)
    // Regular way of doing
        let input = "     JavaScript    "
        let output = '<div>'+input.trim()+'</div>'

    // Function Composition way of doing
        const trim = str => str.trim()
        const wrapInDiv = str => `<div>${str}</div>`
        const toLowerCase = str => str.toLowerCase()

        const result = wrapInDiv(toLowerCase(trim(input)))
        // Issues,
        // 1. Need to read from right to left
        // 2. Too many paranthisis
        //          ||
        //          ||
        //          \/
        //      Solution (as follows)
        // Using Lodash
        // install using "npm install loadash"
     


    const transform = compose(wrapInDiv, toLowerCase, trim)
    console.log(transform(input))

    // Way #2
    const transform1 = pipe(trim, toLowerCase, wrapInDiv)
    console.log(transform1(input))
}

export default FunctionComposition