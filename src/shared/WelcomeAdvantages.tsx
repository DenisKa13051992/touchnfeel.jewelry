import React from 'react';

function WelcomeAdvantages(data: {
  product: string;
  description: string;
  title: string;
}) {
  const { product, description, title } = data;
  const productName = product.split('-')[2].slice(0, -4);
  return (
    <div
      className={`border-solid welcome__two-catalog-item-${productName} flex flex-col justify-between items-center h-[132px] min-w-[250px]`}
    >
      <img
        src={product}
        alt={`catalog-${productName}`}
        className="welcome__two-catalog-img min-w-[48px] max-w-none border-solid border border-transparent rounded"
      />
      <div className="welcome__two-catalog-title-container flex flex-col justify-between items-center h-[60px]">
        <h4 className="welcome__two-catalog-title text-h4">{title}</h4>
        <h5 className="welcome__two-catalog-description text-h5">
          {description}
        </h5>
      </div>
    </div>
  );
}

export default WelcomeAdvantages;
