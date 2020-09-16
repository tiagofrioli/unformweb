import React, {InputHTMLAttributes, useEffect, useRef} from 'react';
import { useField } from '@unform/core';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
}

const  Input: React.FC<InputProps> = ({name, ...rest})=> {
    const inputRef = useRef(null); //cria uma referencia do elemento na DOM (uncontrolled form)
   // Hook que conecta o imput ao unform
    const {fieldName, registerField,defaultValue, error} = useField(name);

    // dispara a função registerField
    useEffect(()=> {
        registerField({
            name:fieldName,
            ref:inputRef.current,
            path:'value'
        })
    },[fieldName, registerField]);

    return (
        <div>
        <input ref={inputRef} {...rest}/>
          {error && <span style={{color: '#f00'}}>{error}</span>}
        </div>
    );
}

export default Input;

