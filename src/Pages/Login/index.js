import React, { useState } from "react";
import { Container, Form } from "./styles";
import Input from "../../Components/Input/index";
import Btn from "../../Components/Btn/index";
import { validatorEmail, validatorPassword } from "../../Utils/validator";
import UserService from "../../Services/UserService";

const userService = new UserService()

const Login = () => {
  const[loading, setLoading] = useState(false)
  const [form, setForm] = useState([])

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true)
      const response = await userService.login(form)
      console.log('response do Login', response )
      if(response === true) {
        alert('usuário Logado')
      }
      alert('Login')
      setLoading(false)
    } catch (error) {
      alert('Algo deu errado com o Login' + error)
    }
  }
  
  const handleChange = (event) => {
    console.log('Digitando...', event.target.name, event.target.value)
    setForm({...form, [event.target.name]: event.target.value})
  }

  const validatorInput = () =>{
    return validatorEmail(form.email) && validatorPassword(form.password)
} 
console.log(validatorInput())

return ( 
<Container>
  <Form>
  <h1>Faça o seu Login</h1>
    <Input
      name='email'
      placeholder='Digite o seu e-mail'
      onChange={handleChange}
      type='email'
    />
    <Input
      name='email'
      placeholder='Digite a sua senha'
      onChange={handleChange}
      type='password'
    />
    <Btn
    type='submit'
    text='Entrar!'
    onClick={handleSubmit}
    disabled={loading === true || !validatorInput()}
    />
    <div>
      <p>Não possui conta?</p>
      <a>Cadastrar</a>
    </div>
  </Form>
</Container>
   );
}
 
export default Login;