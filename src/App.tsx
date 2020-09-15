import React from 'react';
import { Form} from '@unform/web';
import {Scope} from '@unform/core';
import Input from './components/Form/Input';
import './App.css';

function App() {

  function handleSubmit(data:object){
    console.log(data);
  }

  return (
    <div className="App">
    <h1>Hello World</h1>
    <Form onSubmit={handleSubmit}>
      <Input name="name" />
      <Input type="email" name="email" />

      <Scope path="address">
        <Input name="street" />
        <Input  name="number" />
        <Input  name="city" />
      </Scope>
   
      <button type="submit">Enviar</button>
    </Form>
    </div>
  );
}

export default App;
