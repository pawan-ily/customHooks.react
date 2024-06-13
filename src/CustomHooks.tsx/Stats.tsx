import React from "react";
import {  useOnlinestats } from "./Online";
export default function Stats(){
    const online =useOnlinestats()
    return(
        <>
        <h1>{online ? '✅ Online' : '❌ Disconnected'}</h1>
      
        </>
    )
}