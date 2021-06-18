import React, { useState } from "react";
import "./TodoItem.css";

function Todo(props) {
  const [isComplete, setIsComplete] = useState(false);
  function toggleComplete() {
    setIsComplete(!isComplete);
  }
  const { content } = props;
  return (
    <div
      onClick={() => toggleComplete()}
      style={{
        textDecoration: isComplete ? "line-through" : "none",
        cursor: "pointer",
      }}
    >
      {content}
    </div>
  );
}

export default Todo;
