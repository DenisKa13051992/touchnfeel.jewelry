import React from 'react';
import { Link } from 'react-router-dom';
import Instagram from 'assets/instagram-logo.svg';
import Facebook from 'assets/facebook-logo.svg';
import YouTube from 'assets/youtube-logo.svg';
import Pinterest from 'assets/pinterest-logo.svg';

function FooterList(data: { footerLinksList: string[] }) {
  const { footerLinksList } = data;
  const [footerTitle, ...footerLinks] = footerLinksList;
  return (
    <div className="footer__content-discover flex flex-col h-[260px]">
      <h4 className="footer__discover-title mb-4 text-h4">{footerTitle}</h4>
      {(footerTitle !== 'GET IN TOUCH' && (
        <ul className="footer__discover-links flex flex-col w-full justify-between items-start h-full">
          {footerLinks.map((item) => {
            return (
              <li
                className={`footer__${footerTitle.toLowerCase()}-${item.toLowerCase()}`}
                key={item}
              >
                <Link to="Shop">
                  <h5 className="text-h5">{item}</h5>
                </Link>
              </li>
            );
          })}
        </ul>
      )) || (
        <ul className="footer__get-in-touch-links flex flex-col w-full items-start gap-2">
          {footerLinks.map((item) => {
            const index = item.indexOf(':') + 1;
            return (
              <li
                className={`footer__${footerTitle.toLowerCase()}-${item.toLowerCase()}`}
                key={item}
              >
                <h5 className="text-h5">
                  {item.slice(0, index)}
                  <span className="text-contacts ml-2">
                    {item.slice(index)}
                  </span>
                </h5>
              </li>
            );
          })}
        </ul>
      )}
      {footerTitle === 'GET IN TOUCH' && (
        <ul className="footer__social-media-links flex flex-row items-start gap-4 mt-4">
          <Link to="https://www.instagram.com/">
            <li className="footer__media-instagram">
              <img
                src={Instagram}
                alt="Instagram logo"
                className="footer__media-instagram-logo"
              />
            </li>
          </Link>
          <Link to="https://www.facebook.com/">
            <li className="footer__media-facebook">
              <img
                src={Facebook}
                alt="facebook logo"
                className="footer__media-facebook-logo"
              />
            </li>
          </Link>
          <Link to="https://www.youtube.com/">
            <li className="footer__media-youtube">
              <img
                src={YouTube}
                alt="youtube logo"
                className="footer__media-youtube-logo"
              />
            </li>
          </Link>
          <Link to="https://www.pinterest.com/">
            <li className="footer__media-pinterest">
              <img
                src={Pinterest}
                alt="Pinterest logo"
                className="footer__media-pinterest-logo"
              />
            </li>
          </Link>
        </ul>
      )}
    </div>
  );
}

export default FooterList;
