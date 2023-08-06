import "./styles.css"
import { useInput } from "./hooks/useInput";

function App() {

  const INITIAL_STATE = {
    name:"", 
    age:"", 
    email:"", 
    question:""
  }
  
  const [inputs, setInputs] = useInput('inputs', INITIAL_STATE)

  return ( 
    <div className="App">
      <h1>Custom Hook Nasıl Yazılır?</h1>
      <h2>Custom Hook in Custom Hook</h2>
      <h2>useLocalStorage</h2>
      
      <form>
        <label htmlFor="name">
          Name: <input name="name" value={inputs.name} onChange={ setInputs } />
        </label>
        <label htmlFor="age">
          Age: <input name="age" value={inputs.age} onChange={ setInputs } />
        </label>
        <label htmlFor="email">
          Email: <input name="email" value={inputs.email} onChange={ setInputs } />
        </label>
        <label htmlFor="Security Question">
          Cat's Name: <input name="question" value={inputs.question} onChange={ setInputs } />
        </label>
      </form>
    </div>
  );
}

export default App;
