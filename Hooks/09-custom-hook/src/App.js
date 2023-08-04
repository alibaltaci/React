import { useState } from "react";
import "./styles.css"

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

  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")
  
  console.log(name, age, email)
  
  return ( 
    <div className="App">
      <h1>Custom Hook Nasıl Yazılır?</h1>
      
      <form>
        <label htmlFor="name">
          Name: <input name="name" value={name} onChange={ e => setName(e.target.value) } />
        </label>
        <label htmlFor="age">
          Age: <input name="age" value={age} onChange={ e => setAge(e.target.value) } />
        </label>
        <label htmlFor="email">
          Email: <input name="email" value={email} onChange={ e => setEmail(e.target.value) } />
        </label>
      </form>
    </div>
  );
}

export default App;
