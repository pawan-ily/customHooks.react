import React from "react"
import { useState,useEffect } from "react"
export default function Qw(){
    const [online,setIOnline] =useState<boolean>(true);
    useEffect(()=>{
        function handleonline(){
            setIOnline(true)
        }
        function handleoffline(){
            setIOnline(false)
        }
        window.addEventListener('online',handleonline)
        window.addEventListener('online',handleoffline)
        return ()=>{
window.addEventListener('online',handleonline) ;window.addEventListener('online',handleoffline)
        }

    },[])

  function handleSaveClick() {
    console.log('✅ Progress saved');
  }

    return(
        <>
        <p>
        <button  disabled={!online}  onClick={handleSaveClick} >
            {
                online? 'Save progress' : 'Reconnecting...'
            }
        </button>
            </p></>
    
    )}