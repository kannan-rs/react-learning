function PureFunction() {
    // Pure function
    // Functions return same output for a constant argument
    /**
     * 1. No Random values to be used
     * 2. No current date to be used
     * 3. No Global State to be used (DOM, files, db etc..)
     * 4. Dont Mutate the params - If mutate it became impure
     */

    /**
     * Benifits
     * 1. Self-Documenting
     * 2. Easily testable
     * 3. Concurrency
     * 4. Cacheable
     */

    console.log("")
    console.log("")
    console.log("=== Pure Function ===")

    // Not a pure function
    function randomMultiply(number) {
        return number * Math.random()
        // Not pure because on every function call, it will return different value
    }
    console.log(" Impure because of Random == ", randomMultiply(2))

    // Pure funnction 
    function multipleBy2(number) {
        return number * 2
    }
    console.log(" Pure function because of no side effects --", multipleBy2(2))

    // Example #2 of not pure function
    function isEligible(age) {
        return age > minAge
        // Impure because, minAge seems to be global variable
    }

    // Pure function
    function isEligible2(age, minAge) {
        return age > minAge
        // It is pure as both the values are passed as arguments
    }

}

export default PureFunction