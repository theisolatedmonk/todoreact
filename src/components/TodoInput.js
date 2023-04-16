import React, { useState } from "react";

function TodoInput(props) {
  const [inputText, setInputText] = useState("");
  const handleEnterPess = (e) => {
    if (e.keyCode === 13) {
      props.addList(inputText);
      setInputText("");
    }
  };
  return (
    <div>
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your Todo here"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        onKeyDown={handleEnterPess}
      />

      <button
        className="add-btn"
        onClick={() => {
          props.addList(inputText);
          setInputText("");
        }}
      >
        +
      </button>
      {/* <div>{inputText}</div> */}
    </div>
  );
}

export default TodoInput;
