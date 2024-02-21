import * as React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.scss';
import Header from 'widgets/Header/Header';
import Footer from 'widgets/Footer/Footer';
import Welcome from 'src/pages/Welcome/Welcome';
import NotFound from 'pages/NotFound';
import Shop from 'src/pages/Shop';
import Cart from 'src/pages/Cart';
import Contacts from 'pages/Contacts';
import SingleProduct from 'pages/SingleProduct';
import OurStory from 'src/pages/About/OurStory';
import FairPricing from 'src/pages/About/FairPricing';
import Blog from 'src/pages/Blog';
import FavoriteProducts from 'src/pages/FavoriteProducts';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/SingleProduct" element={<SingleProduct />} />
        <Route path="/OurStory" element={<OurStory />} />
        <Route path="/FairPricing" element={<FairPricing />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Favorites" element={<FavoriteProducts />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
