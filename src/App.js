
import React, { useState } from 'react';
import './App.css';

const Example = () => {
  // Declare a new state variable, which we'll call "count"
  const [text, setText] = useState('');


  return (
    <div>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
    </div>
  );
}

export default Example;
