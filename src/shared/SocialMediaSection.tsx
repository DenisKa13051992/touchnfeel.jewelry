import React from 'react';

function SocialMediaSection(data: { pictures: string[] }) {
  const { pictures } = data;
  return (
    <section className="welcome__nine mt-[180px] min-h-[405px] w-cont flex flex-col justify-between">
      <h2 className="welcome__nine-title text-h2 text-center">INSTAGRAM</h2>
      <h5 className="welcome__five-description text-h5 w-full text-center pr-4">
        Share your&nbsp;photos with&nbsp;us using
        <span className="font-semibold"> #monushe </span> and tag us
        <span className="font-semibold"> @monushe_jewelry</span>
        &nbsp;for your&nbsp;chance to&nbsp;be featured!
      </h5>
      <div className="welcome__nine-content grid grid-cols-4 gap-[1.25vw] w-full min-h-[285px]">
        {pictures.map((item) => {
          return (
            <img
              src={item}
              key={item}
              alt="instagram photos"
              className="welcome__nine-img min-w-[285px] max-w-none border-solid border border-transparent rounded"
            />
          );
        })}
      </div>
    </section>
  );
}

export default SocialMediaSection;
