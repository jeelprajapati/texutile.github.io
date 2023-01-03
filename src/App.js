// import logo from './logo.svg';
import React,{useState} from 'react'
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';

function App() {
  const[mode,setmode]=useState('light');
  const darkmode=()=>{
    if(mode==="light"){
      setmode('dark');
    }
    else{
        setmode('light');
    }
  }
  return (
  <>
  <Navbar title="wordpress"darkmode={darkmode} mode={mode}/>
  <Home mode={mode}/>
</>
  );
}

export default App;
