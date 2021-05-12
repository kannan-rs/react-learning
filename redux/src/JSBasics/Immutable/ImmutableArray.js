function ImmutableArray() {
    // Immutability on Array
    // Add, Remove and update Array
    // Use ... SPREAD operator

    console.log("")
    console.log("")
    console.log("=== Immutable Array ===")

    const numbers = [1, 2, 3]
    console.log("Original array - ", numbers)
    const addingNewNumber1 = [...numbers, 4] // Add at end
    console.log("Adding at the end - ", addingNewNumber1)
    const addingNewNumber2 = [4, ...numbers] // Add at begining
    console.log("Adding at the begining - ", addingNewNumber2)
    
    // Add at middle
        const index = numbers.indexOf(2)
        const addingNewNumber3 = [ ...numbers.slice(0, index), 4, ...numbers.slice(index)]
        console.log("Adding at the middle - ", addingNewNumber3)

    // Removing using FILTER
    console.log("Removing")
    const removeNumber1 = numbers.filter( (number, index) => index !== 0)
    console.log("Removing by Index - ", removeNumber1)

    const removeNumber2 = numbers.filter( (number) => number !== 2)
    console.log("Removing by Value - ", removeNumber2)


    // Update using MAP method
    console.log("Update")
    const updateNumber1 = numbers.map( number => number == 2 ? 20 : number )
    console.log("Update using value - ", updateNumber1)
    const updateNumber2 =  numbers.map( (number, index) => index === 0 ? 23232 : number )
    console.log("Update using Index - ", updateNumber2)
}

export default ImmutableArray