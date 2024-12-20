import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("UpperCase was Clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = ()=>{
      console.log("LowerCase was Clicked");
      let newText = text.toLowerCase();
      setText(newText);
    }
    const handleClearClick = ()=>{
      console.log("Clear Text was Clicked");
      setText('');
    }
    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
    <>
      <div className="container">
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="MyBox" rows="8"></textarea>
            <br></br>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
          </div>
      </div>
      <div className="container my-2">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008*text.split(" ").length} mins taken to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  )
}
