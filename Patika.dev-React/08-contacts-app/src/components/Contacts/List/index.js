import { useState } from "react";

function List( {contacts} ) {

  const [filterText, setFilterText] = useState("");  // input alanına varsayılan değer atamak için.

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

        {/* filtreleme işlemleri eklendiği için yukarıdaki kodu aşağıdaki gibi restore ediyoruz. */}

        {filtered.map( (contact, i) => 
          <li key={i}> {contact.fullname} </li>)}
      </ul>
    </div>
  )
}

export default List;
