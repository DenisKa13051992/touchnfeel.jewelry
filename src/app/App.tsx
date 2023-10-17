import * as React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.scss';
import Header from 'widgets/Header/Header';
import Footer from 'widgets/Footer/Footer';
import Welcome from 'pages/Welcome';
import NotFound from 'pages/NotFound';
import Catalog from 'pages/Catalog';
import CheckOut from 'pages/CheckOut';
import Contacts from 'pages/Contacts';
import SingleProduct from 'pages/SingleProduct';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/Catalog" element={<Catalog />} />
          <Route path="/CheckOut" element={<CheckOut />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/SingleProduct" element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
