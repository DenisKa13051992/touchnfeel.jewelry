import * as React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.scss';
import Header from 'widgets/Header/Header';
import Footer from 'widgets/Footer/Footer';
import Welcome from 'pages/Welcome';
import NotFound from 'pages/NotFound';
import Shop from 'src/pages/Shop';
import CheckOut from 'pages/CheckOut';
import Contacts from 'pages/Contacts';
import SingleProduct from 'pages/SingleProduct';
import About from 'src/pages/About';
import Blog from 'src/pages/Blog';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/CheckOut" element={<CheckOut />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/SingleProduct" element={<SingleProduct />} />
          <Route path="/About" element={<About />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
