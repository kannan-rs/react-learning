import React from 'react'

function Button( {handleClick, children} ) {
    console.log("Rendering Button For - ", children)
    return (
        <div>
            <button onClick = { () => handleClick() }>{children}</button>
        </div>
    )
}

/* Without React.memo() - This component is rendered every time even if no change in state */
// export default Button

/* React Memo - Restricts Rendering only if state changed */
export default React.memo(Button)

/* Note: 
    Even after React.memo() this BUTTON rerender for both Age and Salary, 
    BECAUSE, function is created every time and that is not having the SAME REFERENCE as existing functions present

    To Avoid this, we need to user UseCallBack Hooks
*/
