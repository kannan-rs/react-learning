function HigherOrderFunctions() {
// Higher-Order Functions
/**
 * Function that takes 
 * 1. function as argument
 * 2. Return function as argument
 * 3. or both
 * 
 * Explanation: Instead of working with primitive data types, it goes higher and work/operate with functions internally.
 *  Hence it is called as Higher-Order Functions
 */

    // Examples
    console.log("");
    console.log("");
    console.log("=== Higher Order Functions ===")

    function sayHello() {
        // Returns a function
        return function() {
            return "Hello world!!"
        }
    }

    function sayHello2( sayHello ) {
        // FUnction as argument and retunrs a function
        sayHello()

        return sayHello
    }

    // Previously used HOF

    let numbers = [1, 2, 3]

    // Map is a higher order fucntion
    let doubleNumbers = numbers.map( number => number * number)
    console.log( doubleNumbers)

    // SetTimeout is higher order function
    // SetInterval is higher order function

    setTimeout( () => console.log('SetTimeout - Higher Order function - calling after 1 second'), 10000)
    setInterval( () => console.log('SetInterval - Higher Order function - calling every 1 second'), 1000)   

}

export default HigherOrderFunctions
