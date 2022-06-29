import React from 'react';

import CallbackHeader from './components/CallbackHeader';

import {useState, useMemo, useCallback} from "react";

import "./App.css";

export default function Callback() {

    const [number, setNumber] = useState(0);

    const [text, setText] = useState("");

    // useCallback
    // const increment = useCallback( () => {
    //     setNumber( number + 1 );
    // }, []);

    // const increment = useCallback( () => {
    //     setNumber( number + 1 );
    // }, [number]);

    // prevState
    const increment = useCallback( () => {
        setNumber( (prevState) => prevState + 1);
    }, []);


  return (
    <div className='App'>

      {/* <CallbackHeader increment={() => setNumber( number + 1 )} /> */}

      {/* with useCallback */}
      <CallbackHeader increment={increment} />

      <hr />

      <h1>{number}</h1>

      <br />
      <br />

      <input value={text} onChange={(target) => setText(target.value)} />


    </div>
  )
}
