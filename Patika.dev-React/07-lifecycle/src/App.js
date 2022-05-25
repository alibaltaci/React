// import './App.css';

// import { useState, useEffect } from "react"; 

// function App() {

//   const [number, setNumber] = useState(0);

//   const [name, setName] = useState("Ali");


//   // useEffect

//   // state güncellendiğinde 
//   // useEffect( () => console.log("State Güncellendi!"));

//   // number state 'i dinlemek için
//   useEffect( () => {
//     console.log( "Number State Güncellendi!");
//   }, [number] );

//   // name state 'i dinlemek için

//   useEffect( () => {
//     console.log("Name State Güncellendi!");
//   }, [name] );

//   // component güncellendiğinde
//   useEffect( () => {
//     console.log("Component Mount Edildi")
//   }, [] )
  

//   return (
//     <div className="App">

//       <h1>{number}</h1>

//       <button onClick={ () => setNumber(number + 1) }>click</button>

//       <br />

//       <h1>{name}</h1>

//       <button onClick={ () => setName("Ali Baltacı")}>Click</button>

//     </div>
//   );
// }

// export default App;

//  Yukarıdaki işlemler counter.js 'ye taşınmıştır.

import Counter from "./components/Counter";

import { useState } from "react";

function App() {

  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="App">

      {/* <Counter /> */}

      { isVisible && <Counter />}

      <button onClick={ () => setIsVisible(!isVisible)}>Toggle</button>

    </div>
  );
}

export default App;
