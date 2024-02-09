import React from 'react';
import './About.scss';
import WelcomeSlider from 'src/features/WelcomeSlider';

function About() {
  return (
    <div className="about-wrapper w-full flex flex-col items-center">
      <section className="about__bgr w-full h-[400px] flex flex-row justify-center items-end">
        <h1 className="about__bgr-title text-black text-h1 pb-10">OUR STORY</h1>
      </section>
      <div className="our-story-container w-cont flex flex-col items-center">
        <section className="our-story-one w-full h-[545px] mt-[120px] flex flex-row justify-between items-center">
          <div className="our-story-one-content w-[590px] h-[392px] flex flex-col">
            <h3 className="our-story-one-title text-h3 flex text-left mb-4">
              MILDA and JONAS&apos; JEWELRY HAVEN
            </h3>
            <h5 className="our-story-one-description text-h5 min-w-[285px] flex items-center">
              Meet Milda and Jonas, the&nbsp;proud owners
              of&nbsp;a&nbsp;boutique specializing in&nbsp;classic, high-quality
              jewelry in&nbsp;the&nbsp;heart of&nbsp;Vilnius. Their&nbsp;journey
              as&nbsp;proprietors began with&nbsp;a&nbsp;shared appreciation
              for&nbsp;the&nbsp;timeless elegance found in&nbsp;carefully
              crafted adornments. The idea to&nbsp;open their boutique emerged
              from&nbsp;a&nbsp;collective passion for&nbsp;bringing
              the&nbsp;finest, most exquisite pieces to&nbsp;their community.
              <br />
              In&nbsp;MONUSHÉ each piece is&nbsp;selected with&nbsp;precision,
              embodying the&nbsp;essence of&nbsp;sophistication
              and&nbsp;enduring quality. Milda and Jonas, not&nbsp;jewelers
              but&nbsp;guardians of&nbsp;refined taste, have poured
              their&nbsp;hearts into&nbsp;creating a&nbsp;space where
              the&nbsp;beauty of&nbsp;exceptional craftsmanship takes center
              stage. The boutique is&nbsp;more than a&nbsp;store; it&apos;s
              a&nbsp;haven where the&nbsp;soul of&nbsp;exceptional jewelry
              is&nbsp;preserved and&nbsp;shared, a&nbsp;testament to&nbsp;Milda
              and Jonas&apos; dedication to&nbsp;offering their&nbsp;community
              the&nbsp;epitome of&nbsp;elegance.
            </h5>
          </div>
          <div className="our-story-one-picture w-[488px] flex flex-row justify-end">
            <img
              src="https://sun9-79.userapi.com/impf/2-jHFtJL_G_3stBDRCSHyRoKlB_LGj2oF6dSPg/LhkU0zodkV4.jpg?size=488x545&quality=95&sign=3b5c668f46a3f71d7cf6bcdfac74648c&type=album"
              alt="couple"
            />
          </div>
        </section>
        <section className="our-story__two w-[1076px] h-[260px] mt-[120px] flex flex-row justify-center items-center">
          <h3 className="our-story__two-title text-h3 w-[996px] h-[160px] flex text-center relative">
            WE BELIEVE THAT&nbsp;JEWELRY SHOULD BE AN&nbsp;EXPRESSION
            OF&nbsp;YOUR&nbsp;STYLE AS&nbsp;WELL AS&nbsp;YOUR&nbsp;ASPIRATIONS,
            WHICH IS WHY EACH EFFORTLESSLY WEARABLE PIECE IS DESIGNED
            WITH&nbsp;MEANING.
          </h3>
        </section>
        <section className="our-story__three w-full h-[475px] mt-[120px] flex flex-row justify-between items-center">
          <div className="our-story__three-picture w-[488px] flex flex-row justify-end">
            <img
              src="https://sun9-41.userapi.com/impf/cr-lxMu27ixXX3Jl0RTLY_6LTiLf_QdwFHfdDg/aiR1Dqw0q1g.jpg?size=488x475&quality=95&sign=e47d3fd4534c098405e7fcf21c5545b1&type=album"
              alt="man"
            />
          </div>
          <div className="our-story__three-content w-[590px] h-[312px] flex flex-col">
            <h3 className="our-story__three-title text-h3 flex text-left mb-4">
              TOP QUALITY, DURABILITY AND MEETING CUSTOMER EXPECTATIONS
            </h3>
            <h5 className="our-story__three-description text-h5 min-w-[285px] flex items-center">
              These principles guide our&nbsp;endeavors. While
              our&nbsp;extensive history and invaluable expertise provide
              a&nbsp;strong foundation, staying abreast of&nbsp;innovation is
              equally crucial. We remain attuned to&nbsp;global trends, actively
              participate in&nbsp;exhibitions, and leverage cutting-edge
              equipment. Every task is executed with&nbsp;meticulous precision,
              unwavering professionalism, and a&nbsp;deep-seated passion. The
              trust our&nbsp;customers place in&nbsp;us, coupled
              with&nbsp;their&nbsp;confident recommendations, serves
              as&nbsp;both a&nbsp;compliment and validation that&nbsp;we are
              moving in&nbsp;the&nbsp;right direction.
            </h5>
          </div>
        </section>
        <section className="our-story__four w-full h-[545px] mt-[120px] flex flex-row justify-between items-center">
          <div className="our-story__four-content w-[590px] h-[288px] flex flex-col">
            <h3 className="our-story__four-title text-h3 flex text-left mb-4">
              MONUSHÉ: WHIMSICAL ELEGANCE, UNCOMPLICATED BEAUTY
            </h3>
            <h5 className="our-story__four-description text-h5 min-w-[285px] flex items-center">
              Our designs are destined to&nbsp;captivate every woman. Our
              products are distinguished by&nbsp;bold angles, robust lines,
              meticulous attention to detail, and the allure of flawlessly
              selected gemstones. Presently, we proudly present to&nbsp;you
              the&nbsp;epitome of&nbsp;top-tier, distinctive, and opulent
              creations. Why, you might ask? Simply because our&nbsp;creations
              are&nbsp;meticulously handmade, each&nbsp;piece with&nbsp;its
              unique narrative, a&nbsp;lasting legacy that&nbsp;transcends
              generations. We eagerly anticipate the pleasure of&nbsp;hosting
              you at&nbsp;our&nbsp;jewelry shop!
            </h5>
          </div>
          <div className="our-story__four-picture w-[488px] flex flex-row justify-end">
            <img
              src="https://sun9-50.userapi.com/impf/E-DczPPAF0rkQOlQMRJFuOSEkrxeAReD5G__ow/SUql1Latpcg.jpg?size=488x545&quality=95&sign=e3614b95c8e6f7f43fec4f92ff90d924&type=album"
              alt="girl"
            />
          </div>
        </section>
        <section className="our-story__five relative h-[497px] w-cont overflow-hidden flex flex-col items-center mt-[180px]">
          <h3 className="welcome__two-title text-h3 min-w-[285px] flex items-center">
            DISCOVER OUR DESIGNS
          </h3>
          <div className="welcome__five-catalog h-[352px] absolute top-[72px] w-[1840.8px]">
            <WelcomeSlider section="two" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
