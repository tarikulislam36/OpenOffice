import React, { useState } from 'react';

const App = () => {
  const [content, setContent] = useState('');

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <div>
      <textarea value={content} onChange={handleChange} />
      <div>{content}</div>
    </div>
  );
};

export default App;
