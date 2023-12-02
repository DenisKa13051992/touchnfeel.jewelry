import React from 'react';

function Button(data: { name: string; color: string }) {
  const { name, color } = data;
  return (
    <button
      type="button"
      className={`w-min whitespace-nowrap px-10 py-3.5 text-white bg-${color} border-solid border border-transparent rounded text-largeButton button-${name}`}
    >
      {name}
    </button>
  );
}

export default Button;
