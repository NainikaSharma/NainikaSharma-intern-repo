import React, { useState } from 'react';
export default function FormList() {
  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputText.trim() === '') return;
    setItems([...items, inputText]);
    setInputText('');
  };
  return (
    <div>
      <h2>My List</h2>
      <p>
        Add one item at a time. Your list stays here while this page is open.
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="list-item">New item</label>
        <div className="inline-form">
          <input
            id="list-item"
            type="text"
            placeholder="Enter item"
            value={inputText}
            onChange={(event) => setInputText(event.target.value)}
          />
          <button type="submit">Add</button>
        </div>
      </form>
      {items.length === 0 ? (
        <div className="list-empty">
          <p>Your list is empty. Add your first item above.</p>
        </div>
      ) : (
        <ul className="item-list" aria-live="polite">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
