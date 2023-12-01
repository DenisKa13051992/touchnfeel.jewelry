import React from 'react';

function CatalogItem(data: {
  product: string;
  index: number;
  description?: string;
  price?: string;
}) {
  const { product, index, description, price } = data;
  const productName = product.split('-')[2].slice(0, -4);
  const itemSize = product.includes('two') ? '285px' : '387px';
  console.log(product, productName, index, product.includes('two'));
  return (
    <div
      className={`border-solid flex flex-row items-end welcome__two-catalog-item-${productName} flex flex-col justify-between items-start h-full`}
    >
      <h4 className="welcome__two-catalog-number text-basicMedium text-black w-full">{`0${
        index + 1
      }`}</h4>
      <img
        src={product}
        alt={`catalog-${productName}`}
        className={`welcome__two-catalog-img min-w-[${itemSize}] max-w-none border-solid border border-transparent rounded`}
      />
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
