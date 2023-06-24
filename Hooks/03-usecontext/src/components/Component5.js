import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"

export default function Component5(){

    const user = useContext(UserContext)

    return(
        <div>
            <p>Component-5</p>
            <p>{ `name with context ${user}` }</p>
        </div>
    )

}