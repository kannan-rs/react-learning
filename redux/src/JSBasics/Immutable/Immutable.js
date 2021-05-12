import ImmutableArray from "./ImmutableArray.js"
import ImmutableObjects from "./ImmutableObjects.js"
import ImmutableUsingImmer from "./ImmutableUsingImmer.js"
import ImmutableUsingImmutable from "./ImmutableUsingImmutable.js"

function Immutable() {
    ImmutableObjects()
    ImmutableArray()
    ImmutableUsingImmutable()
    ImmutableUsingImmer()
}

export default Immutable