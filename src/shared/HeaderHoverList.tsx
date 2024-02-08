import React from 'react';

function HeaderHoverList(data: { aboutLinks: string[] }) {
  const { aboutLinks } = data;
  return (
    <ul className="header__panel-navigation-about-list w-[185px] h-[152px] bg-white flex flex-col p-4 items-center justify-between absolute left-[-61.666px] pt-6 border-1 rounded">
      {aboutLinks.map((item) => {
        return (
          <li className="text-header-font font-lato text-black" key={item}>
            {item}
          </li>
        );
      })}
    </ul>
  );
}

export default HeaderHoverList;
