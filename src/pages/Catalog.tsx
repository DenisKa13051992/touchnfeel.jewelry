import React from 'react';
import { Link } from 'react-router-dom';

function Catalog() {
  return (
    <>
      <h1>Catalog page</h1>
      <Link to="/">Go to Welcome page</Link>
    </>
  );
}

export default Catalog;
