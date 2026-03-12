import * as React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.scss';
import Header from 'widgets/Header/Header';
import Footer from 'widgets/Footer/Footer';
import Welcome from 'src/pages/Welcome/Welcome';
import NotFound from 'pages/NotFound';
import Catalog from 'src/pages/Catalog';
import Cart from 'src/pages/Cart';
import Contacts from 'pages/Contacts';
import SingleProduct from 'pages/SingleProduct';
import OurStory from 'src/pages/About/OurStory';
import FairPricing from 'src/pages/About/FairPricing';
import Sustainability from 'src/pages/About/Sustainability';
import CareGuide from 'src/pages/About/CareGuide';
import Blog from 'src/pages/Blog';
import FavoriteProducts from 'src/pages/FavoriteProducts';
import Bracelets from 'src/pages/Bracelets';
import Pendants from 'src/pages/Pendants';
import Brooches from 'src/pages/Brooches';
import Chains from 'src/pages/Chains';
import EarRings from 'src/pages/EarRings';
import NeckLace from 'src/pages/NeckLace';
import Rings from 'src/pages/Rings';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/Catalog" element={<Catalog />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/SingleProduct" element={<SingleProduct />} />
        <Route path="/OurStory" element={<OurStory />} />
        <Route path="/FairPricing" element={<FairPricing />} />
        <Route path="/Sustainability" element={<Sustainability />} />
        <Route path="/CareGuide" element={<CareGuide />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Favorites" element={<FavoriteProducts />} />
        <Route path="/Bracelets" element={<Bracelets />} />
        <Route path="/Brooches" element={<Brooches />} />
        <Route path="/Chains" element={<Chains />} />
        <Route path="/EarRings" element={<EarRings />} />
        <Route path="/NeckLace" element={<NeckLace />} />
        <Route path="/Pendants" element={<Pendants />} />
        <Route path="/Rings" element={<Rings />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
