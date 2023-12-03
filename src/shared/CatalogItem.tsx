import React from 'react';
import like from 'assets/like.png';
import dislike from 'assets/dislike.png';

function CatalogItem(data: {
  product: string;
  index: number;
  description?: string;
  price?: string;
  name?: string;
}) {
  const { product, index, description, price, name } = data;
  const itemSize = !price ? '285px' : '387px';
  return (
    <div className="border-solid welcome__two-catalog-item flex flex-col justify-between items-start h-full">
      <h4 className="welcome__two-catalog-number text-basicMedium text-black w-full">{`0${
        index + 1
      }`}</h4>
      <div className="welcome__two-catalog-img-container relative">
        <img
          src={product}
          alt="catalog-"
          className={`welcome__two-catalog-img min-w-[${itemSize}] max-w-none border-solid border border-transparent rounded`}
        />
        {itemSize === '387px' && index !== 1 && (
          <img
            src={dislike}
            alt="add to favorites"
            className="min-w-[32px] absolute bottom-4 right-4"
          />
        )}
        {itemSize === '387px' && index === 1 && (
          <img
            src={like}
            alt="add to favorites"
            className="min-w-[32px] absolute bottom-4 right-4"
          />
        )}
        {name && (
          <h5 className="welcome_two-catalog-item-name h-[36px] w-full absolute bottom-[18px] text-h5 font-semibold bg-white opacity-60 flex justify-center items-center text-[#000000]">
            {name}
          </h5>
        )}
      </div>
      {description && (
        <div className="welcome__two-catalog-description font-medium font-lato text-[18px] leading-6 w-full">
          {description}
        </div>
      )}
      {price && (
        <div className="welcome__two-catalog-price font-bold font-lato text-[24px] leading-9 w-full">
          {price}
        </div>
      )}
    </div>
  );
}

export default CatalogItem;
