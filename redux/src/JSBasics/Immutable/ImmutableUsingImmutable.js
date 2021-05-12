import { Map } from 'immutable'
function ImmutableUsingImmutable() {    
    // Immutable Libraries
    // immutable > by FaceBook
    // immer > Mobix (Allow to work with plane Javascript) > Gaining popularity
    // Mori

    // Immutable.js

    console.log("")
    console.log("")
    console.log("=== Immutable Using Immutable.js Lib from FaceBook ===")

    // Example of mutable


    let book = { title: "Harry Potter" }

    function publish ( book ) {
        book.isPublished = true;
    }

    console.log( "Before Changes - ", book)

    // Mutating
    publish( book );
    console.log( "After Change - ", book)


    // Immutable helps in immutable objects
    // Creates a internal heap map and allow acessing only with getters and setters.
    // Setters will return a new object

    let book1 = Map({title: "Harry Potter"})

    console.log("Object created using IMMUTABLE library", book1) // It adds lot of other values to the object.

    console.log("Getting a key's value using IMMUTABLE library - ", book1.get("title")) // only use internal API to get the data.

    function publish1 ( book ) {
        return book.set("isPublished", true) // Need a setter to set a value. SETTER will return the MAP object
    }

    let book2 = publish1( book1 )

    console.log("Original Book Object after update is called (IMMUTABLE) - ", book1.toJS())
    console.log("Newly created and RETURNED book object", book2.toJS())
}

export default ImmutableUsingImmutable