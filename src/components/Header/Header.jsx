import React from 'react';
import Logo from '../../assets/Logo.svg';
import SearchBar from '../Search/SearchBar';
import SearchIcon from '../../assets/icons/W.svg?react';
import Menu from '../../assets/icons/Menu.svg?react';

function Header({ onMenuClick, onSearchClick, isSearchVisible, searchValue, onSearchChange, onSearchClose }) {
  return (
    <header className="relative">
      <div className="flex items-center justify-between px-4 py-6 max-w-container mx-auto">
        <button
          className="flex items-center justify-center bg-transparent border-none cursor-pointer p-2 text-primary z-1 lg:invisible"
          onClick={onMenuClick}
          aria-label="Open menu"
        >
          <Menu width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" />
        </button>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <img src={Logo} alt="Logotype" className="h-6 w-auto" />
        </div>

        <div className="relative flex items-center min-w-[40px] justify-end">
          <button
            className={`flex items-center justify-center bg-transparent border-none cursor-pointer p-2 text-primary z-1 transition-all duration-300 ease-in-out ${
              isSearchVisible ? 'lg:opacity-0 lg:scale-0 lg:w-0 lg:pointer-events-none' : 'lg:opacity-100 lg:scale-100'
            }`}
            onClick={onSearchClick}
            aria-label="Toggle search"
          >
            <SearchIcon width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" />
          </button>
          <div className={`hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 overflow-hidden transition-all duration-300 ease-in-out ${
            isSearchVisible 
              ? 'opacity-100 w-[400px] pointer-events-auto' 
              : 'opacity-0 w-[300px] pointer-events-none'
          }`}>
            <SearchBar
              value={searchValue}
              onChange={onSearchChange}
              isVisible={isSearchVisible}
              onClose={onSearchClose}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
