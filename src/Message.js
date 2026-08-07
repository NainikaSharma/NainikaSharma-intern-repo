import React, { useState } from 'react';

export default function Message() {
  const [text, setText] = useState('Hello, Focus Bear!');

  return (
    <div>
      <p>{text}</p>
      <button onClick={() => setText('Button clicked!')}>Change Message</button>
    </div>
  );
}
