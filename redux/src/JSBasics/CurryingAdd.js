function CurryingAdd() {
    // Adding 2 numbers

    console.log("")
    console.log("")
    console.log("=== Currying Add ===")
    function add(a, b) {
        return a + b
    }

    console.log("Normal Function Call with 2 paramaters for adding - ", add (5, 10))

    // if we need to send "a" params from one function and "b" params from another function then as follows

    function add1(a) {
        return function (b) {
            return a + b
        }
    }

    var varAddFn = add1(5)
    console.log("Currying internal function with Single params (Using Return function) - ", varAddFn(10))

    // This can be return as follows
    // Method #1
    function add11(a) {
        return b => a + b
    }

    // Further returned as 
    var add2 = a => b => a + b

    console.log("Currying internal function with Single params (Using Return Arrow function) - ", add2(10)(20))

}

export default CurryingAdd