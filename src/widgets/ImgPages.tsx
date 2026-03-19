import React from 'react';

function ImgPages(data: { imgTitle: string }) {
  const { imgTitle } = data;
  const bgrImgLinkObj = {
    CONTACTS:
      'https://sun9-51.userapi.com/s/v1/ig2/tRen0Qb2MrP2NTVthnpAIH9XLAZFRnDJtTKQXt9slbGdP6t6zp_oUYqR7xB1be96-x4WEL8gJ5rUhwMWPijkEFqa.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x854,1440x960,1684x1123&from=bu&cs=1684x0',
    BLOG: 'https://sun9-5.userapi.com/s/v1/ig2/Wpcm8yE5xjnolQI_97FQGjxqAwOUA9K0J4csOnye7n7oDsXmx5glIfhVHtD2IeOYOuxZXT1xUpf_0afV8XcZOzpc.jpg?quality=95&as=32x8,48x12,72x18,108x27,160x40,240x60,360x90,480x120,540x135,640x160,720x180,1080x270,1280x320,1440x360,1600x400&from=bu&cs=1600x0',
    default:
      'https://sun9-43.userapi.com/impf/nkIeNWwUIk_DtfSZideJG_Ro_GzhU8XPy2mQsA/PHEJtUlk3vw.jpg?size=1600x400&quality=95&sign=f010b46d6480e706c5c998acbf3fc517&type=album',
  };
  const bgrImgLink = Object.entries(bgrImgLinkObj).filter(
    (item) => item[0] === imgTitle
  );

  return (
    <section
      style={{
        backgroundImage: `url(${
          (!!bgrImgLink.length && bgrImgLink[0][1]) || bgrImgLinkObj.default
        })`,
      }}
      className="
    bg-cover w-full h-[400px] flex flex-row justify-center items-end"
    >
      <h1 className="about__bgr-title text-black text-h1 pb-10">{imgTitle}</h1>
    </section>
  );
}

export default ImgPages;
