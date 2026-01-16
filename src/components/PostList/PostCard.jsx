import React from 'react';

function PostCard({ post, onClick }) {
  const { title, text, img, img_2x, tags, autor, date, views } = post;

  return (
    <article
      className="w-full cursor-pointer transition-transform duration-200 ease hover:-translate-y-1"
      onClick={() => onClick(post)}
    >
      <div className="relative w-full pb-[66.67%] overflow-hidden rounded mb-4 group">
        <img
          src={img}
          srcSet={`${img} 1x, ${img_2x} 2x`}
          alt={title}
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 ease group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="px-1">
        {tags && (
          <span className="inline-block font-roboto text-[13px] font-bold leading-[13px] text-category-red capitalize mb-4">
            {tags}
          </span>
        )}
        <h2 className="font-roboto text-2xl font-bold leading-[30px] text-primary mb-4 line-clamp-2">
          {title}
        </h2>
        <div className="flex flex-wrap items-center gap-1.5 font-roboto text-xs leading-3 text-text-meta mb-4">
          <span className="font-medium text-primary">{autor}</span>
          <span className="text-text-meta">-</span>
          <span>{date}</span>
          <span className="text-text-meta">-</span>
          <span>{views}</span>
        </div>
        <p className="font-roboto text-sm leading-5 font-normal text-text-gray line-clamp-3">
          {text}
        </p>
      </div>
    </article>
  );
}

export default PostCard;
