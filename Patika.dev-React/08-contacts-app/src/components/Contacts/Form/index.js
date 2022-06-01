import {useState, useEffect} from "react";
import Contacts from "..";

const initialValues = {fullname: "", phone_number: "" };

function Form( {addNewContact, oldContacts} ) { // addContact propunu burada çekiyoruz.

//   console.log(addContact);

  const [form, setForm] = useState( initialValues );

  const onChangeInput = (e) => {
      setForm( {...form, [e.target.name]: e.target.value});
  };

  const onSubmit = (e) => {

    // Geçersiz değerleri göndermeyi engellemek için kontrol yapalım

    if (form.fullname === "" || form.phone_number === "") {
        return false; // formu gönderme
    }

    addNewContact([...oldContacts, form])  // form objesini olduğu gibi arrayin içine yerleştirelim. // setContact
      
    // console.log(form)

    // setForm(initialValues); // input alanlarını temizlemek için yöntem-1

    e.preventDefault(); // sayfa yenilenmesini önlemek için
  };

//   input alanlarını temizleme yöntem-2
  useEffect( () => {
    setForm(initialValues);
  }, [oldContacts]);

  return (
    <form>
      {/* Form */}
        
        <div>
            <input name='fullname' placeholder='Full Name' value={form.fullname} onChange={onChangeInput}/>
        </div>

        <div>
            <input name='phone_number' placeholder='Phone Number' value={form.phone_number} onChange={onChangeInput}/>
        </div>

        <div className="btn">
            <button onClick={onSubmit}>Add</button>
        </div>

    </form>
  )
}

export default Form;
