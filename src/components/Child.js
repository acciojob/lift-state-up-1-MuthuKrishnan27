import React from 'react';

const Child = ({ showModal, onButtonClick }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={onButtonClick}>Show Modal</button>
      {showModal && <div><h1>Model Content</h1><p>This is the modal content</p></div>}
    </div>
  );
};

export default Child;
