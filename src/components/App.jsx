import React, { useState } from "react";

function App() {
  const [name, updateList] = useState("");
  const [Items, setItems] = useState([]);

  function newList(event) {
    const newValue = event.target.value;
    updateList(newValue);
  }

  function addItem(event) {
    setItems(prevItems => {
      return [...prevItems, name];
    });
    updateList("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={newList} type="text" name="newItem" value={name} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {Items.map(todoItem => {
            return <li>{todoItem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
