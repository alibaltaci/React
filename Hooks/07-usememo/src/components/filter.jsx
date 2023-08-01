export default function List({ list }){

    return(
        <>
            <h1>User List</h1>
            {
                list.map( (item) => (
                    <li key={item.id}>{item.name}</li>
                ))
            }
        </>
    )
}