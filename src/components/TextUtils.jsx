import React, { useState } from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';

function TextUtils(props) {
  const [text, settext] = useState('');
  const [wordCount, setWordCount] = useState(0);  
  const [charCount, setCharCount] = useState(0);  
  const [copySuccess, setCopySuccess] = useState('');
  const [darkMode, setDarkMode] = useState(false); 

  const handleOnChange=(e)=>{
    settext(e.target.value);
  };
  
  const handleUpCase=()=>{
    let newText = text.toUpperCase();
    settext(newText)
  };
  const handlelowerCase=()=>{
    let newText = text.toLowerCase();
    settext(newText)
  };
  const handleClearText=()=>{
    let newText =("");
    settext(newText);
    setWordCount(0);    
    setCharCount(0);    
    setCopySuccess('')
  };
  const handleCount=()=>{
    countWords();
    countChar();
  };
  
  const countWords = () => {
    let newText = text.trim().split(/\s+/).filter((word) => word !== ""); 
    setWordCount(newText.length);  
  };
  const countChar=()=>{
     setCharCount(text.length)
  };
  // Copy text to clipboard
  const copyToClipboard = () => {
    if (text.length > 0) {
      navigator.clipboard.writeText(text)
        .then(() => {
          setCopySuccess('Text copied to clipboard!'); 
          setTimeout(() => {
            setCopySuccess('');
          },1000);
        })
        .catch((err) => {
          setCopySuccess('Failed to copy text');  
          setTimeout(() => {
            setCopySuccess('');
          },1000);
        });
    } else {
      setCopySuccess('Nothing to copy');  
      setTimeout(() => {
        setCopySuccess('');
      },1000);
    };
    
  };
  // Toggle dark mode
  const toggleMode = () => {
    setDarkMode(!darkMode);  
  };
  const appStyle = {
    backgroundColor: darkMode ? 'black' : '#fff',
    color: darkMode ? '#fff' : '#000',
    transition: 'all 0.3s ease',
    minHeight: '100vh',
    padding: '20px',
  };
  const textareaStyle = {
    backgroundColor: darkMode ? '#555' : '#fff',
    color: darkMode ? 'white' : 'black',
    border:darkMode ? '2px solid white' : '2px solid black',
    
  };
  const toggleButtonStyle = {
    position: 'absolute', 
    top: '1px',          
    right: '20px',        
    zIndex: 1000,  
    color: darkMode ? 'white' : 'black',
    backgroundColor: darkMode ? '#555' : 'white',
    border:darkMode ? '3px solid black' : '2px solid black',   
    borderRadius:'10px'  
  };



  return (
      <>
       <div className="container my-3" style={appStyle}>
      <h1 className='p-3 font-semibold text-3xl'>{props.title}</h1>
      <textarea
       className="form-control mt-9" 
       style={textareaStyle} 
       value={text}
       placeholder='Enter Your Text' 
       onChange={handleOnChange}
        id="myBox" 
        rows="8">

        </textarea>
      <button className="btn btn-primary mt-3" onClick={handleUpCase}>Convert to Uppercase</button>
      <button className="btn btn-primary mt-3 ml-5" onClick={handlelowerCase}>Convert to Lowercase</button>
      <button className="btn btn-primary mt-3 ml-5" onClick={handleClearText}>Clear Text</button>
      <button className="btn btn-primary mt-3 ml-5" onClick={handleCount}>Count words & char</button>
      <button className="btn btn-primary mt-3 ml-5"
       onClick={copyToClipboard}>Copy Text</button>
      <button className="btn btn-secondary mt-3 ml-3"
      style={toggleButtonStyle} 
      onClick={toggleMode}>
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>  
      <h3 className='mt-5 font-semibold text-xl'>Your Text Summary</h3>
      <p>{wordCount}  words {charCount} Character</p> 
      <h3 className='mt-2 font-normal'>  Preview</h3>
      <div className="div">{text}</div>
      {copySuccess && <p>{copySuccess}</p>}
    </div>
       </>
  )
}

export default TextUtils