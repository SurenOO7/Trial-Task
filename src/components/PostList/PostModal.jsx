import React, { useEffect } from 'react';
import Close from '../../assets/icons/Close.svg?react';

function PostModal({ post, isOpen, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !post) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const { title, text, img, img_2x, tags, autor, date, views } = post;

  return (
    <div
      className="fixed inset-0 bg-black/70 z-300 flex items-center justify-center p-4 animate-[fadeIn_0.3s_ease]"
      onClick={handleOverlayClick}
    >
      <div className="relative w-full max-w-[700px] max-h-[90vh] bg-background rounded-lg overflow-hidden animate-[slideUp_0.3s_ease]">
        <button
          className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 bg-white/90 border-none rounded-full cursor-pointer text-primary z-1 transition-colors duration-200 ease hover:bg-background"
          onClick={onClose}
          aria-label="Close"
        >
          <Close width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" />
        </button>

        <div className="max-h-[calc(90vh-60px)] overflow-y-auto">
          <div className="relative w-full pb-[56.25%]">
            <img
              src={img}
              srcSet={`${img} 1x, ${img_2x} 2x`}
              alt={title}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>

          <div className="p-6">
            {tags && (
              <span className="inline-block font-roboto text-[13px] font-bold leading-[13px] text-category-red capitalize mb-4">
                {tags}
              </span>
            )}
            <h2 className="font-roboto text-2xl font-bold leading-[30px] text-primary mb-4">
              {title}
            </h2>
            <div className="flex flex-wrap items-center gap-1.5 font-roboto text-xs leading-3 text-text-meta mb-4">
              <span className="font-medium text-primary">{autor}</span>
              <span className="text-text-meta">-</span>
              <span>{date}</span>
              <span className="text-text-meta">-</span>
              <span>{views}</span>
            </div>
            <p className="font-roboto text-sm leading-5 font-normal text-text-gray">
              {text}
            </p>
          </div>
        </div>

        <button
          className="block w-[calc(100%-3rem)] mx-6 mb-6 px-6 py-3.5 font-roboto text-sm font-medium text-background bg-primary border-none rounded cursor-pointer transition-colors duration-200 ease hover:bg-hover-dark"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default PostModal;
