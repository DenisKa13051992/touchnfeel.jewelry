import React from 'react';
import CommentsIco from 'assets/comments-ico.png';

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
    <div className="welcome__eight-content min-h-[471px] flex flex-col items-center">
      <img
        src={product}
        alt=""
        className="border-solid border border-transparent rounded-t"
      />
      <div className="welcome__eight-info w-[542px] h-[125px] flex flex-col mt-6">
        <h4 className="welcome__eight-info-title text-h4">{title}</h4>
        <div className="welcome__eight-links flex flex-row justify-start items-center gap-[14px] w-full mt-3 mb-4">
          <p className="welcome__eight-links-category text-small">{category}</p>
          <div className="welcome__eight-links-category-stick h-5 w-[1px] bg-black" />
          <p className="welcome__eight-links-date text-small">{date}</p>
          <div className="welcome__eight-links-category-stick h-5 w-[1px] bg-black" />
          <p className="welcome__eight-links-comments text-small flex flex-row items-center gap-2">
            <img src={CommentsIco} alt="" />
            {commentsNumber} comments
          </p>
        </div>
        <h5 className="welcome__eight-info-description text-h5 overflow-hidden">
          {description}
        </h5>
      </div>
    </div>
  );
}

export default FashionCart;
