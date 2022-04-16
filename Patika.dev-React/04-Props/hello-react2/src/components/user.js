function User( {name, surname, isLoggedIn, friends} ) {   // user(props) user( {name, surname, isLoggedIn} ) olarak da değerler alınabilir.

    // console.log(props);
    // console.log(name, surname, isLoggedIn, friends);

    return(
        // <div>Selam</div>

        // <h1>{props.name} {props.surname}</h1>

        <>
        
            <h1>
                {isLoggedIn ? `${name} ${surname}` : "Giriş Yapın..."}
            </h1>

            {
                friends.map( (friend) =>   // (friend, index)
                
                // <div key={index}>

                //     {index + 1} - {friend}

                // </div>)

                <div key={friend.id}>

                    {friend.id} - {friend.name}   

                </div>)
            }
        </>
    );
}

export default User