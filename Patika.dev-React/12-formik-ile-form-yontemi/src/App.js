import './App.css';

// Formik
// import { Formik, Field, Form } from "formik";

// with html 
import { Formik } from "formik";

function App() {
  return (
    <div className="App">

    <h1>Sign Up</h1>

    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',

        // radio
        gender: "male",

        // chackbox
        hobies: [],  // birden fazla seçeneği seçebildiğimiz için tipi array olamak zorunda.

        // drapdown
        country: "tr" 
      }}
      
      // onSubmit={async (values) => {
      //   await new Promise((r) => setTimeout(r, 500));
      //   alert(JSON.stringify(values, null, 2));
      // }}

      onSubmit={values => {
        console.log(values);
      }}
    >
      {/* <Form>
        <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" placeholder="Jane" />

        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" placeholder="Doe" />

        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <button type="submit">Submit</button>
      </Form> */}


      {/* With HTML */}

      {/* {
        ( { handleSubmit, handleChange })  => (

          <form onSubmit={ handleSubmit }>

            <label htmlFor="firstName">First Name</label>
            <input name='firstName'  onChange={ handleChange } />

            <label htmlFor="lastName">Last Name</label>
            <input name='lastName'  onChange={ handleChange } />


            <label htmlFor="email">Email</label>
            <input name='email'  onChange={ handleChange } />


            <button type="submit">Submit</button>

          </form>

        )
      } */}

      {/* Radio / Checkbox / Dropdown */}
      {
        ( { handleSubmit, handleChange, values })  => (

          <form onSubmit={ handleSubmit }>

            <label htmlFor="firstName">First Name</label>
            <input name='firstName'  onChange={ handleChange } />

            <br />
            <br />

            <label htmlFor="lastName">Last Name</label>
            <input name='lastName'  onChange={ handleChange } />

            <br />
            <br />

            <label htmlFor="email">Email</label>
            <input name='email'  onChange={ handleChange } />

            <br />
            <br />

            {/* Radio Button */}

            <span>Male</span>
            <input type={"radio"} name='gender' value={"male"} onChange={ handleChange } checked={ values.gender === "male" }/>

            <span>Female</span>
            <input type={"radio"} name="gender" value={"female"} onChange={ handleChange } checked={ values.gender === "female" } />

            <br />
            <br />

            {/* checkbox */}

            <div>
              Football
              <input type={"checkbox"} name="hobies" value={"Football"} onChange={ handleChange }/>
            </div>

            <div>
              Cinema
              <input type={"checkbox"} name="hobies" value={"Cinema"} onChange={ handleChange } />
            </div>

            <div>
              Photography
              <input type={"checkbox"} name="hobies" value={"Photography"} onChange={ handleChange } />
            </div>


            <br />
            <br />

            {/* Dropdown */}

            <select name='country' value={values.country} onChange={ handleChange }>
              {/* <option></option> */}
              <option value={"tr"}>Turkey</option>
              <option value={"en"}>England</option>
              <option value={"usa"}>USA</option>
            </select>
            <br />
            <br />

            <button type="submit">Submit</button>

            <br />
            <br />

            { JSON.stringify(values) }


          </form>

        )
      }
    </Formik>


    </div>
  );
}

export default App;
