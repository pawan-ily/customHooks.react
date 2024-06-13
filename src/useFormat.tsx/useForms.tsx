import React, { useState,ChangeEvent } from "react";
interface FormProps{
    value:string ,
    handleChange :(e:ChangeEvent<HTMLInputElement>)=>void
};
export  function useForms(intialvalue:string) :FormProps{
    const [valuee,setValuee] =useState<string>(intialvalue);
    function handleChange(e :ChangeEvent<HTMLInputElement>)
    {
       setValuee(e.target.value)
    }
    const intialProps:FormProps ={
        value:valuee,
        handleChange:handleChange
    }
return  intialProps ;
} 