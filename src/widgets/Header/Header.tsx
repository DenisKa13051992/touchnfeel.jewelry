import React, { useState } from 'react';
import './header.scss';
import MoneyChanger from 'assets/line-header.svg';
import Monushe from 'assets/Monushe.svg';
import SearchLogo from 'assets/search-logo.svg';
import UserLogo from 'assets/user-logo.svg';
import HeartLogo from 'assets/heart-logo.svg';
import CartLogo from 'assets/cart-logo.svg';
import { Link } from 'react-router-dom';
import HeaderHoverList from 'src/shared/HeaderHoverList';

function Header() {
  const [openList, setOpenList] = useState('');
  return (
    <header className="header flex flex-col w-full h-32">
      <div className="header__promotion flex flex-row w-full bg-black h-11 justify-center items-center text-xs text-white font-normal">
        <div className="header-promotion-content w-cont flex flex-row justify-center items-center relative">
          <h3 className="header__promotion-title">
            FREE SHIPPING OVER 50 EURO
          </h3>
          <div className="header__promotion-money absolute right-0 flex flex-row justify-center items-center gap-1">
            <p className="header__money">€ EUR</p>
            <div className="header__money-changer">
              <img src={MoneyChanger} alt="To change money" />
            </div>
          </div>
        </div>
      </div>
      <div className="header__panel flex flex-row w-full justify-center items-center">
        <div className="header__panel-content w-cont h-full flex flex-row justify-center items-center">
          <div className="header__panel-logo h-full flex flex-row justify-center items-center">
            <Link to="/">
              <img src={Monushe} alt="Monushe" />
            </Link>
          </div>
          <div className="header__panel-grid-space-one" />
          <nav className="header__panel-navigation flex flex-row h-full justify-center items-center">
            <ul className="header__panel-navigation-list flex flex-row w-full justify-between items-center">
              <li
                className="header__panel-navigation-about relative"
                onMouseLeave={() => {
                  setOpenList('');
                }}
              >
                <Link
                  to="About"
                  onMouseEnter={() => {
                    setOpenList('About');
                  }}
                  onClick={() => {
                    setOpenList('');
                  }}
                >
                  ABOUT
                </Link>
                {openList && (
                  <HeaderHoverList
                    aboutLinks={[
                      'OUR STORY',
                      'FAIR PRICING',
                      'SUSTAINABILITY',
                      'CARE GUIDE & WARRANTY',
                    ]}
                  />
                )}
              </li>
              <li className="header__panel-navigation-shop">
                <Link to="Shop">SHOP</Link>
              </li>
              <li className="header__panel-navigation-contacts">
                <Link to="Contacts">CONTACTS</Link>
              </li>
              <li className="header__panel-navigation-blog">
                <Link to="Blog">BLOG</Link>
              </li>
            </ul>
          </nav>
          <div className="header__panel-grid-space-two" />
          <div className="header__panel-search w-full relative h-11 flex items-center border-solid border-border border rounded p-0.5">
            <img
              src={SearchLogo}
              alt="search logo"
              className="header-panel-search-logo absolute right-4"
            />
            <label htmlFor="search" className="w-full h-full">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search"
                className="w-full h-full pl-3 pr-8"
              />
            </label>
          </div>
          <div className="header__panel-grid-space-three" />
          <ul className="header__panel-user flex flex-row w-full justify-between items-center h-full">
            <li className="header__panel-user-logo">
              <img
                src={UserLogo}
                alt="user logo"
                className="header-panel-search-logo"
              />
            </li>
            <li className="header__panel-favorites">
              <Link to="Favorites">
                <img
                  src={HeartLogo}
                  alt="favorites logo"
                  className="header-panel-search-logo"
                />
              </Link>
            </li>
            <li className="header__panel-user-carts">
              <Link to="Cart">
                <img
                  src={CartLogo}
                  alt="cart logo"
                  className="header-panel-search-logo"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
