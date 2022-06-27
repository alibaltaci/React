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
