import './App.css';

import {useState, useMemo} from "react";

import Header from './components/Header';

// const data = {name: "Ali"};

function App() {

  const [number, setNumber] = useState(0);

  // const data = {name: "Ali"};

  // useMemo 
  // const data = useMemo( () => {
  //   return {name: "Ali"};
  // }, []);

  // const data = useMemo( () => {
  //   return [{name: "Ali", number}];
  // }, [number]);

  // const data = useMemo( () => {
  //   return calculateObject();
  // }, [number]);

  // const data = calculateObject();

  // number 'ı göstermek için

  const data = useMemo( () => {
    return calculateObject(number);
  }, [number]);

  const [text, setText] = useState("");

  return (
    <div className="App">

      {/* <Header /> */}

      {/* for re-render */}
      {/* <Header number={number} /> */}

      {/* <Header number={ number < 5 ? 0 : number} /> */}

      {/* useMemo */}
      <Header number={ number < 5 ? 0 : number} data={data} />



      <hr /> 

      <h1>{number}</h1>

      <button onClick={() => setNumber(number + 1)}>Click</button>

      <br />
      <br />

      <input value={text} onChange={ ({target}) => {setText(target.value)}} />

    </div>
  );
}

function calculateObject(number){
  
  console.log("Calculating...");

  for(let i = 0; i < 1000000000; i++ ){

  }

  console.log("Calculating completed!")

  return {name: "Ali", number};
};

export default App;
