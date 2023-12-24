import React from 'react';

function WelcomeAdvantages(data: {
  product: string;
  description: string;
  title: string;
  index: number;
}) {
  const { product, description, title } = data;
  return (
    <div className="border-solid welcome__six-catalog-item flex flex-col justify-between items-center h-[132px] min-w-[250px]">
      <img
        src={product}
        alt="catalog-"
        className="welcome__six-catalog-img min-w-[48px] max-w-none border-solid border border-transparent rounded"
      />
      <div className="welcome__six-catalog-title-container flex flex-col justify-between items-center h-[60px]">
        <h4 className="welcome__six-catalog-title text-h4">{title}</h4>
        <h5 className="welcome__six-catalog-description text-h5">
          {description}
        </h5>
      </div>
    </div>
  );
}

export default WelcomeAdvantages;
