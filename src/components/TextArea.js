import React, { useState } from 'react'
export default function TextArea(props){
  const [text, setText] = useState('');
  const onChange=(event)=>{
    setText(event.target.value);
  }
  const onClick=()=>{
    let result = text.toUpperCase();
    setText(result)
    
    props.showAlert(" Successfully !", "success");
  }
  const onLower=()=>{
    let result = text.toLowerCase();
    setText(result)
    props.showAlert(" Successfully !", "success");
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
}
  const onDelete=()=>{
    setText('');
    props.showAlert(" Your Text Was Cleared!", "danger");
  }
 const copy=()=>{
  // Get the text field
  var copyText = document.getElementById("exampleFormControlTextarea1");
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
}
const download=()=> {
let text = document.querySelector("#exampleFormControlTextarea1");
    let valueinput = text.value

    let blobdtMIME =
        new Blob([valueinput], { type: "text/plain" })
    let url = URL.createObjectURL(blobdtMIME)
    let anele = document.createElement("a")
    anele.setAttribute("download", "Edited-Text");
    anele.href = url;
    anele.click();
    console.log(blobdtMIME)
}
function titleCase() {
     let result = text.toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

    setText(result)
}

  return(
    <>
    <div className="container my-4" >
      <h5>ENTER YOUR TEXT BELOW...</h5>
    <div className="form-group">
     <textarea placeholder="Enter Your Text Here......." className="form-control" aria-label="Search" id="exampleFormControlTextarea1" value={text} onChange={onChange}
     rows="5"></textarea>
  </div>
     <button className="btn btn-primary my-1" onClick={onClick}>Upper</button>
     <button className="btn btn-primary mx-1 my-1" onClick={onLower}>Lower</button>
     <button className="btn btn-primary mx-1 my-1" onClick={titleCase}>Title</button>
     <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Spaces</button>
     <button className="btn btn-primary mx-1 my-1" onClick={download}>Save File</button>
     <button className="btn btn-primary mx-1 my-1" onClick={copy}>Copy Text</button>
     <button className="btn btn-danger mx-1 my-1" onClick={onDelete} >Delete</button>
     <hr/>
      
    </div>
    <div className="container my-3">
      <h5>INFO ABOUT YOUR TEXT..</h5>
     <hr/>
      <p className="serif">{text.split(" ").length} WORD'S AND {text.length} CHARACTER'S ..</p>
     <hr/>
      <p className="serif">{0.08*text.length} SECOND'S NEED TO READ THIS TEXT</p>
     <hr/>
      <h5>PREVIEW</h5>
     <hr/>
      <p>{text.length>0?text:'Enter Your Text To Up And Show Results'}</p>
     <hr/>
    </div>
    </>
    )
}