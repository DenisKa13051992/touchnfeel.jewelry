import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1>Home page</h1>
      <Link to="/404">Go 404</Link>
    </>
  );
}

export default Home;
