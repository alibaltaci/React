import {useState, useEffect} from 'react'

// import sub components
import List from './List';
import Form from './Form';


function Contacts() {

  const [contacts, setContacts] = useState([]); 

  // contacts 'e atama yapıldğında useEffect ile güncel halini görelim

  useEffect( () => {

    console.log(contacts);
  
  }, [contacts]);

  return (
    <div>

      Contacts

      <br />
      <br />

      <List />

      <br />

      <Form addNewContact={setContacts} oldContacts={contacts}/> {/* addNewContact ve oldContacts burada bizim verdiğimiz isimde proptur */}

    </div>
  )
}

export default Contacts;
