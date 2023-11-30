import React from 'react';
import './Welcome.scss';
import Button from 'src/shared/Button';
import CatalogItem from 'src/shared/CatalogItem';
import rings from 'assets/welcome-two-rings.png';
import earrings from 'assets/welcome-two-earrings.png';
import chains from 'assets/welcome-two-chains.png';
import necklace from 'assets/welcome-two-necklace.png';
import pendants from 'assets/welcome-two-pendants.png';
import brooches from 'assets/welcome-two-brooches.png';
import bracelets from 'assets/welcome-two-bracelets.png';

function checkAPI() {
  fetch(
    'https://my-json-server.typicode.com/DenisKa13051992/JSON-server-API-jewelry/profile'
  )
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function Welcome() {
  checkAPI();
  const welcomeTwoCatalogItems: string[] = [
    rings,
    earrings,
    chains,
    necklace,
    pendants,
    brooches,
    bracelets,
  ];
  return (
    <main className="welcome flex flex-col items-center">
      <section className="welcome__one w-full h-720 flex flex-row justify-center">
        <div className="welcome__one-container flex flex-row justify-start items-end w-cont pb-[132px]">
          <div className="welcome__one-content flex flex-col items-start">
            <h3 className="welcome__one-phrase font-semibold text-base text-white">
              EACH PIECE TELLS A STORY OF GRACE
            </h3>
            <h1 className="welcome__one-title text-white text-h1 pt-4 pb-10">
              EXPRESS YOUR STYLE WITH OUR JEWELRY
            </h1>
            <div className="welcome__one-button">
              <Button name="Shop now" />
            </div>
          </div>
        </div>
      </section>
      <section className="welcome__two w-full flex flex-grow justify-center">
        <div className="welcome__two-container w-cont h-[352px] flex flex-row justify-start mt-[180px] gap-1">
          <h3 className="welcome__two-title text-h3 min-w-[285px] flex items-center pr-4">
            DISCOVER <br /> THE WORLD <br /> OF JEWELRY
          </h3>
          <div className="welcome__two-catalog flex flex-row items-center justify-start gap-5 h-full overflow-hidden relative">
            {welcomeTwoCatalogItems.map((item, index) => {
              return <CatalogItem product={item} index={index} key={item} />;
            })}
          </div>
        </div>
      </section>
      <section className="welcome__three" />
      <section className="welcome__four" />
      <section className="welcome__five" />
      <section className="welcome__six" />
      <section className="welcome__seven" />
    </main>
  );
}

export default Welcome;
