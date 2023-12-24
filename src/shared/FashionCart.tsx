import React from 'react';
import CommentsIco from 'assets/comments-ico.svg';

function FashionCart(data: {
  product: string;
  description: string;
  title: string;
  category: string;
  date: string;
  comments: number;
}) {
  const { product, description, title, category, date, comments } = data;
  const commentsNumber = comments || 'No';
  return (
    <div className="welcome__eight-content-cart h-full flex flex-col items-center border-solid border-0 rounded">
      <img
        src={product}
        alt=""
        className="border-solid border-0 rounded-t w-full"
      />
      <div className="welcome__eight-info w-full h-[149px] flex flex-col p-6 mb-4 overflow-hidden">
        <h4 className="welcome__eight-info-title text-h4">{title}</h4>
        <div className="welcome__eight-links flex flex-row text-small justify-between items-center w-full mt-3 mb-4">
          <p className="welcome__eight-links-category">{category}</p>
          <div className="welcome__eight-links-category-stick h-5 w-[1px] bg-black" />
          <p className="welcome__eight-links-date">{date}</p>
          <div className="welcome__eight-links-category-stick h-5 w-[1px] bg-black" />
          <p className="welcome__eight-links-comments flex flex-row items-center gap-2">
            <img src={CommentsIco} alt="" />
            {commentsNumber} comments
          </p>
        </div>
        <h5 className="welcome__eight-info-description text-h5">
          {description}
        </h5>
      </div>
    </div>
  );
}

export default FashionCart;
