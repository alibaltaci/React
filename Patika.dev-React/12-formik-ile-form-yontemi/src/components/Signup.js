import React from 'react'

import { Formik, useFormik, Form } from "formik";
import {  object, ref, string} from "yup";


// schema
// import validations from './validations';


export default function Signup() {

    // const {handleChange, handleSubmit, values, errors, touched, handleBlur} = useFormik({
    //     initialValues: {
    //       email: "",
    //       password: "",
    //       passwordConfirm: "",
    //       age:"",
    //       parentName:"",
    //       parentSurname:"",
    //       parentMail:"",
    //     },
    
    //     onSubmit: (values) => {
    //       console.log(values);
    //     },

    //     validationSchema: validations
    //   });


    
const {handleChange, values, errors, touched, handleBlur} = useFormik();

const  initialValues = {
        email: "",
        password: "",
        passwordConfirm: "",
        age:"",
        parentName:"",
        parentSurname:"",
        parentMail:"",
      }

const validations = object({
  email: string().email("Geçerli bir mail giriniz.").required("Zorunlu alan."),
  password: string().min(5, "Parolanız en az 5 karakterden oluşmalıdır.").required("Zorunlu alan."),
  passwordConfirm: string().oneOf([ref("password")], "Girdiğiniz parolalar aynı olmak zorunda.").required("Zorunlu alan."),
  age: string().required(),
  parentName: string().required(),
  parentSurname: string().required(),
  parentMail: string().required().email()
});

// export type FormValueTypes = typeof initialValues;

const  initialValues2 = {
  email: "",
  password: "",
  passwordConfirm: "",
  age:"",
}

const validations2 = object({
  email: string().email("Geçerli bir mail giriniz.").required("Zorunlu alan."),
  password: string().min(5, "Parolanız en az 5 karakterden oluşmalıdır.").required("Zorunlu alan."),
  passwordConfirm: string().oneOf([ref("password")], "Girdiğiniz parolalar aynı olmak zorunda.").required("Zorunlu alan."),
  age: string().required(),
});

// export type FormValueTypes2 = typeof initialValues2;


  return (
    <div>

        <h1>Sign Up</h1>
        <>
        <Formik
          initialValues={initialValues}
          validationSchema={validations}
          onSubmit={ (values) => { console.log(values) } }
        >
          <Form>

        <label htmlFor="email">Email</label>
        <input name='email' value={values.email} onChange={ handleChange } onBlur={ handleBlur }/>

        {errors.email && touched.email && ( <div className='error'> {errors.email} </div>) }

        <br />
        <br />

        <label>Password</label>
        <input name='password' value={values.password}  onChange={ handleChange } onBlur={ handleBlur }/>

        {errors.password && touched.password && ( <div className='error'> {errors.password} </div>)}

        <br />
        <br />

        <label>Confirm Password</label>
        <input name='passwordConfirm' value={values.passwordConfirm}  onChange={ handleChange } onBlur={ handleBlur } />

        {errors.passwordConfirm && touched.passwordConfirm && ( <div className='error'> {errors.passwordConfirm} </div>)}

        <br />
        <br />

        <label>Age</label>
        <input name='age' value={values.age}  onChange={ handleChange } onBlur={ handleBlur } />

        { (values.age <= 14 && values.age !== "") && ( 
          <>
          <br />
          <br />
            <label>Parent Name</label>
            <input name='parentName' value={values.parentName}  onChange={ handleChange } onBlur={ handleBlur } />
          <br />
          <br />
            <label>Parent Surname</label>
            <input name='parentSurname' value={values.parentSurname}  onChange={ handleChange } onBlur={ handleBlur } />
          <br />
          <br />
            <label>Parent Mail</label>
            <input name='parentMail' value={values.parentMail}  onChange={ handleChange } onBlur={ handleBlur } />
          </>
        )}

        <br />
        <br />

        <button type="submit">Submit</button>

        <br />
        <br />

        { JSON.stringify(values) }
        </Form>
        </Formik>
        </>
        <>

        <Formik
          initialValues={initialValues2}
          validationSchema={validations2}
          onSubmit={ (values) => { console.log(values) } }
        >
          <Form>
        <label htmlFor="email">Email</label>
        <input name='email' value={values.email} onChange={ handleChange } onBlur={ handleBlur }/>

        {errors.email && touched.email && ( <div className='error'> {errors.email} </div>) }

        <br />
        <br />

        <label>Password</label>
        <input name='password' value={values.password}  onChange={ handleChange } onBlur={ handleBlur }/>

        {errors.password && touched.password && ( <div className='error'> {errors.password} </div>)}

        <br />
        <br />

        <label>Confirm Password</label>
        <input name='passwordConfirm' value={values.passwordConfirm}  onChange={ handleChange } onBlur={ handleBlur } />

        {errors.passwordConfirm && touched.passwordConfirm && ( <div className='error'> {errors.passwordConfirm} </div>)}

        <br />
        <br />

        <label>Age</label>
        <input name='age' value={values.age}  onChange={ handleChange } onBlur={ handleBlur } />

        <br />
        <br />

        <button type="submit">Submit</button>

        <br />
        <br />

        { JSON.stringify(values) }
        </Form>
        </Formik>
        </>
        {/* with useFormik */}
        {/* <form onSubmit={ handleSubmit }>

        <label htmlFor="email">Email</label>
        <input name='email' value={values.email} onChange={ handleChange } onBlur={ handleBlur }/>

        {errors.email && touched.email && ( <div className='error'> {errors.email} </div>) }

        <br />
        <br />

        <label>Password</label>
        <input name='password' value={values.password}  onChange={ handleChange } onBlur={ handleBlur }/>

        {errors.password && touched.password && ( <div className='error'> {errors.password} </div>)}

        <br />
        <br />

        <label>Confirm Password</label>
        <input name='passwordConfirm' value={values.passwordConfirm}  onChange={ handleChange } onBlur={ handleBlur } />

        {errors.passwordConfirm && touched.passwordConfirm && ( <div className='error'> {errors.passwordConfirm} </div>)}

        <br />
        <br />

        <label>Age</label>
        <input name='age' value={values.age}  onChange={ handleChange } onBlur={ handleBlur } />

        { (values.age <= 14 && values.age !== "") && ( 
          <>
          <br />
          <br />
            <label>Parent Name</label>
            <input name='parentName' value={values.parentName}  onChange={ handleChange } onBlur={ handleBlur } />
          <br />
          <br />
            <label>Parent Surname</label>
            <input name='parentSurname' value={values.parentSurname}  onChange={ handleChange } onBlur={ handleBlur } />
          <br />
          <br />
            <label>Parent Mail</label>
            <input name='parentMail' value={values.parentMail}  onChange={ handleChange } onBlur={ handleBlur } />
          </>
        )}

        <br />
        <br />

        <button type="submit">Submit</button>

        <br />
        <br />

        { JSON.stringify(values) }


        </form> */}
      
    </div>
  )
}
