import React from 'react';
import { Link } from 'react-router-dom';

interface AboutLinks {
  link: string;
  routeLink: string;
}

function HeaderHoverList(data: { aboutLinks: AboutLinks[] }) {
  const { aboutLinks } = data;
  return (
    <ul className="header__panel-navigation-about-list w-[185px] h-[152px] bg-white flex flex-col p-4 items-center justify-between absolute left-[-61.666px] pt-6 border-1 rounded">
      {aboutLinks.map((item) => {
        return (
          <li className="text-header-font font-lato text-black" key={item.link}>
            <Link to={item.routeLink}>{item.link}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default HeaderHoverList;
