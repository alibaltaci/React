// import { useState } from "react";
import "./styles.css"
import { useInput } from "./hooks/useInput";

// DRY --> Don't Repeat Yourself.

// Custom Hooklar (Özel Hooklar)componentlarımız içinde state ilgilendiren 
// fonksiyonların ya da mantıksal işlemlerin yeniden kullanılabilir olarak
// tasarlanmasına yardımcı olur.

// Stateful Logic
// state üzerinde değişiklik yapan tüm fonsiyonlara ya da mantıksal işlemlere
// stateful logic olarak bakılabilir.

// Hook içinde başka hooklar (useEffect, useState) kullanılabilir.

// Custom Hooklar her kullanıldığında birbirinden ayrı state parçaları olarak depolanır.
// Yani bir component içinde custom hookumuzu iki kere kullanırsak iki ayrı state parçası oluşturmuş oluruz.

function App() {

  // const [name, setName] = useState("")
  // const [age, setAge] = useState("")
  // const [email, setEmail] = useState("")

  //  ===> 
  
  // const [inputs, setInputs] = useState( {name:"", age:"", email:""} )
  
  // stateful logic function
  // şimdi bu fonksiyonumuzu bir hook olarak tanımlayalım. (hooks --> useInput.jsx)

  // const handleChange = event => {
  //   setInputs( {...inputs, [event.target.name]: event.target.value} )
  // }

  // ===> 

  const [inputs, setInputs] = useInput({name:"", age:"", email:""})

  return ( 
    <div className="App">
      <h1>Custom Hook Nasıl Yazılır?</h1>
      
      <form>
        <label htmlFor="name">
          {/* Name: <input name="name" value={name} onChange={ e => setName(e.target.value) } /> */}
          {/* Name: <input name="name" value={inputs.name} onChange={ handleChange } /> */}
          Name: <input name="name" value={inputs.name} onChange={ setInputs } />
        </label>
        <label htmlFor="age">
          Age: <input name="age" value={inputs.age} onChange={ setInputs } />
        </label>
        <label htmlFor="email">
          Email: <input name="email" value={inputs.email} onChange={ setInputs } />
        </label>
      </form>
    </div>
  );
}

export default App;
