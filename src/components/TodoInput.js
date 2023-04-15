import React, {useState} from "react";


function TodoInput() {
    const [inputText, setInputText] = useState('');
  return <div> 
    <input type="text" className="input-box-todo" placeholder="Enter your Todo here"
    onchange= {e=>{
        setInputText(e.target.value)}}
        />
    

    <button className="add-btn">+</button>
    <div>{inputText}</div>
    </div>
}

export default TodoInput;
