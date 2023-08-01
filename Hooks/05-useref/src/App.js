import React, { useRef, useState } from 'react';
import Counter from './components/counter';

function App() {

  const inputRef = useRef()
  const divRef = useRef()

  const [border, setBorder] = useState(false)

  const onBorderDiv = () => {
    if(!border){
      divRef.current.style.border = '1px solid blue'
    }else{
      divRef.current.style.border = ''
    }

    setBorder(!border)
  }

  const onFocusButton = () => {
    inputRef.current.focus();
  }

  return ( 
    <div ref={divRef}>
      <h1>useRef Kullanım</h1>
      <input ref={inputRef} placeholder="Giriş..."/>
      <button onClick={onFocusButton}>Input'a Focus Ol!</button>
      <button onClick={onBorderDiv}>{ border? "Border'ı kaldır!" : "Border Ekle!"} </button>

      <Counter />
    </div>
  );
}

export default App;
