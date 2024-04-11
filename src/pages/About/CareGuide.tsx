import React, { useState } from 'react';
import './CareGuide.scss';
import chevron from 'src/assets/down-chevron.svg';

function CareGuide() {
  const [openHowShould, setOpenHowShould] = useState('');
  const [openHowCan, setOpenHowCan] = useState('');
  const [openWhatIs, setOpenWhatIs] = useState('');
  const [openHowDo, setOpenHowDo] = useState('');
  const [openWhatAbout, setOpenWhatAbout] = useState('');
  return (
    <div className="about-wrapper w-full flex flex-col items-center">
      <section className="about__bgr w-full h-[400px] flex flex-row justify-center items-end">
        <h1 className="about__bgr-title text-black text-h1 pb-10">
          CARE GUIDE AND WARRANTY
        </h1>
      </section>
      <div className="care-guide-container w-full flex flex-col items-center">
        <section className="care-guide__one w-full mt-[120px] flex flex-row justify-center items-center">
          <div className="care-guide__one-content max-w-[996px] flex flex-col items-end justify-center">
            <h3 className="care-guide__one-warranty-title w-full text-h3 flex justify-center mb-4">
              WARRANTY
            </h3>
            <h5 className="care-guide__one-warranty-description w-full text-h5 min-w-[285px] flex items-center">
              Every MONUSHÉ piece comes with a&nbsp;12-month warranty, ensuring
              your&nbsp;purchase is&nbsp;worry-free. We stand
              by&nbsp;the&nbsp;quality of&nbsp;our&nbsp;craftsmanship and
              will&nbsp;repair or&nbsp;replace items with manufacturing faults
              or&nbsp;defects if&nbsp;our&nbsp;care guide has&nbsp;been followed
              and&nbsp;the&nbsp;piece is&nbsp;returned
              within&nbsp;12&nbsp;months of&nbsp;purchase. If you discover
              any&nbsp;issues within the warranty period, please discontinue
              wearing the&nbsp;piece and&nbsp;promptly reach
              out&nbsp;to&nbsp;us&nbsp;with&nbsp;a&nbsp;photo and
              your&nbsp;order number. This will help&nbsp;us&nbsp;assess
              the&nbsp;best&nbsp;course of&nbsp;action for&nbsp;repair. Please
              note that our&nbsp;warranty does&nbsp;not cover lost
              or&nbsp;stolen items, misuse, third-party repairs (please
              consult&nbsp;us&nbsp;for&nbsp;repair advice first),
              or&nbsp;stretched items. For prompt assistance
              with&nbsp;any&nbsp;concerns, contact&nbsp;us&nbsp;via email
              or&nbsp;telephone at +370&nbsp;(619)&nbsp;15&nbsp;889, and we will
              guide you through resolving the&nbsp;issue.
            </h5>
            <h3 className="care-guide__one-care-guide-title w-full text-h3 flex justify-center mt-[60px] mb-4">
              CARE GUIDE
            </h3>
            <h5 className="care-guide__one-care-guide-description w-full text-h5 min-w-[285px] flex items-center">
              Each MONUSHÉ Jewelry piece is&nbsp;meticulously crafted
              to&nbsp;the&nbsp;highest standards, using sterling silver
              and&nbsp;offering the&nbsp;option of&nbsp;18ct gold vermeil or
              18ct&nbsp;rose gold vermeil. Our&nbsp;jewelry is&nbsp;nickel-free,
              making it&nbsp;ideal for&nbsp;daily wear! We design
              each&nbsp;piece for&nbsp;regular rotation, destined to&nbsp;be
              cherished for&nbsp;years. While our&nbsp;silver creations boast
              a&nbsp;lifetime of&nbsp;durability, a&nbsp;little care can extend
              the&nbsp;life of&nbsp;our&nbsp;gold vermeil plated pieces
              for&nbsp;years. Precious metals may be&nbsp;affected
              by&nbsp;chemicals present in&nbsp;items like perfumes, body
              lotions, and&nbsp;sun creams. To&nbsp;minimize the&nbsp;impact
              of&nbsp;these chemicals, we&nbsp;recommend putting
              on&nbsp;your&nbsp;jewelry once you&rsquo;ve finished dressing.
            </h5>
          </div>
        </section>
        <section className="care-guide__two w-[794px] mt-[120px] flex flex-col justify-between items-center">
          <div className="care-guide__two-how-should w-full min-h-[80px] flex flex-col items-start border-t-[1px] border-borderGrey border-solid">
            <div
              role="presentation"
              className="care-guide__two-container w-full pt-[26px] pb-4 flex justify-between items-center cursor-pointer"
              onClick={() => {
                return openHowShould
                  ? setOpenHowShould('')
                  : setOpenHowShould('HowShould');
              }}
            >
              <h4 className="care-guide__two-title text-h4 font-medium h-full w-full flex text-left items-center hover:underline">
                How should I store my jewellery?
              </h4>
              <button
                type="button"
                className="care-guide__two-chevron w-6 h-6 mr-3 flex justify-center items-center"
              >
                <img
                  src={chevron}
                  className={`${openHowShould && 'rotate-180'} w-full h-full`}
                  alt="open description"
                />
              </button>
            </div>
            {openHowShould && (
              <h5 className="care-guide__two-description w-full text-h5 flex items-center pb-4 px-2 border-b-[1px] border-borderGrey border-solid">
                When you&rsquo;re not&nbsp;wearing your&nbsp;Muru jewellery,
                keep&nbsp;it in&nbsp;a&nbsp;dark and dry place, like
                the&nbsp;jewellery box that your&nbsp;Muru piece came with. If
                you no&nbsp;longer have your&nbsp;original box, keeping&nbsp;it
                in&nbsp;a&nbsp;jewellery box or&nbsp;jewellery pouch works just
                as&nbsp;well. Giving your&nbsp;jewellery a&nbsp;quick polish
                after wearing it&nbsp;to&nbsp;ensure any&nbsp;chemicals and
                moisture are removed will&nbsp;ensure your&nbsp;jewellery stays
                in&nbsp;good&nbsp;condition.
              </h5>
            )}
          </div>
          <div className="care-guide__two-content-how-can w-full min-h-[80px] flex flex-col items-start border-y-[1px] border-borderGrey border-solid">
            <div
              role="presentation"
              onClick={() => {
                return openHowCan ? setOpenHowCan('') : setOpenHowCan('HowCan');
              }}
              className="care-guide__two-container w-full pt-[26px] pb-4 flex items-center cursor-pointer"
            >
              <h4 className="care-guide__two-title text-h4 font-medium h-full w-full flex text-left items-center hover:underline">
                How can I take care of my sterling silver jewellery?
              </h4>
              <button
                type="button"
                className="care-guide__two-chevron w-6 h-6 mr-3 flex justify-center items-center"
              >
                <img
                  src={chevron}
                  alt="open description"
                  className={`${openHowCan && 'rotate-180'} w-full h-full`}
                />
              </button>
            </div>
            {openHowCan && (
              <h5 className="care-guide__two-description w-full text-h5 flex items-center pb-4 px-2">
                Each of&nbsp;our&nbsp;sterling silver pieces is&nbsp;plated
                with&nbsp;rhodium. Rhodium is a&nbsp;member
                of&nbsp;the&nbsp;platinum metal group, so it&rsquo;s more
                scratch resistant and is&nbsp;more resistant to&nbsp;tarnishing.
                Rhodium-plated sterling silver is the best kind of&nbsp;silver
                jewellery to&nbsp;buy as&nbsp;it&nbsp;has&nbsp;longevity and
                it&rsquo;s perfect for&nbsp;everyday wear. If your&nbsp;silver
                jewellery has&nbsp;come into&nbsp;contact with&nbsp;chemicals
                from&nbsp;everyday products or it&rsquo;s starting to&nbsp;look
                a&nbsp;little lacklustre, gently polish it&nbsp;with
                a&nbsp;silver polishing cloth to&nbsp;brighten it&nbsp;up. We
                recommend polishing your&nbsp;silver jewellery every month or
                so&nbsp;i&nbsp;you wear it&nbsp;regularly, it&rsquo;s also best
                to&nbsp;polish it before&nbsp;storing.
              </h5>
            )}
          </div>
          <div className="care-guide__two-content-what-is w-full min-h-[80px] flex flex-col items-start border-y-[1px] border-borderGrey border-solid">
            <div
              role="presentation"
              onClick={() => {
                return openWhatIs ? setOpenWhatIs('') : setOpenWhatIs('WhatIs');
              }}
              className="care-guide__two-container w-full pt-[26px] pb-4 flex items-center cursor-pointer"
            >
              <h4 className="care-guide__two-title text-h4 font-medium h-full w-full flex text-left items-center hover:underline">
                What is gold vermeil?
              </h4>
              <button
                type="button"
                className="care-guide__two-chevron w-6 h-6 mr-3 flex justify-center items-center"
              >
                <img
                  src={chevron}
                  alt="open description"
                  className={`${openWhatIs && 'rotate-180'} w-full h-full`}
                />
              </button>
            </div>
            {openWhatIs && (
              <h5 className="care-guide__two-description w-full text-h5 flex items-center pb-4 px-2">
                Gold vermeil jewellery has a&nbsp;solid sterling silver base and
                a&nbsp;much thicker coating of&nbsp;18ct gold (at&nbsp;least 2.5
                microns). To&nbsp;ensure the&nbsp;best quality we use
                a&nbsp;3-micron plating. The reason we love gold vermeil is
                it&nbsp;gives you a&nbsp;high quality, beautiful and long
                lasting piece of&nbsp;jewellery that&rsquo;s much more
                affordable than&nbsp;solid gold. It&rsquo;s also great
                for&nbsp;people with&nbsp;sensitive skin as&nbsp;it&rsquo;s made
                from&nbsp;precious metals i.e. nickel free! Gold vermeil
                jewellery is a&nbsp;much higher quality than&nbsp;regular plated
                jewellery. Plated jewellery often features a&nbsp;thin layer
                of&nbsp;gold on&nbsp;top of&nbsp;cheap mixed metals
                that&nbsp;may discolour or&nbsp;cause allergies.
              </h5>
            )}
          </div>
          <div className="care-guide__two-content-how-do w-full min-h-[80px] flex flex-col items-start border-y-[1px] border-borderGrey border-solid">
            <div
              role="presentation"
              onClick={() => {
                return openHowDo ? setOpenHowDo('') : setOpenHowDo('HowDo');
              }}
              className="care-guide__two-container w-full pt-[26px] pb-4 flex items-center cursor-pointer"
            >
              <h4 className="care-guide__two-title text-h4 font-medium h-full w-full flex text-left items-center hover:underline">
                How do I take care of gold vermeil jewellery?
              </h4>
              <button
                type="button"
                className="care-guide__two-chevron w-6 h-6 mr-3 flex justify-center items-center"
              >
                <img
                  src={chevron}
                  alt="open description"
                  className={`${openHowDo && 'rotate-180'} w-full h-full`}
                />
              </button>
            </div>
            {openHowDo && (
              <h5 className="care-guide__two-description w-full text-h5 flex items-center pb-4 px-2">
                By taking good care of&nbsp;your gold vermeil jewellery, it will
                preserve the&nbsp;longevity of&nbsp;each&nbsp;piece. Follow
                these simple steps to&nbsp;make the&nbsp;most
                of&nbsp;your&nbsp;vermeil jewellery:
                <br />
                <br />
                • Always remove your&nbsp;jewellery before bathing
                or&nbsp;swimming.
                <br />• When you&rsquo;re getting ready for&nbsp;the day, always
                put your&nbsp;jewellery on&nbsp;last to&nbsp;minimize
                the&nbsp;contact with&nbsp;chemicals found in&nbsp;perfumes and
                lotions etc.
                <br />• Regularly give your&nbsp;jewellery a&nbsp;gentle polish
                with&nbsp;a&nbsp;microfiber or gold polishing cloth and ensure
                any&nbsp;chemicals or&nbsp;moisture on the&nbsp;jewellery have
                been removed before storing.
                <br />• Gold vermeil rarely tarnishes, but
                very&nbsp;occasionally if&nbsp;it&rsquo;s&nbsp;been exposed
                to&nbsp;moist air or chemicals it&nbsp;doesn&rsquo;t agree with,
                you may notice a&nbsp;brown spot appearing
                on&nbsp;the&nbsp;surface - simply polish this off&nbsp;with
                a&nbsp;polishing cloth and it&nbsp;should look good as new!
                <br />
                <br />
                Like most&nbsp;of&nbsp;the&nbsp;best things in&nbsp;life,
                the&nbsp;better care you take&nbsp;of&nbsp;your&nbsp;jewellery
                the&nbsp;longer it&nbsp;will last.
              </h5>
            )}
          </div>
          <div className="care-guide__two-content-what-about w-full min-h-[80px] flex flex-col items-start border-y-[1px] border-borderGrey border-solid">
            <div
              role="presentation"
              onClick={() => {
                return openWhatAbout
                  ? setOpenWhatAbout('')
                  : setOpenWhatAbout('WhatAbout');
              }}
              className="care-guide__two-container w-full pt-[26px] pb-4 flex items-center cursor-pointer"
            >
              <h4 className="care-guide__two-title text-h4 font-medium h-full w-full flex text-left items-center hover:underline">
                And what about pearls?
              </h4>
              <button
                type="button"
                className="care-guide__two-chevron w-6 h-6 mr-3 flex justify-center items-center"
              >
                <img
                  src={chevron}
                  alt="open description"
                  className={`${openWhatAbout && 'rotate-180'} w-full h-full`}
                />
              </button>
            </div>
            {openWhatAbout && (
              <h5 className="care-guide__two-description w-full text-h5 flex items-center pb-4 px-2">
                All of&nbsp;our&nbsp;pearls are&nbsp;real, natural freshwater
                pearls. We handpick each pearl for&nbsp;it&rsquo;s quality and
                lustre. If you look closely, you&rsquo;ll see a&nbsp;pastel
                rainbow of&nbsp;colors glowing on the&nbsp;surface. Store your
                pearls in a&nbsp;soft pouch (think satin, velvet or&nbsp;silk)
                and try&nbsp;to wear them&nbsp;regularly.
              </h5>
            )}
          </div>
        </section>
        <h4 className="care-guide__two-mail max-w-[996px] text-h4 text-center mt-40 items-center pb-4 px-2">
          Have any more questions? Simply drop us an email at info@monushe.com
          and we will be happy to help you!
        </h4>
      </div>
    </div>
  );
}

export default CareGuide;
