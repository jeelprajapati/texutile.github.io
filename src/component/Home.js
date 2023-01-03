import React,{useState} from 'react'

export default function Home(props) {
  const[text,settext]=useState("");
 // let num=0;
  // const[name,setname]=useState("uppercase");
  const changeuper=()=>{
   let newtext=text.toUpperCase();
   settext(newtext);
}
const changelower=()=>{
  let newtext=text.toLowerCase();
  settext(newtext);
}
  const change=(event)=>{
   settext(event.target.value);
   // num++
  }
  const copybtn=()=>{
    let text=document.getElementById('floatingTextarea');
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const removespaces=()=>{
    let newtext=text.split(/[ ]+/);
    settext(newtext.join(' '));
  }
  return (
    <>
    <div className={`mainbg bg-${props.mode==='dark'?'light':'dark'}`}>
        <div className="mx-auto">
        <div class="form-floating">
        <textarea class="height my-2"placeholder='enter text' value={text} onChange={change} id="floatingTextarea"></textarea>
        </div>
        <button type="button"onClick={changeuper} class="btn btn-primary mx-1">uppercase</button>
        <button type="button "onClick={changelower} class="btn btn-primary ">lowercase</button>
        <button type="button "onClick={copybtn} class="btn btn-primary mx-1">copy</button>
        <button type="button "onClick={removespaces} class="btn btn-primary">Removespaces</button>
        <h2 className={`text-${props.mode}`}>Textsummary</h2>
        <p className={`text-${props.mode}`}>{text.split(" ").length-1} words and {text.length} characters</p>
        <h3 className={`text-${props.mode}`}>Preview text</h3>
        <p className={`text-${props.mode}`}>{text===''?'preview text here':text}</p>
        </div>
        
      
    </div>
    </>
  )
}
