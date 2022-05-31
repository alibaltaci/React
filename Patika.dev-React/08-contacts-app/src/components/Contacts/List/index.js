import { useState } from "react";

function List( {contacts} ) {

  const [filterText, setFilterText] = useState("");

  // filter metodu

  const filtered = contacts.filter( (item) => {
    return Object.keys(item).some( (key) => 
    item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase()));
  });

  return (
    <div>

      <input placeholder='Filter' value={filterText} onChange = { (e) => setFilterText(e.target.value)}  />

      <ul>
        {/* {
          contacts.map( (contact, i) => (
            <li key={i}> {contact.fullname} </li>
          ))
        } */}

        {filtered.map( (contact, i) => 
          <li key={i}> {contact.fullname} </li>)}
      </ul>
    </div>
  )
}

export default List;
