import React from 'react';

function Button({ name }) {
  return (
    <button
      type="button"
      className={`px-10 py-3.5 text-white bg-brown border-solid border rounded text-base leading-6 font-semibold button-${name}`}
    >
      {name}
    </button>
  );
}

export default Button;
