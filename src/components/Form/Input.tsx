import React, {InputHTMLAttributes, useEffect, useRef} from 'react';
import { useField } from '@unform/core';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
}

const  Input: React.FC<InputProps> = ({name, ...rest})=> {
    const inputRef = useRef(null);
    const {fieldName, registerField,defaultValue, error} = useField(name);

    useEffect(()=> {
        registerField({
            name:fieldName,
            ref:inputRef.current,
            path:'value'
        })
    },[fieldName, registerField]);
    return (
        <input ref={inputRef} {...rest}/>

    );
}

export default Input;

