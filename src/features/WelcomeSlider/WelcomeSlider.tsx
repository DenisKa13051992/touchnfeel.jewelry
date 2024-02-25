import React, { useRef } from 'react';
import CatalogItem from 'src/shared/CatalogItem';
// import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/element/css/autoplay';
import 'swiper/element/css/a11y';
import 'swiper/element/css/free-mode';
import 'swiper/element/css/keyboard';
import { Autoplay, Navigation } from 'swiper/modules';
import SwiperArrow from 'src/assets/arrow-right.svg';
// import welcomeProductDownload from '../welcomeProductDownload';
import {
  welcomeTwoCatalogDefaultItems,
  welcomeTwoCatalogDefaultItemsNames,
  welcomeFourCatalogDefaultItems,
  welcomeFourCatalogDefaultItemsDescription,
  welcomeFourCatalogDefaultItemsPrice,
} from './WelcomeSliderModel';

function WelcomeSlider(data: { section: string; stopAutoplay?: string }) {
  const swiperElRef = useRef(null);
  // const [perView, setPerView] = useState(0);
  // const [welcomeProductData, setWelcomeProductTwoData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const productData = await welcomeProductDownload();
  //     setWelcomeProductTwoData(productData);
  //   };
  //   fetchData();
  // }, []);
  // if (welcomeProductData) {
  //   welcomeTwoCatalogDefaultItems = Object.values(welcomeProductData.two);
  //   welcomeTwoCatalogDefaultItemsNames = Object.keys(
  //     welcomeProductData.two
  //   ).map((i) => i.toUpperCase());
  // }
  // console.log(
  //   welcomeProductData,
  //   welcomeTwoCatalogDefaultItems,
  //   welcomeTwoCatalogDefaultItemsNames
  // );

  const { section, stopAutoplay } = data;
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
  // useEffect(() => {
  //   setPerView(window.innerWidth);
  // }, [perView]);

  return (
    <Swiper
      ref={swiperElRef}
      slidesPerView={stopAutoplay ? 4 : slidesNumber}
      speed={!stopAutoplay ? 1500 : 200}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      navigation={{
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
      }}
      spaceBetween={20}
      loop
      grabCursor
      modules={!stopAutoplay ? [Autoplay] : [Navigation]}
      className="welcome__two-catalog swiper h-full relative"
    >
      {section === 'two' &&
        welcomeTwoCatalogDefaultItems.map((item, index) => {
          return (
            <SwiperSlide
              key={`${item}swip`}
              className="swiper-slide-two ml-[1.8px]"
            >
              <CatalogItem
                product={item}
                index={index}
                key={item}
                name={welcomeTwoCatalogDefaultItemsNames[index]}
              />
            </SwiperSlide>
          );
        })}
      {stopAutoplay && (
        <div className="swiper-buttons h-[64px] w-full flex flex-row justify-center items-center gap-4 pt-5">
          <div className="swiper-next w-8 h-8 flex flex-row justify-center items-center rounded-full hover:bg-bgrSwiperArrow">
            <img
              src={SwiperArrow}
              className="rotate-180 w-[18px] h-[11px]"
              alt="next slide"
            />
          </div>
          <div className="swiper-prev w-8 h-8 flex flex-row justify-center items-center rounded-full hover:bg-bgrSwiperArrow">
            <img
              src={SwiperArrow}
              className="w-[18px] h-[11px]"
              alt="prev slide"
            />
          </div>
        </div>
      )}
      {section === 'four' &&
        welcomeFourCatalogDefaultItems.map((item, index) => {
          return (
            <SwiperSlide key={`${item}swip`} className="swiper-slide-four">
              <CatalogItem
                product={item}
                index={index}
                key={item}
                description={welcomeFourCatalogDefaultItemsDescription[index]}
                price={welcomeFourCatalogDefaultItemsPrice[index]}
              />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
}

export default WelcomeSlider;
