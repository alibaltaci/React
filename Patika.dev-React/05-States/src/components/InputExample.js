import { useState } from 'react'

function InputExample() {

    // const [name, setName] = useState("");

    // const [surname, setSurname] = useState("");

    // const onChangeName = (e) => setName( e.target.value ); 

    // const onChangeSurname = (e) => setSurname( e.target.value ); 

    // Yukarıdaki Fonksiyonları Teke İndirelim

    const [form, setForm] = useState( {name:"", surname:""});

    const onChangeInput = (e) => {

        setForm(...form, {[e.target.name]: e.target.value } );
    }

  return (
    <div>

        {/* Please Enter a Name
        <br />
        {/* <input value={name} placeholder='Name' onChange={ (e) => setName(e.target.value) } /> */}

        {/* <input value={name} placeholder='Name' onChange={ onChangeName } />

        <br />
        <br />

        Please Enter a Surname
        <br />
        <input value={surname} placeholder='Surname' onChange={ onChangeSurname } />

        <br />
        <br />

        {name} {surname}  */}

        Please Enter a Name
        <br />
        
        <input name='name' value={form.name} onChange={ onChangeInput } />

        <br />
        <br />

        Please Enter a Surname
        <br />

        <input name='surname' value={form.surname} onChange={ onChangeInput } />

        <br />
        <br />

        {form.name} {form.surname}

    </div>
  )
}

export default InputExample
