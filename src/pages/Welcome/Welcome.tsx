import React from 'react';
import './Welcome.scss';
import Button from 'src/shared/Button';
import WelcomeAdvantages from 'src/shared/WelcomeAdvantages';
import FashionCart from 'src/shared/FashionCart';
import WelcomeSlider from 'src/features/WelcomeSlider/WelcomeSlider';
import SocialMediaSection from 'src/shared/SocialMediaSection';
import {
  welcomeSixItems,
  welcomeSixItemsDescriptions,
  welcomeSixItemsTitles,
  welcomeEightItems,
  welcomeEightItemsDescriptions,
  welcomeEightItemsTitles,
  welcomeEightItemsCategory,
  welcomeEightItemsDate,
  welcomeEightItemsComments,
  welcomeNineItems,
} from './WelcomeModel';

function Welcome() {
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
              <Button name="Shop now" color="brown" />
            </div>
          </div>
        </div>
      </section>
      <section className="welcome__two w-full flex flex-row justify-center overflow-hidden">
        <div className="welcome__two-container w-cont h-[352px] flex flex-row justify-start mt-[180px] relative">
          <h3 className="welcome__two-title text-h3 min-w-[283px] flex items-center pr-4">
            DISCOVER <br /> THE WORLD <br /> OF JEWELRY
          </h3>
          <div className="welcome__two-catalog h-full absolute left-[285px] w-[1840.8px]">
            <WelcomeSlider section="two" />
          </div>
        </div>
      </section>
      <section className="welcome__three w-cont flex flex-row justify-between items-center mt-[180px]">
        <div className="welcome__three-content w-[31.375vw] h-[244px] flex flex-col items-start">
          <h3 className="welcome__three-title text-h3 min-w-[285px] flex items-center pr-4">
            ENGAGEMENT RINGS
          </h3>
          <h5 className="welcome__three-description text-h5 min-w-[285px] flex items-center pr-4 mb-10 mt-4">
            Explore a&nbsp;world of&nbsp;unforgettable moments
            with&nbsp;our&nbsp;collection of&nbsp;engagement rings. Each one is
            a&nbsp;work of&nbsp;art, crafted with&nbsp;love and&nbsp;attention
            to&nbsp;detail. Find the&nbsp;perfect ring
            that&nbsp;will&nbsp;symbolize your&nbsp;unique love.
          </h5>
          <Button name="View collections" color="brown" />
        </div>
        <div className="welcome__three-picture flex flex-row items-start justify-end">
          <img
            src="https://sun9-40.userapi.com/impg/5W4owr_qmcYBxerwstYbBkdzVBDsKixdT_9q8A/OMnKB_2pP4U.jpg?size=690x475&quality=95&sign=f792f4869d30379e06263d87c2b6bc57&type=album"
            alt="giving ring"
          />
        </div>
      </section>
      <section className="welcome__four overflow-hidden w-full flex flex-row justify-center">
        <div className="welcome__four-container w-full flex flex-col justify-center items-center mt-[180px] mb-[516px] relative">
          <h2 className="welcome__four-title text-h2 flex items-center mb-16">
            MOST LOVED DESIGNS
          </h2>
          <div className="welcome__two-catalog h-[516px] w-[2035px] absolute top-28 left-[200px]">
            <WelcomeSlider section="four" />
          </div>
        </div>
      </section>
      <section className="welcome__five w-full h-[624px] relative flex flex-row justify-center items-center mt-[180px]">
        <div className="welcome__five-background w-[74.8vw] h-[624px] absolute bg-brown/20 left-0 -z-50" />
        <div className="welcome__five-container w-cont h-[472px] flex flex-row items-center justify-between">
          <div className="welcome__five-content w-[30.5vw] h-[268px] flex flex-col">
            <h3 className="welcome__five-title text-h3 flex text-left pr-4">
              OUR STORY
            </h3>
            <h5 className="welcome__five-description text-h5 min-w-[285px] flex items-center pr-4 mb-10 mt-4">
              At MONUSHÉ, we redefine jewelry by&nbsp;creating high-quality,
              limited-edition pieces without&nbsp;unnecessary markups. <br />{' '}
              Our&nbsp;commitment to&nbsp;affordability ensure you can enjoy
              effortlessly wearable, long-lasting jewelry for&nbsp;yourself and
              your&nbsp;loved ones
            </h5>
            <Button name="Explore our journey" color="brown" />
          </div>
          <div className="welcome__five-photo w-1/2 flex flex-row justify-end">
            <img
              src="https://sun9-52.userapi.com/impg/qap7HqCEmyTQE9151w-n-1bJ5RR03LbAc9IRRw/tg2ei1y3jsY.jpg?size=590x472&quality=95&sign=6fdd6505e20d7d6ec1710283a367525f&type=album"
              alt="girl"
            />
          </div>
        </div>
      </section>
      <section className="welcome__six mt-[122px] h-[132px] flex flex-row justify-between w-cont">
        {welcomeSixItems.map((item, index) => {
          return (
            <React.Fragment key={`${item}advantage`}>
              <WelcomeAdvantages
                product={item}
                description={welcomeSixItemsDescriptions[index]}
                title={welcomeSixItemsTitles[index]}
                key={item}
                index={index}
              />
              {index !== 3 && (
                <div
                  className="welcome__six-divider w-[1px] h-[132px] bg-divider"
                  key={`${item}divider`}
                />
              )}
            </React.Fragment>
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
      <section className="welcome__eight mt-[180px] min-h-[677px] w-cont flex flex-col justify-between">
        <h2 className="welcome__eight-title text-h2 text-center mb-16">
          FASHION BLOG
        </h2>
        <div className="welcome__eight-container min-h-[563px] w-full flex flex-col justify-between items-center">
          <div className="welcome__eight-content grid grid-cols-2 gap-[1.25vw] w-full min-h-[471px] mb-10">
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
          <Button name="Read our blog" color="brown" />
        </div>
      </section>
      <SocialMediaSection pictures={welcomeNineItems} />
    </main>
  );
}

export default Welcome;
