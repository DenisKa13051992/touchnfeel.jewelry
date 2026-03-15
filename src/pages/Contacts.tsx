/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import './Contacts.scss';
import ImgPages from 'src/widgets/ImgPages';
import phoneIcon from '../assets/phone-Icon.svg';
import mailIcon from '../assets/mail-Icon.svg';
import clockIcon from '../assets/clock-Icon.svg';
import mapPointIcon from '../assets/map-point-Icon.svg';

function Contacts() {
  const imgTitle: string = 'CONTACTS';
  const { register, handleSubmit } = useForm();
  return (
    <div className="about-wrapper w-full flex flex-col items-center">
      <ImgPages imgTitle={imgTitle} />
      <div className="contacts-container w-full h-full flex justify-center items-center">
        <section className="contacts-content w-cont h-full mt-[120px] flex flex-row justify-between items-start">
          <div className="contacts__left w-[337px] h-[228px] flex flex-col">
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
              <li className="flex flex-row items-start mt-2">
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
          <div className="contacts__right max-w-[590px] w-full min-h-[602px] flex flex-col justify-between items-start">
            <p className="text-h4-lh-32 mb-4">Get in touch</p>
            <form
              className="flex flex-col items-start justify-between text-h5 min-h-[554px] w-full"
              onSubmit={handleSubmit((data) => {
                alert(`Вы ввели: ${JSON.stringify(data)}, но хватит тыкать!`);
              })}
            >
              <label htmlFor="name" className="contacts-form-label">
                <p className="mb-2 text-bold">Full name*</p>
                <input
                  type="text"
                  id="name"
                  placeholder="Your full name"
                  className="contacts-form-input"
                  {...register('name')}
                />
              </label>
              <label htmlFor="email" className="contacts-form-label">
                <p className="mb-2">Email*</p>
                <input
                  type="text"
                  id="email"
                  placeholder="Your working email"
                  className="contacts-form-input"
                  {...register('email')}
                />
              </label>
              <label htmlFor="phone" className="contacts-form-label">
                <p className="mb-2">Phone</p>
                <input
                  type="text"
                  id="phone"
                  placeholder="Your phone number"
                  className="contacts-form-input"
                  {...register('phone')}
                />
              </label>
              <label htmlFor="message" className="contacts-form-label-message">
                <p className="mb-2">Message*</p>
                <textarea
                  id="message"
                  placeholder="Write your message here"
                  className="contacts-form-input contacts-form-input-message w-full min-h-[130px] align-top"
                  {...register('message')}
                />
              </label>
              <button
                type="submit"
                className="max-w-[122px] h-[52px] w-full text-brown text-h5 border rounded-sm border-brown"
              >
                Send
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contacts;
