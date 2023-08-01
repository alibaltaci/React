import { useMemo, useState } from "react";
import List from "./components/filter";

const users = [
  { id: "a", name: "Robin"},
  { id: "b", name: "Dennis"},
  { id: "c", name: "Thedore"},
  { id: "d", name: "Jacqeline"},
  { id: "e", name: "Toby"},
  { id: "f", name: "Amanda"},
  { id: "g", name: "Jennifer"},
  { id: "h", name: "Jack"},
  { id: "j", name: "Oliver"},
  { id: "k", name: "Chris"},
  { id: "l", name: "Robert"},
]

function App() {

  const [text, setText] = useState("")
  const [search, setSearch] = useState("")

  const handleText = (event) => {
    setText(event.target.value)
  }

  const handleSearch = () => {
    setSearch(text)
  }

  // her renderda tüm userlar için filtreleme işlemi yapılır.
  // const filteredUsers = users.filter( (user) => {
  //   console.log("filter işlemi")
  //   return user.name.toLocaleLowerCase().includes( search.toLocaleLowerCase() )
  // } )

  // gereksiz render işleminden kurtulmak için aynı foksiyonu useMemo ile tekrardan yazalım.
  const filteredUsers = useMemo( () => ( 
      users.filter( (user) => {
        console.log("filter işlemi")
        return user.name.toLocaleLowerCase().includes( search.toLocaleLowerCase() )
    })
  ), [search] )

  return (
    <div >
      <h1>useMemo Kullanımı</h1>
      <p>Text: {text}</p>
      <p>Search: {search}</p>
      <input type="text" value={text} onChange={handleText} placeholder="İsim Giriniz..."/>
      <button onClick={handleSearch}>Search</button>
      <List list={ filteredUsers } />
    </div>
  );
}

export default App;
