import React, { useEffect, useRef, useState } from 'react';
import CatalogItem from 'src/shared/CatalogItem';
// import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/element/css/autoplay';
import 'swiper/element/css/a11y';
import 'swiper/element/css/free-mode';
import 'swiper/element/css/keyboard';
import { Autoplay } from 'swiper/modules';
import welcomeProductDownload from './welcomeProductDownload';

let welcomeTwoCatalogItems: string[] = [
  'https://sun9-60.userapi.com/impg/digxtgTiM4Ka3OA5L4Q71oBQ36tcjNl_p84XRw/d8O4vSwACY8.jpg?size=285x320&quality=95&sign=6a8b6a5c1ba55cea4f7d693e0d20f5a6&type=album',
  'https://sun9-32.userapi.com/impg/g_m3q895b4zpvXstMXYUrLf7bmlegE-TmLfCfw/CqqPKagxH0I.jpg?size=285x320&quality=95&sign=c0d50a76994df3fa11861699d9b23af2&type=album',
  'https://sun9-4.userapi.com/impg/FhKLUtKTgviRgLtDjtGm1U2RbapPs9Po8l1W0Q/YVKKk-v9j1I.jpg?size=285x320&quality=95&sign=3378d1c8f6d1a98323e130ece4940bf9&type=album',
  'https://sun9-72.userapi.com/impg/_TYU8PZBYkj8fKsgV9Zh619BnYVtnPDL_ArfkA/ESjrsByQ_ls.jpg?size=285x320&quality=95&sign=dd33108d7a008f89ec62cda21a0808c7&type=album',
  'https://sun9-55.userapi.com/impg/FNCrrruZfFQYE5JzVHYjLzrjcYNFkKdulZDW3Q/d5iVvGIpCsQ.jpg?size=285x320&quality=95&sign=3a9a781f577e66b7cc908b891fbc0b8c&type=album',
  'https://sun9-20.userapi.com/impg/ePiEEKC8AZRrEpXS0RKloKY34AxDkzfYhQyIqg/uJ-GkFwA9Yg.jpg?size=285x320&quality=95&sign=b3b54aea0d941743cc68d313cb6f6cdf&type=album',
  'https://sun9-28.userapi.com/impg/JlvvB5PgesWUsFlrUXBRNo2PmSkMv9UgSA1RTQ/wOT5o_SlwQQ.jpg?size=285x320&quality=95&sign=40d63d0fad24dccd508d0c1fe72dd98c&type=album',
];
let welcomeTwoCatalogItemsNames: string[] = [
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

function WelcomeSlider(data: { section: string }) {
  const swiperElRef = useRef(null);
  const [perView, setPerView] = useState(0);
  const [welcomeProductData, setWelcomeProductTwoData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const productData = await welcomeProductDownload();
      setWelcomeProductTwoData(productData);
    };
    fetchData();
  }, []);
  if (welcomeProductData) {
    welcomeTwoCatalogItems = Object.values(welcomeProductData.two);
    welcomeTwoCatalogItemsNames = Object.keys(welcomeProductData.two).map((i) =>
      i.toUpperCase()
    );
  }
  console.log(
    welcomeProductData,
    welcomeTwoCatalogItems,
    welcomeTwoCatalogItemsNames
  );

  const { section } = data;
  const slidesNumber = section === 'two' ? 6 : 5;
  // useEffect(() => {
  //   // listen for Swiper events using addEventListener
  //   if (swiperElRef.current)
  //     swiperElRef.current.addEventListener('swiperprogress', (e) => {
  //       const [swiper, progress] = e.detail;
  //       console.log(progress, window.innerWidth);
  //       setPerView(window.innerWidth);
  //     });

  //   if (swiperElRef.current)
  //     swiperElRef.current.addEventListener('swiperslidechange', (e) => {
  //       console.log('slide changed');
  //     });
  // }, []);
  useEffect(() => {
    setPerView(window.innerWidth);
  }, [perView]);

  return (
    <Swiper
      ref={swiperElRef}
      slidesPerView={slidesNumber}
      speed={1500}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      spaceBetween={20}
      loop
      grabCursor
      modules={[Autoplay]}
      className="welcome__two-catalog swiper h-full relative"
    >
      {section === 'two' &&
        welcomeTwoCatalogItems.map((item, index) => {
          return (
            <SwiperSlide
              key={`${item}swip`}
              className="swiper-slide-two ml-[1.8px]"
            >
              <CatalogItem
                product={item}
                index={index}
                key={item}
                name={welcomeTwoCatalogItemsNames[index]}
              />
            </SwiperSlide>
          );
        })}
      {section === 'four' &&
        welcomeFourCatalogItems.map((item, index) => {
          return (
            <SwiperSlide key={`${item}swip`} className="swiper-slide-four">
              <CatalogItem
                product={item}
                index={index}
                key={item}
                description={welcomeFourCatalogItemsDescription[index]}
                price={welcomeFourCatalogItemsPrice[index]}
              />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
}

export default WelcomeSlider;
