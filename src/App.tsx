/* eslint-disable @typescript-eslint/no-shadow */
import * as React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Welcome from './pages/Welcome';
import NotFound from './pages/NotFound';
import Catalog from './pages/Catalog';
import CheckOut from './pages/CheckOut';
import Contacts from './pages/Contacts';
import SingleProduct from './pages/SingleProduct';

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
