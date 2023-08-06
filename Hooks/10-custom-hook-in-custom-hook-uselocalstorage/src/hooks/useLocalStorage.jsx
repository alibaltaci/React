import { useState } from "react"

export const useLocalStorage = (key, INITIAL_STATE) => {

    const [state, setState] = useState( () => {
        const storage = localStorage.getItem(key)
        return storage ? JSON.parse( storage ) : INITIAL_STATE
    })

    const updataStorage = ( value ) => {
        localStorage.setItem( key, JSON.stringify( value ) )
        setState(value)
    }

    return [state, updataStorage]
}  