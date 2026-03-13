import React from 'react';
import './Contacts.scss';
import ImgPages from 'src/widgets/ImgPages';

function Contacts() {
  const imgTitle: string = 'CONTACTS';
  return (
    <div className="about-wrapper w-full flex flex-col items-center">
      <ImgPages imgTitle={imgTitle} />
      <div className="sustainability-container w-full flex flex-col items-center">
        <section className="sustainability-one w-cont h-[72px] mt-[120px] flex flex-row justify-center">
          <h5 className="sustainability-one-description text-h5 max-w-[996px] flex items-center">
            Embracing sustainability and environmental consciousness is
            at&nbsp;the&nbsp;core of our&nbsp;brand values. Our&nbsp;commitment
            to&nbsp;longevity is evident in the&nbsp;design of&nbsp;every piece,
            prioritizing timeless creations crafted from&nbsp;high-quality
            materials over disposable fashion jewelry. Exclusively utilizing
            sterling silver, 18ct&nbsp;gold, and&nbsp;rhodium plating,
            we&nbsp;ensure that&nbsp;any&nbsp;waste generated during production
            can be easily remelted and&nbsp;reused. By&nbsp;crafting each design
            in&nbsp;limited quantities, we&nbsp;minimize excess, producing only
            what is necessary.
          </h5>
        </section>
        <section className="sustainability__two w-full h-[640px] mt-[80px] flex flex-row justify-between items-center">
          <div className="sustainability__two-left w-1/2 h-full bg-brown/20 flex flex-col items-start">
            <div className="sustainability__two-content w-[600px] h-full flex flex-col items-end justify-center">
              <h3 className="sustainability__two-title w-[488px] text-h3 flex text-left mb-4">
                PACKAGING
              </h3>
              <h5 className="sustainability__two-description w-[488px] text-h5 min-w-[285px] flex items-center">
                Our packaging is consciously designed for reuse
                or&nbsp;recycling. Each gift box and bag is crafted
                from&nbsp;FSC certified card, ensuring responsible sourcing
                that&nbsp;protects endangered species and forests.
                With&nbsp;everything being 100% recyclable except the foam
                insert, our&nbsp;partners are actively working on
                a&nbsp;recyclable foam, which we plan to&nbsp;incorporate within
                the&nbsp;next 12 months. Furthermore, any plastic bags used for
                jewelry protection during packing are now 100% biodegradable.
                Composed of&nbsp;plant-based materials, these biodegradable
                plastics decompose fully in&nbsp;just three
                to&nbsp;six&nbsp;months. To&nbsp;extend the&nbsp;life
                of&nbsp;your&nbsp;jewelry, we encourage you to&nbsp;repurpose
                these bags for&nbsp;storage after giving each piece
                a&nbsp;gentle polish to&nbsp;remove any residue.
              </h5>
            </div>
          </div>
          <div className="sustainability__two-picture w-1/2 h-full flex flex-row justify-end">
            <img
              src="https://sun9-44.userapi.com/impg/U-tfo28jtjqTq8opuRZOfcUycFU1DRukdLZiTg/7xKcV4dfOTA.jpg?size=800x640&quality=95&sign=c33f8fc3a9c8eee02b3ebd47b680f4d3&type=album"
              alt="present"
            />
          </div>
        </section>
        <section className="sustainability__three w-full h-[640px] flex flex-row justify-between items-center">
          <div className="sustainability__three-picture w-1/2 h-full flex flex-row justify-end">
            <img
              src="https://sun9-59.userapi.com/impg/AUj_9wkyQTAR5Xd-CJB4IFNLmDwlXNzwhaJuzg/lHobbUFdMkE.jpg?size=800x640&quality=95&sign=1fbbd48b2cbb24d3e86399500391b2da&type=album"
              alt="man"
            />
          </div>
          <div className="sustainability__three-right w-1/2 h-full bg-bgGray flex flex-col items-end">
            <div className="sustainability__three-content w-[600px] h-full flex flex-col items-start justify-center">
              <h3 className="sustainability__three-title w-[488px] text-h3 flex text-left mb-4">
                COMMITMENT TO&nbsp;ETHICS AND&nbsp;EQUALITY
              </h3>
              <h5 className="sustainability__three-description w-[488px] text-h5 min-w-[285px] flex items-center">
                Our jewelry partners hold certification from
                the&nbsp;Responsible Jewellery Council, attesting
                to&nbsp;their&nbsp;commitment to&nbsp;ethical practices. Within
                our&nbsp;team, 75% are women, and among our&nbsp;partners, 70%
                of&nbsp;the&nbsp;workforce comprises women, ensuring equal
                opportunities for&nbsp;individuals with&nbsp;disabilities.
              </h5>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contacts;
