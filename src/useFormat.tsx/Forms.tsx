import React  from "react";
import { useForms } from "./useForms";
export default function Form(){
    const fistnameProps  = useForms('pawan');
    const lstnameProps = useForms('kumar')
    return(
        <>
      <p>
       { fistnameProps.value}
      </p>
      <input {...fistnameProps} />
        </>
    )
}