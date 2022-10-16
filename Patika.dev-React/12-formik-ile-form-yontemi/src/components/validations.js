// yup import 
import {  object, ref, string} from "yup";

// schema 
// let validations = object({
//     email: string().email().required(),
//     password: string().min(5).required(),
//     passwordConfirm: string().oneOf([ref("password")]).required(),
//   });

// message
let validations = object({
    email: string().email("Geçerli bir mail giriniz.").required("Zorunlu alan."),
    password: string().min(5, "Parolanız en az 5 karakterden oluşmalıdır.").required("Zorunlu alan."),
    passwordConfirm: string().oneOf([ref("password")], "Girdiğiniz parolalar aynı olmak zorunda.").required("Zorunlu alan."),
    age: string().required(),
    parentName: string(),
    parentSurname: string(),
    parentMail: string().email()
  });
  
export default validations; 