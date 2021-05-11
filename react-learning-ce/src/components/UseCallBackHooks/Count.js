import React from 'react'

function Count( {text, count} ) {
    console.log("Rendering Count For - ", text)
    return (
        <div>
            {text} - {count}
        </div>
    )
}

/* Without React.memo() - This component is rendered every time even if no change in state */
// export default Count

/* React Memo - Restricts Rendering only if state changed */
export default React.memo(Count)
