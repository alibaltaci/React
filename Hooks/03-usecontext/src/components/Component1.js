import Component2 from "./Component2"

export default function Component1({name}){


    return(
            <div>   
                <p>Componet-1</p> 
                <p>{name}</p> 
                <Component2 />
            </div>
    )

}