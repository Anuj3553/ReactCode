import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event)=>{
    // console.log("On Change");
    setText(event.target.value);
  }

  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!!", "success");
  }

  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!!", "success");
  }

  const CopyText = ()=>{
    document.getSelection().removeAllRanges();
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!!", "success");
  }

  const handleClClick = ()=>{
    let text = "Do you want to delete the text";
    if (window.confirm(text) === true) {
      let newText = "";
      setText(newText);
    } 
    else {
      console.log("")
    }
    props.showAlert("Clear Text!!", "success");
  }
  
  const ClearSpace = ()=>{
    let updated_text = text.replace(/\s /g, '')
    setText(updated_text)
    props.showAlert("Extra Space removed!!", "success");
  } 

  const speak = () => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    const toogle = document.getElementById('toggle')
    if (toogle.textContent === "Speak") {
        toogle.innerHTML = "Stop"
        props.showAlert("Start Speak Text!!", "success");
    }
    else {
        toogle.innerHTML = "Speak"
        if (toogle.innerHTML === "Speak"){
            window.speechSynthesis.cancel()
          props.showAlert("Stop Speak Text!!", "success");
        }
    }
  }

  return (
    <>
    <div className="container" style={{color : props.mode==='dark'?'white':'black'}}>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
          <h1 className="mb-3">{props.heading}</h1>
        </label>
        <textarea className="form-control" value={text} style={{backgroundColor : props.mode==='dark'?'#4c5a6e':'white', color : props.mode==='dark'?'white':'black'}} id="myBox" rows="10" onChange={handleOnChange}></textarea>
      </div>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Upppercase</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" id="copyText" onClick={CopyText}>Copy Text</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={ClearSpace}>Space Clear</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClClick}>Clear Text</button>
      <button disabled={text.length === 0} type="submit" onClick={speak} className="btn btn-primary mx-2" id="toggle">Speak</button>
    </div>

    <div className="container my-3" style={{color : props.mode==='dark'?'white':'black'}}>
        <h1>Your text Summary</h1>
        <p>{text.split(" ").filter((element) =>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.08* text.split(" ").filter((element) =>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  );
}
