import React from 'react';

function Button(data: { name: string; color: string }) {
  const { name, color } = data;
  return (
    (color === 'black' && (
      <button
        type="button"
        className={`w-min whitespace-nowrap px-10 py-3.5 text-white bg-black border-0 rounded text-largeButton button-${name}`}
      >
        {name.toUpperCase()}
      </button>
    )) || (
      <button
        type="button"
        className={`w-min whitespace-nowrap px-10 py-3.5 text-white bg-brown border-0 rounded text-largeButton button-${name}`}
      >
        {name.toUpperCase()}
      </button>
    )
  );
}

export default Button;
