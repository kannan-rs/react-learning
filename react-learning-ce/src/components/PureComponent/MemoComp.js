import React from 'react'

function MemoComp({name}) {
    console.log("Memo Component render")
    return (
        <div>
            this is Memo component dont update if props or state is same - {name}
        </div>
    )
}

export default React.memo(MemoComp)
