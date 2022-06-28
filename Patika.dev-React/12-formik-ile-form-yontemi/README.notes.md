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


# Form Validasyonları

- Validasyon işlemlerini "yup js" ile yapıyoruz.

- Yup gitHub Linki: https://github.com/jquense/yup

Yup Kurulum: cmd --> `` npm i yup ``

- src --> create components folder --> Signup.js

- İşlemlerimizi yukarıdaki dizinde yapalım ve App.js 'ye indirerek bu componentimizi kullanalım.

- components --> create validation.js ( validasyon tanımlarımızı yapacağımız dosya ).

Yup import: validation.js `` import * as yup from "yup" ``

Güncel: `` import { object, string, number, date, InferType } from 'yup'; ``

- indirme işleminden sonra bir şema yazacağız, bu şema sayesinde hangi imputlarımızın hangi kurallara tabi olduğunu belirtebiliyoruz.

Şema:

    let userSchema = object({
      name: string().required(),
      age: number().required().positive().integer(),
      email: string().email(),
      website: string().url().nullable(),
      createdOn: date().default(() => new Date()),
    });

`` required() `` zorunlu alan.
`` min() - max() `` karakter sayısı belirtmek için.

...

- validasyon dosyamızı Signup.js 'ye indirdikten sonra useFomik altında bulunan `` validationSchema `` adındaki özelliğimize indirdiğimiz `` validasyon `` işlemlerini verebiliriz.

      const {handleChange, handleSubmit, values} = useFormik({
        initialValues: {
          email: "",
          password: "",
          passwordConfirm: ""
        },
    
        onSubmit: (values) => {
          console.log(values);
        },

        validationSchema: validations
      });

import işlemimizi doğrudan `` import validationSchema from './validations'; `` şeklinde yaparsak `` validationSchema `` yazmamız da yeterli olacaktır.

- Doğru eşleştirme için initialVales 'deki keyler ile şemadaki keyler aynı olmalıdır.


# Hata Mesajlarının Gösterilmesi (errors - touched - handleBlur) 

- Errors tanımı altında yer alan keylerden bir hata meydana gelirse, bunları errors ile yakalayabiliriz.

`` const { errors } import "useFormik"; ``

- İlgili input 'a daha önce focus (touch) oluş mu? kontrolünü yaparak, uyrının sadece ilgili alana gösterilmesini sağlayabiliriz.

`` const { touched } import "useFormik"; ``

- uyarının focus 'dan çıkıldığı anda gösterilmesini istersek onBlur özelliğini kullanabiliriz.

`` const { handleBlur } import "useFormik"; ``

        <label htmlFor="email">Email</label>
        <input name='email' value={values.email} onChange={ handleChange } onBlur={ handleBlur }/>

        {errors.email && touched.email && ( <div className='error'> {errors.email} </div>) }

- yup 'un bize veridiği mesajlar yerine kendi mesajlarımızı gösterelim.

```
    let validations = object({
        email: string().email("Geçerli bir mail giriniz.").required("Zorunlu alan."),
        password: string().min(5, "Parolanız en az 5 karakterden oluşmalıdır.").required("Zorunlu alan."),
        passwordConfirm: string().oneOf([ref("password")], "Girdiğiniz parolalar aynı olmak zorunda.").required("Zorunlu alan."),
      });
```

# Kazanımlar 

- yup ve formik farklı kütüphaneler olmasına rağmen enteğre olarak çalışabilmektedirler.

- Formik ile yaptığımız aynı işlemleri state yapısını kullanarak da yapabliriz fakat zaman kaybı, fazla kod, daha fazla efor, yazılan kodun bakımının karmaşık olması gibi dezavantajları vardır.

- Formik veya benzeri çözümleri kullanmamızın bir diğer sebebi de, state kullanarak yaptığınız form kontrollerinde state her değiştiğinde component tekrardan render edilir. Formik kullanarak bunun önüne geçmiş oluyoruz. 

- Formik kullanmak bazen daha maliyetli olabilir. Basik formlarda setState kullanılarak da yapılabilir.