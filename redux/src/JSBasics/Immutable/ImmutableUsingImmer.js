import { produce } from 'immer'

function ImmutableUsingImmer() {
    // Immutable using IMMER
    // No complex API, Simple "produce" function

    console.log("")
    console.log("")
    console.log("=== Immutable Using Immer.js Lib ===")

    let book = { title: "Harry Potter" }

    function publish (book) {
        return produce ( book, draftBook => {
            draftBook.isPublished =  true
        })
    }

    let newBookObj = publish( book )

    console.log("Original Book - ", book)
    console.log("Updated Book - ", newBookObj)
}

export default ImmutableUsingImmer