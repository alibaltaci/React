import { useEffect, useRef } from "react"

export default function Form(){

    const inputRef = useRef()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Girilen değer: ${inputRef.current.value}`)
        inputRef.current.value = ""
    }

    return(
        <>
            <h1>Form</h1>
            <form onSubmit={handleSubmit} >
                <input ref={inputRef} type="text" />
                <button type="submit" >Submit</button>
            </form>
        </>
    )
}