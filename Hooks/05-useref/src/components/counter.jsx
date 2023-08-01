import { useState, useRef } from "react"

export default function Counter(){
    
    const [count, setCount] = useState(0)
    const previousCountRef = useRef()

    const handleIncreament = () => {
        setCount( (prevCount) => prevCount + 1)
    }

    const handleDecrement = () => {
        setCount( (prevCount) => prevCount - 1 )
    }

    previousCountRef.current = count;
    
    return(
        <>
            <h1>Counter</h1>
            <p>{`Count: ${count}`}</p>
            <p>{`Previous Count: ${previousCountRef.current}`}</p>
            <button onClick={handleIncreament}>Increament</button>
            <button onClick={handleDecrement}>Decreamnet</button>
        </>
    )
}