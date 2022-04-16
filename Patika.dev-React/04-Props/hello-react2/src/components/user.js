import PropTypes from "prop-types";


function User( {name, surname, isLoggedIn, friends, address} ) {   // user(props) user( {name, surname, isLoggedIn} ) olarak da değerler alınabilir.

    // console.log(props);
    // console.log(name, surname, isLoggedIn, friends);

    
    // early return 
    if (!isLoggedIn) {
        return <div>Giriş Yapınız</div>
    }

    return(
        // <div>Selam</div>

        // <h1>{props.name} {props.surname}</h1>

        <>
        
            <h1>
                {`${name} ${surname}`}
            </h1>

            {
                friends &&
                
                friends.map( (friend) =>   // (friend, index)
                
                // <div key={index}>

                //     {index + 1} - {friend}

                // </div>)

                <div key={friend.id}>

                    {friend.id} - {friend.name}   

                </div>)
            }

            <br/>

            {address.title} {address.zip}
        </>
    );
}

User.propTypes = { 

    name: PropTypes.string.isRequired,

    surname: PropTypes.string.isRequired,
    
    isLoggedIn: PropTypes.bool.isRequired,
    
    age: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]).isRequired,
    
    friends: PropTypes.array,
    
    address: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number
    })
}

User.defaultProps = {
    isLoggedIn: false
}

export default User