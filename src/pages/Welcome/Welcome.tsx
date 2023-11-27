import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.scss';
import Button from 'src/shared/Button';

function checkAPI() {
  fetch(
    'https://my-json-server.typicode.com/DenisKa13051992/JSON-server-API-jewelry/profile'
  )
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function Welcome() {
  checkAPI();
  return (
    <main className="welcome flex flex-col items-center">
      <section className="welcome__one w-full h-720 flex flex-row justify-center">
        <div className="welcome__one-container flex flex-row justify-start items-end w-cont pb-[132px]">
          <div className="welcome__one-content flex flex-col items-start">
            <h3 className="welcome__one-phrase font-semibold text-base text-white">
              EACH PIECE TELLS A STORY OF GRACE
            </h3>
            <h1 className="welcome__one-title text-white font-bold text-5xl leading-[56px] pt-4 pb-10">
              EXPRESS YOUR STYLE WITH OUR JEWELRY
            </h1>
            <div className="welcome__one-button">
              <Button name="Shop now" />
            </div>
          </div>
        </div>
      </section>
      <section className="welcome__two" />
      <section className="welcome__three" />
      <section className="welcome__four" />
      <section className="welcome__five" />
      <section className="welcome__six" />
      <section className="welcome__seven" />
    </main>
  );
}

export default Welcome;
