import React from 'react'

import {useState} from "react";

function Form() {

  const [form, setForm] = useState( {fullname: "", phone_number: "" });

  const onChangeInput = (e) => {
      setForm( {...form, [e.target.name]: e.target.value});
  };

  const onSubmit = (e) => {

    // Geçersiz değerleri göndermeyi engellemek için kontrol yapalım

    if (form.fullname === "" || form.phone_number === "") {
        return false; // formu gönderme
    }
      
    console.log(form)

    e.preventDefault(); // sayfa yenilenmesini önlemek için
  };

  return (
    <form>
      {/* Form */}
        
        <div>
            <input name='fullname' placeholder='Full Name' onChange={onChangeInput}/>
        </div>

        <div>
            <input name='phone_number' placeholder='Phone Number' onChange={onChangeInput}/>
        </div>

        <div>
            <button onClick={onSubmit}>Add</button>
        </div>

    </form>
  )
}

export default Form;
