import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h1>Not found page</h1>
      <Link to="/">Go Home</Link>
    </>
  );
}

export default NotFound;
