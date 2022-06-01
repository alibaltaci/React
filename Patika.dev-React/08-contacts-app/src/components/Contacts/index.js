import {useState, useEffect} from 'react'

// import sub components
import List from './List';
import Form from './Form';

// import style.css
import "./styles.css";

function Contacts() {

  const [contacts, setContacts] = useState([]); 

  // contacts 'e atama yapıldğında useEffect ile güncel halini görelim

  useEffect( () => {

    console.log(contacts);
  
  }, [contacts]);

  return (
    <div id='container'>

      <h1>Contacts</h1>

      <List contacts={contacts} />

      <br />

      <Form addNewContact={setContacts} oldContacts={contacts}/> {/* addNewContact ve oldContacts burada bizim verdiğimiz isimde proptur */}
      
    </div>

  )
}

export default Contacts;
