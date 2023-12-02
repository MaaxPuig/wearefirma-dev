'use client';

import * as React from 'react';
import { useEffect, useState } from 'react';

import NavBtn from '@/components/navigation/NavButton';

export default function NavBar() {
  const [isSmScreen, setIsSmScreen] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsSmScreen(window.innerWidth <= 900);
    };

    window.addEventListener('resize', checkScreenWidth);

    checkScreenWidth();

    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);
  const topNavLinks =
    'text-sm font-normal tracking-tight hover:opacity-100 cursor-pointer transition-opacity duration-300 ease-in-out text-stone-950 opacity-50';
  const bottomNavLinks =
    'text-md font-normal hover:underline cursor-pointer  text-stone-950';
  return (
    <nav className='flex justify-between'>
      <svg
        className=''
        width={isSmScreen ? '65' : '86'}
        height={isSmScreen ? '65' : '86'}
        viewBox='0 0 86 86'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g id='Group 467'>
          <rect
            id='Rectangle 74'
            x='0.75'
            y='0.75'
            width='84.5'
            height='84.5'
            stroke='#111010'
            strokeWidth='1.5'
          />
          <path
            id='Vector'
            d='M4 4H9.46721L14.4405 18.549H14.5234L19.4948 4H25.0035V32.77H19.1253V18.304H19.0424L15.5886 27.9216H13.4093L9.9159 18.304H9.83295V32.7719H4V4Z'
            fill='black'
          />
          <path
            id='Vector_2'
            d='M61.0019 53H66.3932L71.2975 67.549H71.3793L76.2835 53H81.7158V81.77H75.9192V67.304H75.8374L72.4315 76.9216H70.2824L66.8375 67.304H66.7557V81.7719H61V53H61.0019Z'
            fill='black'
          />
          <path
            id='Vector_3'
            d='M49.1702 29H47.1458H37.8578H35.26H32V57.4842H37.8578V47.5776H47.1458V57.4842H53.0035V29H49.1702ZM37.8578 42.1839V34.3937H47.1458V42.1839H37.8578Z'
            fill='black'
          />
        </g>
      </svg>
      {!isSmScreen && (
        <div className='flex flex-col items-end justify-between'>
          <ul className='flex flex-row items-start justify-end gap-9'>
            <li className={topNavLinks}>El Museu</li>
            <li className={topNavLinks}>Educació</li>
            <li className={topNavLinks}>Investigació</li>
            <li className={topNavLinks}>Contacte</li>
          </ul>
          <ul className='flex flex-row items-center justify-end gap-9'>
            <li className={bottomNavLinks}>Planifica la visita</li>
            <li className={bottomNavLinks}>Col·lecció</li>
            <li className={bottomNavLinks}>Exposicions i Esdeveniments</li>
            <li>
              <NavBtn />
            </li>
          </ul>
        </div>
      )}
      {isSmScreen && (
        <div className='flex items-center justify-between gap-2'>
          <NavBtn />
          <svg
            width='26'
            height='26'
            viewBox='0 0 26 26'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g id='Hamburger Menu'>
              <path
                id='Shape'
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M2.59998 5.56665C2.32383 5.56665 2.09998 5.79051 2.09998 6.06665C2.09998 6.34279 2.32383 6.56665 2.59998 6.56665H23.4C23.6761 6.56665 23.9 6.34279 23.9 6.06665C23.9 5.79051 23.6761 5.56665 23.4 5.56665H2.59998ZM2.09998 13C2.09998 12.7238 2.32383 12.5 2.59998 12.5H23.4C23.6761 12.5 23.9 12.7238 23.9 13C23.9 13.2761 23.6761 13.5 23.4 13.5H2.59998C2.32383 13.5 2.09998 13.2761 2.09998 13ZM2.09998 19.9333C2.09998 19.6572 2.32383 19.4333 2.59998 19.4333H23.4C23.6761 19.4333 23.9 19.6572 23.9 19.9333C23.9 20.2095 23.6761 20.4333 23.4 20.4333H2.59998C2.32383 20.4333 2.09998 20.2095 2.09998 19.9333Z'
                fill='black'
              />
            </g>
          </svg>
        </div>
      )}
    </nav>
  );
}
