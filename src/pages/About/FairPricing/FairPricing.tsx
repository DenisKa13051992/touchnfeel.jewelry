import React, { useState } from 'react';
import './FairPricing.scss';
import chevron from 'src/assets/down-chevron.svg';
import SocialMediaSection from 'src/shared/SocialMediaSection';
import fairPricingPictures from './FairPricingModel';

function FairPricing() {
  const [openSterling, setOpenSterling] = useState('');
  const [openVermeil, setOpenVermeil] = useState('');

  return (
    <div className="about-wrapper w-full flex flex-col items-center">
      <section className="about__bgr w-full h-[400px] flex flex-row justify-center items-end">
        <h1 className="about__bgr-title text-black text-h1 pb-10">
          FAIR PRICING
        </h1>
      </section>
      <div className="fair-pricing-container w-full flex flex-col items-center">
        <section className="fair-pricing-one w-cont h-[72px] mt-[120px] flex flex-row justify-center">
          <h5 className="fair-pricing-one-description text-h5 max-w-[996px] flex items-center">
            All our&nbsp;jewelry is meticulously designed and skillfully crafted
            by our&nbsp;trusted partner workshops. We exclusively sell directly
            to&nbsp;you, ensuring transparent pricing without unnecessary
            markups. We stand firm in our&nbsp;commitment to&nbsp;delivering
            high quality, impeccable presentation, ethical practices, and
            premium materials.
          </h5>
        </section>
        <section className="fair-pricing__two w-full h-[400px] mt-[120px] flex flex-row justify-between items-center">
          <div className="fair-pricing__two-left w-1/2 h-full bg-brown/20 flex flex-col items-end">
            <div className="fair-pricing__two-content w-[600px] h-full flex flex-col items-start justify-center">
              <h3 className="fair-pricing__two-title w-[488px] text-h3 flex text-left mb-4">
                MATERIALS
              </h3>
              <h5 className="fair-pricing__two-description w-[488px] text-h5 min-w-[285px] flex items-center">
                We refrain from utilizing inexpensive base metals or brass.
                Our&nbsp;exclusive choice is high-quality materials, ensuring
                enduring durability.
              </h5>
            </div>
          </div>
          <div className="fair-pricing__two-picture w-1/2 h-full flex flex-row justify-end">
            <img
              src="https://sun9-46.userapi.com/impg/K9snElU6WGwuqKJy5e6Uw0wj6yPZKZEg0ERVcw/VbogGvP7m4Q.jpg?size=800x400&quality=95&sign=bde97a05dd0aec104dadfea8cfc20ef0&type=album"
              alt="man"
            />
          </div>
        </section>
        <section className="fair-pricing__three w-[794px] mt-[80px] flex flex-col justify-between items-center">
          <div className="fair-pricing__three-top w-full min-h-[80px] flex flex-col items-start border-t-[1px] border-borderGrey border-solid">
            <div
              role="presentation"
              className="fair-pricing__three-container w-full pt-5 pb-4 flex justify-between items-center cursor-pointer"
              onClick={() => {
                return openSterling
                  ? setOpenSterling('')
                  : setOpenSterling('Sterling');
              }}
            >
              <h3 className="fair-pricing__three-title text-h3 h-full w-full flex text-left items-center hover:underline">
                STERLING SILVER
              </h3>
              <button
                type="button"
                className="fair-pricing__three-chevron w-6 h-6 mr-2 flex justify-center items-center"
              >
                <img
                  src={chevron}
                  className={`${openSterling && 'rotate-180'} w-full h-full`}
                  alt="open description"
                />
              </button>
            </div>
            {openSterling && (
              <h5 className="fair-pricing__three-description w-full text-h5 flex items-center pb-4 px-2 border-b-[1px] border-borderGrey border-solid">
                Each piece of&nbsp;our jewelry is meticulously crafted from
                solid sterling silver and then plated with&nbsp;rhodium. As
                a&nbsp;member of&nbsp;the&nbsp;platinum metal group, rhodium
                enhances scratch and tarnish resistance. Opting for
                rhodium-plated sterling silver ensures longevity, making it
                the&nbsp;ideal choice for&nbsp;everyday wear.
                This&nbsp;also&nbsp;imparts a&nbsp;similar color
                to&nbsp;an&nbsp;engagement ring, adding a&nbsp;touch
                of&nbsp;timeless elegance to&nbsp;your silver jewelry.
              </h5>
            )}
          </div>
          <div className="fair-pricing__three-content-bottom w-full min-h-[80px] flex flex-col items-start border-y-[1px] border-borderGrey border-solid">
            <div
              role="presentation"
              onClick={() => {
                return openVermeil
                  ? setOpenVermeil('')
                  : setOpenVermeil('Vermeil');
              }}
              className="fair-pricing__three-container w-full pt-5 pb-4 flex items-center cursor-pointer"
            >
              <h3 className="fair-pricing__three-title text-h3 h-full w-full flex text-left items-center hover:underline">
                18CT GOLD VERMEIL
              </h3>
              <button
                type="button"
                className="fair-pricing__three-chevron w-6 h-6 mr-2 flex justify-center items-center"
              >
                <img
                  src={chevron}
                  alt="open description"
                  className={`${openVermeil && 'rotate-180'} w-full h-full`}
                />
              </button>
            </div>
            {openVermeil && (
              <h5 className="fair-pricing__three-description w-full text-h5 flex items-center pb-4 px-2">
                Our gold vermeil jewelry boasts a&nbsp;sturdy sterling silver
                foundation with a&nbsp;generous 3-micron plating of&nbsp;18ct
                gold, surpassing the&nbsp;standard 2.5 microns for&nbsp;superior
                quality. True to&nbsp;legal standards, our pieces earn
                the&nbsp;&apos;vermeil&apos; designation, signifying their
                adherence to&nbsp;these&nbsp;stringent quality criteria. The
                appeal of&nbsp;gold vermeil lies in its ability to&nbsp;offer
                exquisite, enduring jewelry at&nbsp;a&nbsp;more accessible price
                point than solid gold. Its composition, exclusively derived from
                precious metals, ensures a&nbsp;nickel-free experience
                for&nbsp;those with&nbsp;sensitive skin. Elevating itself above
                regular plated jewelry, often unregulated and prone
                to&nbsp;discoloration, gold vermeil stands
                as&nbsp;a&nbsp;hallmark of&nbsp;unrivaled quality and lasting
                beauty.
              </h5>
            )}
          </div>
        </section>
        <section className="fair-pricing__four w-full h-[400px] mt-[80px] flex flex-row justify-between items-center">
          <div className="fair-pricing__four-picture w-1/2 h-full flex flex-row justify-end">
            <img
              src="https://sun9-64.userapi.com/impg/VUfWOQCf-nFHWxwuxRtP4dR695jxmKokMVt6Wg/Td7Nfco1UtQ.jpg?size=800x400&quality=95&sign=0f0e19f85837d429ca2a1b4ac877e97f&type=album"
              alt="man"
            />
          </div>
          <div className="fair-pricing__four-right w-1/2 h-full bg-bgGray flex flex-col items-start">
            <div className="fair-pricing__four-content w-[600px] h-full flex flex-col items-end justify-center">
              <h3 className="fair-pricing__four-title w-[488px] text-h3 flex text-left mb-4">
                ALLERGIES
              </h3>
              <h5 className="fair-pricing__four-description w-[488px] text-h5 min-w-[285px] flex items-center">
                We steer clear of&nbsp;cheap base metals or brass, opting solely
                for premium materials known for their&nbsp;longevity.
                The&nbsp;allure of&nbsp;sterling silver and 18ct gold vermeil
                extends beyond durability – they are also hypoallergenic,
                ensuring comfort for those with&nbsp;sensitive skin,
                as&nbsp;they are nickel-free. Your&nbsp;satisfaction and
                well-being are at&nbsp;the heart of&nbsp;our&nbsp;commitment
                to&nbsp;quality.
              </h5>
            </div>
          </div>
        </section>
        <section className="fair-pricing__five w-full h-[400px] flex flex-row justify-between items-center">
          <div className="fair-pricing__five-left w-1/2 h-full bg-bgGray flex flex-col items-end">
            <div className="fair-pricing__five-content w-[600px] h-full flex flex-col items-start justify-center">
              <h3 className="fair-pricing__five-title w-[488px] text-h3 flex text-left mb-4">
                DIVERSITY
              </h3>
              <h5 className="fair-pricing__five-description w-[488px] text-h5 min-w-[285px] flex items-center">
                At&nbsp;MONUSHÉ, we celebrate diversity with&nbsp;the&nbsp;same
                dedication as&nbsp;our&nbsp;commitment to&nbsp;style and
                excellence. Our&nbsp;diverse collection is&nbsp;thoughtfully
                curated, offering a&nbsp;range of&nbsp;styles to&nbsp;suit every
                taste. Explore the beauty of&nbsp;individuality
                with&nbsp;our&nbsp;stunning array, where every piece is crafted
                to&nbsp;perfection, reflecting the&nbsp;elegance
                that&nbsp;defines MONUSHÉ.
              </h5>
            </div>
          </div>
          <div className="fair-pricing__five-picture w-1/2 h-full flex flex-row justify-end">
            <img
              src="https://sun9-50.userapi.com/impg/ZPL8gbYjDGoBtNRhOg_F5o8C21cnFZGEsN_UOA/N2aW2i0810Y.jpg?size=800x400&quality=95&sign=38d089ffc4cd154212889e958a106e38&type=album"
              alt="man"
            />
          </div>
        </section>
        <SocialMediaSection pictures={fairPricingPictures} />
      </div>
    </div>
  );
}

export default FairPricing;
