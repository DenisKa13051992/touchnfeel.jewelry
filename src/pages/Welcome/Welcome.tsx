import React from 'react';
import './Welcome.scss';
import Button from 'src/shared/Button';
import CatalogItem from 'src/shared/CatalogItem';
import WelcomeAdvantages from 'src/shared/WelcomeAdvantages';
import FashionCart from 'src/shared/FashionCart';
import sectionFiveGirl from 'assets/welcome-five-girl.png';
import rings from 'assets/welcome-two-rings.png';
import earrings from 'assets/welcome-two-earrings.png';
import chains from 'assets/welcome-two-chains.png';
import necklace from 'assets/welcome-two-necklace.png';
import pendants from 'assets/welcome-two-pendants.png';
import brooches from 'assets/welcome-two-brooches.png';
import bracelets from 'assets/welcome-two-bracelets.png';
import ring from 'assets/welcome-three-rings.png';
import ringsDayAndNight from 'assets/welcome-four-rings_day_and_night.png';
import ringRayOfLight from 'assets/welcome-four-ring_ray_of_light.png';
import necklaceLoveSymbol from 'assets/welcome-four-necklace_love_symbol.png';
import earringsPearlBay from 'assets/welcome-four-earrings_pearl_bay.png';
import earringsMoonlight from 'assets/welcome-four-earrings_moonlight.png';
import chainSophistication from 'assets/welcome-four-chain_sophistication.png';
import delivery from 'assets/welcome-six-delivery.png';
import payment from 'assets/welcome-six-payment.png';
import guarantee from 'assets/welcome-six-guarantee.png';
import support from 'assets/welcome-six-support.png';
import eightLeftPhoto from 'assets/welcome-eight-left.png';
import eightRightPhoto from 'assets/welcome-eight-right.png';

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
  const welcomeFourCatalogItems: string[] = [
    ringsDayAndNight,
    ringRayOfLight,
    necklaceLoveSymbol,
    earringsPearlBay,
    earringsMoonlight,
    chainSophistication,
  ];
  const welcomeFourCatalogItemsDescription: string[] = [
    'Gold earrings "Moonlight"',
    'Golden necklace "Love symbol"',
    'Golden ring "Ray of light"',
    'Gold earrings "Pearl Bay"',
    'Set of rings "Day and night"',
    'Gold Chain "Sophistication"',
  ];
  const welcomeFourCatalogItemsPrice: string[] = [
    '€43,53 EUR',
    '€56,75 EUR',
    '€29,34 EUR',
    '€65,15 EUR',
    '€50,25 EUR',
    '€30,11 EUR',
  ];
  const welcomeSixItems: string[] = [delivery, payment, guarantee, support];
  const welcomeSixItemsTitles: string[] = [
    'Secure online payment',
    '24/7 Customer support',
    'Money back guarantee',
    'Fast worldwide shipping',
  ];
  const welcomeSixItemsDescriptions: string[] = [
    'Accept all major credit cards',
    'Friendly 24/7 customer support',
    'We return money within 30 days',
    'Get free shipping over 50 EUR',
  ];
  const welcomeEightItems: string[] = [eightLeftPhoto, eightRightPhoto];
  const welcomeEightItemsTitles: string[] = [
    'Jewelry Care Tips',
    'Selecting Jewelry for Special Events',
  ];
  const welcomeEightItemsDescriptions: string[] = [
    'In the realm of timeless elegance, caring for your jewelry is an art that ensures your precious pieces remain radiant for generations. While jewelry adds a touch of glamour to our lives, a little care can go a long way in preserving their beauty.',
    'Jewelry possesses a unique ability to elevate any special occasion, transforming an outfit into a statement and a moment into a memory. Choosing the right pieces for those significant events requires a delicate balance of style, sentiment, and sophistication.',
  ];
  const welcomeEightItemsCategory: string[] = ['Lifestyle', 'Fashion'];
  const welcomeEightItemsDate: string[] = [
    'September 20, 2023',
    'August 11, 2023',
  ];
  const welcomeEightItemsComments: number[] = [0, 2];
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
              <Button name="Shop now" color="[#CBAC86]" />
            </div>
          </div>
        </div>
      </section>
      <section className="welcome__two overflow-hidden w-full flex flex-row justify-center">
        <div className="welcome__two-container w-cont h-[352px] flex flex-row justify-start mt-[180px] gap-1">
          <h3 className="welcome__two-title text-h3 min-w-[285px] flex items-center pr-4">
            DISCOVER <br /> THE WORLD <br /> OF JEWELRY
          </h3>
          <div className="welcome__two-catalog flex flex-row items-center justify-start gap-5 h-full relative">
            {welcomeTwoCatalogItems.map((item, index) => {
              return <CatalogItem product={item} index={index} key={item} />;
            })}
          </div>
        </div>
      </section>
      <section className="welcome__three w-full flex flex-row justify-center items-center mt-[180px]">
        <div className="welcome__three-container w-[502px] h-[244px] flex flex-col justify-between gap-1 items-start">
          <h3 className="welcome__three-title text-h3 min-w-[285px] flex items-center pr-4">
            ENGAGEMENT RINGS
          </h3>
          <h5 className="welcome__three-description text-h5 min-w-[285px] flex items-center pr-4">
            Explore a world of unforgettable moments with our collection of
            engagement rings. Each one is a work of art, crafted <br /> with
            love and attention to detail. Find the perfect ring that will
            symbolize your unique love.
          </h5>
          <Button name="View collections" color="brown" />
        </div>
        <div className="welcome__three-picture flex flex-row items-start justify-end">
          <img src={ring} alt="giving ring" />
        </div>
      </section>
      <section className="welcome__four overflow-hidden w-full flex flex-row justify-center">
        <div className="welcome__four-container w-full flex flex-col justify-center items-center mt-[180px]">
          <h2 className="welcome__four-title text-h2 flex items-center mb-16">
            MOST LOVED DESIGNS
          </h2>
          <div className="welcome__two-catalog h-[516px] w-cont flex flex-row items-center justify-start gap-5 relative">
            {welcomeFourCatalogItems.map((item, index) => {
              return (
                <CatalogItem
                  product={item}
                  index={index}
                  description={welcomeFourCatalogItemsDescription[index]}
                  price={welcomeFourCatalogItemsPrice[index]}
                  key={item}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className="welcome__five w-full h-[624px] relative flex flex-row justify-center items-center mt-[180px]">
        <div className="welcome__five-background w-[1197px] h-[624px] absolute bg-brown/20 left-0 z-[-1]" />
        <div className="welcome__five-container w-cont h-[472px] flex flex-row items-center justify-between">
          <div className="welcome__five-content w-[488px] h-[268px] flex flex-col">
            <h3 className="welcome__three-title text-h3 flex text-left pr-4">
              OUR STORY
            </h3>
            <h5 className="welcome__three-description text-h5 min-w-[285px] flex items-center pr-4 mb-10 mt-4">
              At MONUSHÉ, we redefine jewelry by creating high-quality,
              limited-edition pieces without unnecessary markups. <br /> Our
              commitment to affordability ensure you can enjoy effortlessly
              wearable, long-lasting jewelry for yourself and your loved ones
            </h5>
            <Button name="Explore our journey" color="[#CBAC86]" />
          </div>
          <div className="welcome__five-photo w-1/2 flex flex-row justify-end">
            <img src={sectionFiveGirl} alt="girl" />
          </div>
        </div>
      </section>
      <section className="welcome__six mt-[196px] flex flex-row justify-between w-cont">
        {welcomeSixItems.map((item, index) => {
          return (
            <WelcomeAdvantages
              product={item}
              description={welcomeSixItemsDescriptions[index]}
              title={welcomeSixItemsTitles[index]}
              key={item}
            />
          );
        })}
      </section>
      <section className="welcome__seven mt-[122px] h-[680px] w-full flex flex-row justify-center">
        <div className="welcome__seven-container w-cont flex flex-row h-full justify-end items-center">
          <div className="welcome__seven-content h-[236px] w-[488px] flex flex-col justify-between">
            <h2 className="welcome__seven-title text-h2">
              GET 30% OFF YOUR FIRST ORDER! USE CODE{' '}
              <span className="font-bold">&apos;FIRST30&apos;</span> AT CHECKOUT
            </h2>
            <Button name="Shop now" color="black" />
          </div>
        </div>
      </section>
      <section className="welcome__eight mt-[180px] h-[677px] w-cont flex flex-col justify-between">
        <h2 className="welcome__eight-title text-h2 text-center">
          FASHION BLOG
        </h2>
        <div className="welcome__eight-container min-h-[563px] w-full flex flex-col justify-between items-center">
          <div className="welcome__eight-content grid grid-cols-2 gap-5">
            {welcomeEightItems.map((item, index) => {
              return (
                <FashionCart
                  product={item}
                  description={welcomeEightItemsDescriptions[index]}
                  title={welcomeEightItemsTitles[index]}
                  category={welcomeEightItemsCategory[index]}
                  date={welcomeEightItemsDate[index]}
                  comments={welcomeEightItemsComments[index]}
                  key={item}
                />
              );
            })}
          </div>
          <Button name="Read our blog" color="[#CBAC86]" />
        </div>
      </section>
    </main>
  );
}

export default Welcome;
