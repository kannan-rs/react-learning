function ImmutableObjects() {
    // Immutability
    /*
        Once Defined, Cannot be mutated or changed
        it could be Variable or Object, but once defined it cannot be mutable.

        If changes needed it need to be Copied

        ----
        JavaScript functions are immutable
                    but
        Javascript Objects are mutable
                    So
        Javascript is not a pure functional programming language

        Can we make it immutable by "const" >>> No

        Const > Prevent reassigmnent
        -----

        Why immutability?
        1. Predictable - as the data/object will never change
        2. Faster Change detection - React state detection 
            If changes needed, then Copy is take and Copy is compared to decide the changes happened or not, So it is faster
        3. Concurrency
            As this function is not going to change the data, we can safely run this function parallely.

        Cons
        1. Performance
            While copying, it need to do deep copy. (Problem only in large objects)
        2. Memory Overhead
            While copying it can create memory overhead
            Libreries are there to solve this.
            Eg: "Structural Sharing" > Copy only the changed objects value and share the same one 
        
        -----
        How to atchive immutability in Javascript.  
        As follows
    */

    console.log("")
    console.log("")
    console.log("=== Immutable Objects ===")
    // Updating objects
    // use Object.assign() - Shallow copy
    
    const person = { name: "Sneghan" }
    const updatedPerson = Object.assign({}, person, { name: "mithran"})
    console.log(updatedPerson)

    const updatedPerson1 = Object.assign({}, person, { name: "Kannan", age: 37})
    console.log(updatedPerson1)


    // Use Spread -  - Shallow copy
    const person2 = { name: "sneghan" }
    const updatedPerson2 = {...person2, name: "mithran"}

    // Shallow Copy - Refers to the same address object in memory
    const person3 = {
        name: "sneghan",
        address : {
            city : "blr",
            country: "india"
        }
    }

    // Shallow Copy
    const updatedPerson3 = {...person3, name: "mithran"}
    console.log(person3)
    console.log(updatedPerson3)

    // Update Copied object
    console.log("updating City")
    updatedPerson3.address.city = "Try"

    // Reflected in original object as well
    console.log("person3 - ", person3)
    console.log("updatedPerson3 - ", updatedPerson3)

    // Over Come by Deep Copy
    // Deep Copy

    const person4 = {
        name: "sneghan",
        address : {
            city : "blr",
            country: "india"
        }
    }


    const updatedPerson4 = {
        ...person4, 
        address: {
            ...person4,
            city: "try"
        },
        name: "mithran"
    }

    // Reflected in original object as well
    console.log("person4 - ", person4)
    console.log("updatedPerson4 - ", updatedPerson4)

    // Make it less verbous by adding some library code.

}

export default ImmutableObjects