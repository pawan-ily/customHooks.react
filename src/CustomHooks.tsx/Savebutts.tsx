import React from 'react'
import { useOnlinestats } from './Online'

export default function Savebutts() {
    const online  = useOnlinestats();
    function handleSaveClick() {
        console.log('✅ Progress saved');
      }
    
  return (
 <button disabled={!online} onClick={handleSaveClick}>
 {online ? 'Save progress' : 'Reconnecting...'}
</button>
  )
}
