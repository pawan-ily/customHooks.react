import{ useState }from "react"
import { useEffect } from "react"
import React from "react"
export function useOnlinestats(){
    const [online,setOnline] =useState<boolean>(navigator.onLine);
    useEffect(()  =>{
        function handleonline(){
            setOnline(true)
        }
        function handleoffline(){
            setOnline(false)
        }
        window.addEventListener('online',handleonline)
        window.addEventListener('offline',handleoffline)
        return ()=>{
window.addEventListener('online',handleonline) ;window.addEventListener('offline',handleoffline)
        }
        
    },[]
)
return online;
}