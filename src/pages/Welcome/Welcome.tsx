import React from 'react';
import './Welcome.scss';
import Button from 'src/shared/Button';
import CatalogItem from 'src/shared/CatalogItem';
import WelcomeAdvantages from 'src/shared/WelcomeAdvantages';
import FashionCart from 'src/shared/FashionCart';
import paymentLogo from 'assets/payment-logo.svg';
import deliveryLogo from 'assets/delivery-logo.svg';
import guaranteeLogo from 'assets/guarantee-logo.svg';
import supportLogo from 'assets/support-logo.svg';

// function checkAPI() {
//   fetch('http://localhost:3000/profile')
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// }

function Welcome() {
  // checkAPI();
  const welcomeTwoCatalogItems: string[] = [
    'https://sun9-60.userapi.com/impg/digxtgTiM4Ka3OA5L4Q71oBQ36tcjNl_p84XRw/d8O4vSwACY8.jpg?size=285x320&quality=95&sign=6a8b6a5c1ba55cea4f7d693e0d20f5a6&type=album',
    'https://sun9-32.userapi.com/impg/g_m3q895b4zpvXstMXYUrLf7bmlegE-TmLfCfw/CqqPKagxH0I.jpg?size=285x320&quality=95&sign=c0d50a76994df3fa11861699d9b23af2&type=album',
    'https://sun9-4.userapi.com/impg/FhKLUtKTgviRgLtDjtGm1U2RbapPs9Po8l1W0Q/YVKKk-v9j1I.jpg?size=285x320&quality=95&sign=3378d1c8f6d1a98323e130ece4940bf9&type=album',
    'https://sun9-72.userapi.com/impg/_TYU8PZBYkj8fKsgV9Zh619BnYVtnPDL_ArfkA/ESjrsByQ_ls.jpg?size=285x320&quality=95&sign=dd33108d7a008f89ec62cda21a0808c7&type=album',
    'https://sun9-55.userapi.com/impg/FNCrrruZfFQYE5JzVHYjLzrjcYNFkKdulZDW3Q/d5iVvGIpCsQ.jpg?size=285x320&quality=95&sign=3a9a781f577e66b7cc908b891fbc0b8c&type=album',
    'https://sun9-20.userapi.com/impg/ePiEEKC8AZRrEpXS0RKloKY34AxDkzfYhQyIqg/uJ-GkFwA9Yg.jpg?size=285x320&quality=95&sign=b3b54aea0d941743cc68d313cb6f6cdf&type=album',
    'https://sun9-28.userapi.com/impg/JlvvB5PgesWUsFlrUXBRNo2PmSkMv9UgSA1RTQ/wOT5o_SlwQQ.jpg?size=285x320&quality=95&sign=40d63d0fad24dccd508d0c1fe72dd98c&type=album',
  ];
  const welcomeTwoCatalogItemsNames: string[] = [
    'RINGS',
    'EARRINGS',
    'CHAINS',
    'NECKLACE',
    'PENDANTS',
    'BROOCHES',
    'BRACELETS',
  ];
  const welcomeFourCatalogItems: string[] = [
    'https://sun9-55.userapi.com/impg/EoafY_-OF4uBjvVwCNL3lPHy3PQ17EUp-MG9Dw/MPWKU41btac.jpg?size=387x400&quality=95&sign=695c6fe253519e2109f66875d704b788&type=album',
    'https://sun54-2.userapi.com/impg/MJ3q3kOi_DxEUqPSyaJQ2JN8Eggc3J5Vk3UBiQ/IoxeNNRGnUw.jpg?size=387x400&quality=95&sign=8b87a4736ca3e398cb4ce88642d578e2&type=album',
    'https://sun9-80.userapi.com/impg/DUBOXtq7ItUig5yPCySO5ftrmYXtUKBsbbR_UQ/J2sXsi1QWSw.jpg?size=387x400&quality=95&sign=695b5f11c7b49cf49bf945c46d6b99aa&type=album',
    'https://sun9-46.userapi.com/impg/yVtlKK3ejlGWxNVxZpL-upEc0mNQr23THbyIHQ/2z1qOp5tntg.jpg?size=387x400&quality=95&sign=57b1a0b3c19a113e627cc7639030b0e7&type=album',
    'https://sun9-70.userapi.com/impg/r1vYKQgK7A4lIKDTkBd8_7hN7K3eRO_dRFO6lA/4K1ztYP3StY.jpg?size=387x400&quality=95&sign=feb50565d71d0310817ffe6c134fdeb4&type=album',
    'https://sun9-12.userapi.com/impg/Q0ayouEZqqlrH-y5MSWMdpGMSqt_t5gUVa86Fw/ZGLlj9F0zoQ.jpg?size=387x400&quality=95&sign=540408f779edfb4d1ff85f7f368d8bde&type=album',
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
  const welcomeSixItems: string[] = [
    deliveryLogo,
    paymentLogo,
    guaranteeLogo,
    supportLogo,
  ];
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
  const welcomeEightItems: string[] = [
    'https://sun9-77.userapi.com/impg/MYOwGGf_S4dHEH6368yW-PNrmBy0qqRYbITV3g/RAeV64DrzF0.jpg?size=590x306&quality=95&sign=3052ab355937acec24a7707a57f93f69&type=album',
    'https://sun9-51.userapi.com/impg/_-70PnKmZiM3F-afDp2C2iGXLEn-sYRPalcStQ/I11wlps-I7g.jpg?size=590x306&quality=95&sign=911b2960755bf71073ba0feeaf72dec6&type=album',
  ];
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
              <Button name="Shop now" color="brown" />
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
              return (
                <CatalogItem
                  product={item}
                  index={index}
                  key={item}
                  name={welcomeTwoCatalogItemsNames[index]}
                />
              );
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
          <img
            src="https://sun9-40.userapi.com/impg/5W4owr_qmcYBxerwstYbBkdzVBDsKixdT_9q8A/OMnKB_2pP4U.jpg?size=690x475&quality=95&sign=f792f4869d30379e06263d87c2b6bc57&type=album"
            alt="giving ring"
          />
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
      <section className="welcome__six mt-[122px] flex flex-row justify-between w-cont">
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
          <Button name="Read our blog" color="brown" />
        </div>
      </section>
    </main>
  );
}

export default Welcome;
