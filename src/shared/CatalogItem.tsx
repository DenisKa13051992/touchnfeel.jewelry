import React from 'react';

function CatalogItem(data: { product: string; index: number }) {
  const { product, index } = data;
  const productName = product.split('two-')[1].slice(0, -4);
  console.log(productName, index);
  return (
    <div
      className={`border-solid w-[285px] h-full flex flex-row items-end welcome__two-catalog-item-${productName} flex flex-col justify-between items-start border-solid border border-transparent rounded`}
    >
      <h4 className="text-basicMedium text-black w-full">{`0${index + 1}`}</h4>
      <img
        src={product}
        alt={`catalog-${productName}`}
        className="min-w-[285px]"
      />
    </div>
  );
}

export default CatalogItem;
