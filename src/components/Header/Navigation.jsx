import React, { useState, useEffect, useRef } from 'react';
import { menuItems } from './const';
import Arrow from '../../assets/icons/Arrow.svg?react';

function Navigation() {
  const [isHidden, setIsHidden] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef(null);
  const lastScrollY = useRef(0);
  const scrollAfterSticky = useRef(0);
  const navOriginalTop = useRef(0);

  useEffect(() => {
    if (navRef.current) {
      navOriginalTop.current = navRef.current.offsetTop;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const navTop = navOriginalTop.current;

      if (currentScrollY >= navTop) {
        if (!isSticky) {
          setIsSticky(true);
          scrollAfterSticky.current = 0;
        }

        if (currentScrollY > lastScrollY.current) {
          scrollAfterSticky.current += currentScrollY - lastScrollY.current;

          if (scrollAfterSticky.current > 200) {
            setIsHidden(true);
          }
        } else {
          scrollAfterSticky.current = 0;
          setIsHidden(false);
        }
      } else {
        setIsSticky(false);
        setIsHidden(false);
        scrollAfterSticky.current = 0;
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isSticky]);

  return (
    <nav
      ref={navRef}
      className={`border-t border-b border-border bg-background sticky top-0 z-100 transition-transform duration-300 ease-in-out ${
        isHidden ? '-translate-y-full' : ''
      }`}
    >
      <ul className="hidden lg:flex list-none justify-center gap-8 py-4 max-w-container mx-auto">
        {menuItems.map((item) => (
          <li key={item.label} className="relative group">
            {item.hasSubmenu ? (
              <>
                <button className="flex items-center gap-1 font-roboto text-base font-medium leading-4 text-primary no-underline bg-transparent border-none cursor-pointer py-2">
                  {item.label}
                  <Arrow className="transition-transform duration-200 ease group-hover:rotate-180" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" />
                </button>
                <ul className="absolute top-full left-0 min-w-[180px] bg-background border border-border shadow-[0_4px_12px_rgba(0,0,0,0.1)] list-none py-2 opacity-0 invisible translate-y-2.5 transition-all duration-200 ease z-101 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                  {item.submenu.map((subItem) => (
                    <li key={subItem.label}>
                      <a href={subItem.href} className="flex items-center justify-between px-4 py-2.5 font-roboto text-[13px] leading-[13px] font-normal text-primary no-underline transition-colors duration-200 ease hover:text-text-gray after:content-['>'] after:text-text-secondary after:text-xs">
                        {subItem.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <a href={item.href} className="flex items-center gap-1 font-roboto text-base font-medium leading-4 text-primary no-underline bg-transparent border-none cursor-pointer py-2">
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
