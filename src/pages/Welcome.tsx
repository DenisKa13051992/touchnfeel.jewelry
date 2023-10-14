import React from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <>
      <h1>Welcome page</h1>
      <Link to="/404">Go 404</Link>
      <Link to="/Catalog">Go Catalog page</Link>
      <Link to="/SingleProduct">Go Single product page</Link>
      <Link to="/CheckOut">Go CheckOut page</Link>
      <Link to="/Contacts">Go Contacts page</Link>
    </>
  );
}

export default Welcome;
