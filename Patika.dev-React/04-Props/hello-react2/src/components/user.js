function User(props) {   // user( {name, surname, isLoggedIn} ) olarak da değerler alınabilir.

    console.log(props);

    return(
        // <div>Selam</div>

        // <h1>{props.name} {props.surname}</h1>
        <h1>
            {props.isLoggedIn ? `${props.name} ${props.surname}` : "Giriş Yapın..."}
        </h1>
        
    )
}

export default User