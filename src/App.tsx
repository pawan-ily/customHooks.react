import React from 'react';
import logo from './logo.svg';
import './App.css';
import Status from './screens/Status'
import Qw from './Disabling/Qw';
import Savebutts from './CustomHooks.tsx/Savebutts';
import Stats from './CustomHooks.tsx/Stats';
import Form from './useFormat.tsx/Forms';

function App() {
  return (
    <>
    <Status/>
    <Qw/>
    <Stats/>
    <Savebutts/>
  <Form/>
    </>
  )
    
}

export default App;
