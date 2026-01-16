import React, { useState } from 'react';
import { menuItems } from './const';
import Logo from '../../assets/Logo.svg';
import Close from '../../assets/icons/Close.svg?react';
import Arrow from '../../assets/icons/Arrow.svg?react';

function MobileMenu({ isOpen, onClose }) {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleSubmenu = (label) => {
    setExpandedItems((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black/50 z-200 transition-opacity duration-300 ease lg:hidden ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
      onClick={handleOverlayClick}
    >
      <div
        className={`fixed top-0 left-0 w-[280px] max-w-[80%] h-screen bg-background z-201 transition-transform duration-300 ease-in-out overflow-y-auto lg:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-6 border-b border-border">
          <img src={Logo} alt="Logotype" className="h-5 w-auto" />
          <button
            className="flex items-center justify-center bg-transparent border-none cursor-pointer p-2 text-text-secondary transition-colors duration-200 ease hover:text-primary"
            onClick={onClose}
            aria-label="Close menu"
          >
            <Close width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"/>
          </button>
        </div>

        <nav className="py-4">
          <ul className="list-none">
            {menuItems.map((item) => (
              <li key={item.label} className="border-b border-border">
                {item.hasSubmenu ? (
                  <>
                    <button
                      className="flex items-center justify-between w-full px-4 py-4 font-roboto text-base font-medium leading-4 text-primary no-underline bg-transparent border-none cursor-pointer text-left"
                      onClick={() => toggleSubmenu(item.label)}
                    >
                      {item.label}
                      <Arrow
                        className={`transition-transform duration-200 ease ${
                          expandedItems[item.label] ? 'rotate-180' : ''
                        }`}
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      />
                    </button>
                    <ul
                      className={`list-none overflow-hidden transition-[max-height] duration-300 ease bg-bg-light ${
                        expandedItems[item.label] ? 'max-h-[500px]' : 'max-h-0'
                      }`}
                    >
                      {item.submenu.map((subItem) => (
                        <li key={subItem.label}>
                          <a
                            href={subItem.href}
                            className="block px-4 py-3 pl-8 font-roboto text-[13px] leading-[13px] hover:text-text-secondary no-underline transition-colors duration-200 ease text-primary"
                          >
                            {subItem.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="flex items-center justify-between w-full px-4 py-4 font-roboto text-base font-medium leading-4 text-primary no-underline bg-transparent border-none cursor-pointer text-left"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default MobileMenu;
