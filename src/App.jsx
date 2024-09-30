

import React from 'react'
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

import TextUtils from './components/textUtils';
function App() {

  return (
    <>
    <h1 className="text-center font-extrabold text-5xl">TextUtils App</h1>
     
    <TextUtils title="Analyse your text"/>
    </>
  )
}

export default App