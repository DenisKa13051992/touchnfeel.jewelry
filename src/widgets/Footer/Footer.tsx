import React from 'react';
import Monushe from 'assets/Monushe.svg';
import { Link } from 'react-router-dom';
import FooterList from 'src/shared/FooterList';

function Footer() {
  return (
    <footer className="footer flex flex-row justify-center w-full mt-[180px] min-h-[413px] bg-brown/20">
      <div className="footer__container flex flex-col justify-between w-cont min-h-full">
        <div className="footer__content flex flex-row w-full justify-between pt-16 pr-16">
          <div className="footer__content-logo h-full flex flex-row justify-start items-start">
            <Link to="/">
              <img src={Monushe} alt="Monushe" />
            </Link>
          </div>
          <div className="footer__content-col w-[831px] flex flex-row justify-between">
            <FooterList
              footerLinksList={[
                'DISCOVER',
                'Rings',
                'Earrings',
                'Chains',
                'Necklace',
                'Pendants',
                'Brooches',
                'Bracelets',
              ]}
            />
            <FooterList
              footerLinksList={[
                'Help',
                'Delivery & Returns',
                'FAQ',
                'Care Guide',
                'Sustainability',
                'Refund Policy',
                'Terms & Conditions',
                'Privacy Policy',
              ]}
            />
            <FooterList
              footerLinksList={[
                'GET IN TOUCH',
                'Call:+370 (619) 15 889',
                'E-mail:info@monushe.com',
                'Address:Laisves g. 28-3, Vilnius, Lithuania',
              ]}
            />
          </div>
        </div>
        <h6 className="footer__rights w-full text-[10px] leading-4 h-6 flex flex-row justify-start items-center">
          © 2023,&nbsp;{' '}
          <Link to="/" className="underline">
            Monushe Jewelry
          </Link>
          , All Rights Reserved.
        </h6>
      </div>
    </footer>
  );
}

export default Footer;
