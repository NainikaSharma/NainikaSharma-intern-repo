import React, { useState } from 'react';

function FormList() {
  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputText.trim() === '') return;

    setItems([...items, inputText]);
    setInputText('');
  };

  return (
    <div>
      <h2>My List</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter item"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default FormList;
