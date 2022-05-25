import { useState, useEffect } from "react"

function Counter() {

    const [number, setNumber] = useState(0);
  
    // useEffect
  
    useEffect( () => {
        console.log("Component Mount Edildi");
  
        const inteval = setInterval( () => {
          setNumber( (n) => n + 1);
        }, 1000);

        // return () => console.log("component unmount edildi!");

        return () => clearInterval(inteval);

      }, [] )

    useEffect( () => {
      console.log( "Number State Güncellendi!");
    }, [number] );
  

    // setInterval( () => {
    //     setNumber( number + 1);
    // }, 1000 );

  return (
    <div>

        <h1>{number}</h1>

    </div>
  )
}

export default Counter
