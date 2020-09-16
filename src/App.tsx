import React, {useRef} from 'react';
import { Form} from '@unform/web';
import {Scope, SubmitHandler, FormHandles} from '@unform/core';
import Input from './components/Form/Input';
import './App.css';
import * as Yup from 'yup';
import "./style.css";

interface FormData {

  name: string;

};

function App() {

  const formRef = useRef<FormHandles>(null);

   const handleSubmit: SubmitHandler<FormData> = (data, {reset}) => {

    //validação campos com Yup
  //   try{
    
  //   const schema = Yup.object().shape({
  //     name: Yup.string().required('O nome é obrigatorio'),
  //     email: Yup.string().email('Digite um e-mail valido').required('O email é obrigatorio'),
  //     address: Yup.object().shape({
  //       city: Yup.string().min(2, 'Minimo 3 caracteres').required('A cidade é obrigatoria')
  //     })
  //   });

  //    schema.validate(data,{
  //     abortEarly: false, // faz a validação acima completa
  //   })

  //   console.log(formRef);

  //   reset();
  // }catch(err){
  //   //erros de validação
  //   if(err instanceof Yup.ValidationError){
  //    const errorMessages = {};

  //    err.inner.forEach(error => {
  //      errorMessages[error.path] = error.message;
  //    })

  //    formRef.current?.setErrors(errorMessages);
  //   }
  // }

    // validação campos
    if(data.name ===""){
      formRef.current?.setErrors({
        name: 'O nome é obrigatorio',
        email: 'O email é obrigatorio',
        address:{
          street: 'A rua é obrigatoria',
          number: 'O numero é obrigatorio',
          city: 'A cidade é obrigatoria',
        }
      });
    }

    reset();
    
  } 
  

  return (
    <div className="App">
    <h1>Cadastro</h1>
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Input name="name" placeholder="Nome" />
      <Input type="email" name="email" placeholder="E-mail" />

      <Scope path="address">
        <Input name="street" placeholder="Rua" />
        <Input  name="number" placeholder="Número" />
        <Input  name="city" placeholder="Cidade" />
      </Scope>
   
      <button type="submit">Enviar</button>
    </Form>
    </div>
  );
}

export default App;
