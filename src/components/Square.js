import React from "react";

function Square({ index, value, setValue = f => f, winningIndex }) {
  return (
    <button
      className="square"
      onClick={() => {
        setValue(index);
      }}
    >
      {value}
    </button>
  );
}

export default Square;
