import React from 'react';

function ImgPages(data: { imgTitle: string }) {
  const { imgTitle } = data;
  const bgrImgLink =
    imgTitle === 'CONTACTS'
      ? 'https://sun9-51.userapi.com/s/v1/ig2/tRen0Qb2MrP2NTVthnpAIH9XLAZFRnDJtTKQXt9slbGdP6t6zp_oUYqR7xB1be96-x4WEL8gJ5rUhwMWPijkEFqa.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x854,1440x960,1684x1123&from=bu&cs=1684x0'
      : 'https://sun9-43.userapi.com/impf/nkIeNWwUIk_DtfSZideJG_Ro_GzhU8XPy2mQsA/PHEJtUlk3vw.jpg?size=1600x400&quality=95&sign=f010b46d6480e706c5c998acbf3fc517&type=album';
  return (
    <section
      style={{ backgroundImage: `url(${bgrImgLink})` }}
      className="
    bg-cover w-full h-[400px] flex flex-row justify-center items-end"
    >
      <h1 className="about__bgr-title text-black text-h1 pb-10">{imgTitle}</h1>
    </section>
  );
}

export default ImgPages;
