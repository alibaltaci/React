# Formik

https://formik.org/  --> Get Started --> Examples --> Basic

## Kurulum

cmd --> ``npm install formik --save``

## Örnek


    <h1>Sign Up</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
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
      </Form>
    </Formik>


- initialValues ile Field alanındaki name aynı olmalıdır. Id çok önemli değil.

# handleSubmit (işlemek) & handleChange

- Formik 'in bize vermiş olduğu form ve field componentlerini kullanmayalım, doğrudan HTML 'deki form ve input etiketlerini kullanalım.

- handleSubmit arrow function sayesinde onSubmit 'i çalıştırabiliriz.

- handleSubmit ile submit işlemini yakalayıp, submit fonksiyonunu çalıştırabiliriz.

- handleChange ile değişimleri tespit eder ve inputları initialValues ile ilişkilendirebiliriz.

- Özelleştirme gerektiren işlemlerde bu yöntemleri uygulamamız gerekebilir.

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

# Radio / Checkbox / Dropdown

## Radio

    <span>Male</span>
    <input type={"radio"} name='gender' value={"male"} onChange={ handleChange } checked={ values.gender === "male" }/>

    <span>Female</span>
    <input type={"radio"} name="gender" value={"female"} onChange={ handleChange } checked={ values.gender === "female" } />

- initialValues 'deki gender verisine göre seçili gender getirmek için checked özelliğini kullanmalıyız.

  `` checked={ values.gender === "female" } ``

## Checkbox

    <select name='country' value={values.country} onChange={ handleChange }>
      {/* <option></option> */}
      <option value={"tr"}>Turkey</option>
      <option value={"en"}>England</option>
      <option value={"usa"}>USA</option>
    </select>


# useFormik

- Daha sade işlemler için kullanılabilir.

- Callback (handleSubmit/Change) işlemlerinden kurtulabiliriz.

initialValues ve onSubit  useFormik yardımıyla aşağıdaki gibi oluşturulabilir.

      const {handleChange, handleSubmit, values} = useFormik({
        initialValues: {
          firstName: "",
          lastName: "",
          email: "",
          gender: "male",
          hobbies: [],
          country: ""
        },

        onSubmit: (values) => {
          console.log(values);
        }

Eğer aşağıdaki gibi formik tanımlanırsa `` formik.handleChange `` şeklinde de özellikler alınabilir.

      const formik = useFormik({
        initialValues: {
          firstName: "",
          lastName: "",
          email: "",
          gender: "male",
          hobbies: [],
          country: ""
        },

        onSubmit: (values) => {
          console.log(values);
        }
