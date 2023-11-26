import React from 'react';
import { Link } from 'react-router-dom';

function checkAPI() {
  fetch(
    'https://my-json-server.typicode.com/DenisKa13051992/JSON-server-API-jewelry/profile'
  )
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function Welcome() {
  checkAPI();
  return (
    <>
      <h1>Welcome page</h1>
      <Link to="/404">Go 404</Link>
      <Link to="/SingleProduct">Go Single product page</Link>
      <Link to="/CheckOut">Go CheckOut page</Link>
    </>
  );
}

export default Welcome;
