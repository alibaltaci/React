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

      {
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
      }
    </Formik>


    </div>
  );
}

export default App;
