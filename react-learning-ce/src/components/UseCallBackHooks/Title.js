import React from 'react'

function Title() {
    console.log("Rendering Title")
    return (
        <div>
            Sample to showcase UseCallBack Hooks
        </div>
    )
}

export default React.memo(Title)
