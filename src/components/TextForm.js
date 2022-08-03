import React, { useState } from "react";

const TextForm = (props) => {
  const handleUpClick = () => {
    // console.log(this);
    // console.log("new clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Done', 'success')
  };
  const handleLoClick = () => {
    // console.log(this);
    // console.log("new clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Done', 'success')

  };
  // const trimSpaces = () => {
    
  //   // console.log("new clicked");
  //   let newText = text.split(' ')
  //   for (text of newText){
  //     console.log(test)
  //   }

    
    
  // };
  const handleOnChange = (event) => {
    // console.log("change nhi chlega lekin kyu");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter the text");
  return (
    <div>
      <div
        className="container mb-3"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1>{props.heading}</h1>

        <textarea
          className="form-control"
          id="myBox"
          value={text}
          style={{
            backgroundColor: props.mode === "light" ? "white" : "grey",
            color: props.mode === "light" ? "black" : "white",
          }}
          onChange={handleOnChange}
          rows="8"
        ></textarea>
        <button className="btn btn-primary btn-sm mx-2" onClick={handleUpClick}>
          ConvertoUpperCase
        </button>
        <button className="btn btn-primary btn-sm" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        {/* <button className="btn btn-primary btn-sm mx-2" onClick={trimSpaces}>
          Remove Spaces
        </button> */}
      </div>
      <div className="container"  style={{
          color: props.mode === "light" ? "black" : "white",
        }}>
        <h1>Your text summary</h1>
       
        <p>
          {text.length>0?text.split(" ").length:0} word and {text.length}
        </p>
        <h1>Preview</h1>
        <p>{text.length>0?text:'Please enter some text in the textbox to preview it here'} </p>
      </div>
    </div>
  );
};

export default TextForm;
