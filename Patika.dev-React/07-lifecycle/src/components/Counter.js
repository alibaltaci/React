import { useState, useEffect } from "react"

function Counter() {

    const [number, setNumber] = useState(0);
  
    // useEffect
  
    useEffect( () => {
        console.log("Component Mount Edildi");
  
        setInterval( () => {
          setNumber( (n) => n + 1);
      }, 1000 );
      }, [] )

    // useEffect( () => {
    //   console.log( "Number State Güncellendi!");
    // }, [number] );
  

    // setInterval( () => {
    //     setNumber( number + 1);
    // }, 1000 );

  return (
    <div>

        <h1>{number}</h1>

        {/* <button onClick={ () => setNumber(number + 1) }>click</button> */}

    </div>
  )
}

export default Counter
