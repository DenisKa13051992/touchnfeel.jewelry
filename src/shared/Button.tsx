import React from 'react';

function Button(data: { name: string }) {
  const { name } = data;
  return (
    <button
      type="button"
      className={`px-10 py-3.5 text-white bg-brown border-solid border border-transparent rounded text-base leading-6 font-semibold button-${name}`}
    >
      {name}
    </button>
  );
}

export default Button;
