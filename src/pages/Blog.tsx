import React from 'react';
import './Blog.scss';
import ImgPages from 'src/widgets/ImgPages';

function Blog() {
  const imgTitle: string = 'BLOG';
  return (
    <div className="about-wrapper w-full flex flex-col items-center">
      <ImgPages imgTitle={imgTitle} />
      <div className="blog-container w-full h-full flex flex-col justify-center items-center">
        <section className="blog-content w-cont h-full mt-[120px] flex flex-row justify-center">
          <h5 className="blog-one-description text-h5 max-w-[679px] flex items-center text-center">
            Discover stories, trends, and inspirations from the world of
            jewelry. From timeless craftsmanship to modern styling. Explore how
            details define elegance.
          </h5>
        </section>
        <div className="blog__left w-[337px] h-[228px] flex flex-col" />
        <div className="blog__right max-w-[590px] w-full min-h-[602px] flex flex-col justify-between items-start" />
      </div>
    </div>
  );
}

export default Blog;
