

// console.log("Hello World!");


// Functions as First-Class Citizens
/**
 * Assign to a variable
 * Pass as an argument
 * Return from other functions
 */

function FucntionsFCCitizens() {

    function sayHello() {
        return "Hello World"
    }

    let fn = sayHello;

    console.log("=== First Class Citiziens ===")
    console.log("Calling the function Directly - sayHello - ", sayHello())
    console.log("Calling the function using Variable - whose value is function 'sayHello' - ", fn())

    // Function Passed as argument to another function

    function greet(fnAsArgs) {
        console.log("--")
        console.log("Calling the function which is passed as argument - ", fnAsArgs())
    }

    greet(sayHello)
    greet(fn)

    // Return a function from a function

    function sayHelloReturnFunction() {
        return function () {
            return "Hello world"
        }
    }
    console.log("Calling function returned by a function - ", sayHelloReturnFunction()())

    let varAsfunctionReturn = sayHelloReturnFunction()
    console.log("Calling function returned by a function assigned to a variable - ", varAsfunctionReturn())
}

export default FucntionsFCCitizens
