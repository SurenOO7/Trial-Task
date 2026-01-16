import React, { useRef, useEffect } from 'react';
import SearchIcon from '../../assets/icons/W.svg?react';
import Close from '../../assets/icons/Close.svg?react';
function SearchBar({ value, onChange, isVisible, onClose }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isVisible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isVisible]);

  return (
    <div className="flex items-center gap-3 px-4 py-3 bg-bg-gray rounded-lg border border-border shadow-sm">
      <SearchIcon className="shrink-0 text-text-secondary" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" />
      <input
        ref={inputRef}
        type="text"
        className="flex-1 border-none bg-transparent font-roboto text-base text-primary outline-none placeholder:text-text-secondary"
        placeholder="Search posts by title or description..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button
        className="flex items-center justify-center bg-transparent border-none cursor-pointer p-1 text-text-secondary transition-colors duration-200 ease hover:text-primary"
        onClick={onClose}
        aria-label="Close search"
      >
        <Close width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"/>
      </button>
    </div>
  );
}

export default SearchBar;
