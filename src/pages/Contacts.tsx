import React from 'react';
import './Contacts.scss';
import ImgPages from 'src/widgets/ImgPages';
import phoneIcon from '../assets/phone-Icon.svg';
import mailIcon from '../assets/mail-Icon.svg';
import clockIcon from '../assets/clock-Icon.svg';
import mapPointIcon from '../assets/map-point-Icon.svg';

function Contacts() {
  const imgTitle: string = 'CONTACTS';
  return (
    <div className="about-wrapper w-full flex flex-col items-center">
      <ImgPages imgTitle={imgTitle} />
      <div className="contacts-container w-full h-full flex justify-center items-center">
        <section className="contacts-content w-cont h-full mt-[120px] flex flex-row justify-between items-center">
          <div className="contacts__left w-full max-w-[337px] flex flex-col">
            <div className="contacts-block-title text-h4 leading-8">
              Contact details
            </div>
            <ul className="contacts-block-info text-h5">
              <li className="flex flex-row mt-2">
                <img
                  src={phoneIcon}
                  className="mr-2 p-[3px]"
                  alt="phone-icon"
                />{' '}
                +48 (451) 815 889
              </li>
              <li className="flex flex-row mt-2">
                <img src={mailIcon} className="mr-2 p-[3px]" alt="phone-icon" />{' '}
                info@monushe.com
              </li>
              <li className="flex flex-row mt-2">
                <img
                  src={clockIcon}
                  className="mr-2 p-[3px]"
                  alt="phone-icon"
                />
                <ul>
                  <li>Monday-Friday: 10:00 am - 7:00 pm</li>
                  <li>Saturday: 11:00 am - 5:00 pm </li>
                  <li>Sunday: Closed</li>
                </ul>
              </li>
              <li className="flex flex-row mt-2">
                <img
                  src={mapPointIcon}
                  className="mr-2 p-[3px]"
                  alt="phone-icon"
                />{' '}
                ul. Botaniczna 43-8, Warsaw, Poland
              </li>
            </ul>
          </div>
          <div className="contacts__right w-full mt-[120px] flex flex-row justify-between items-center" />
        </section>
      </div>
    </div>
  );
}

export default Contacts;
