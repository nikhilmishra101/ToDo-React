import React from "react";

function TODOItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>;
    </div>
  );
}

export default TODOItem;
