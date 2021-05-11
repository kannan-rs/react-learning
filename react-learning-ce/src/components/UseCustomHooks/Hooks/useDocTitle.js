import {useEffect} from 'react'

function useDocTitle( count ) {
    useEffect(() => {
        // Mount
        document.title = `count - ${ count }`
        return () => {
            // No Unmount
        }
    }, [count])
}

export default useDocTitle
