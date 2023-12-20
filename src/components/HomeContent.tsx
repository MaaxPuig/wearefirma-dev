'use client';

import * as React from 'react';

import homecontent2 from '../../public/assets/homecontent2.jpeg';

import homecontent from '/../../public/assets/homecontent.png';

export default function HomeContent({ isSmScreen }: { isSmScreen: boolean }) {
  return (
    <div className='flex h-full w-full flex-col md:flex-row '>
      <section className='flex w-full flex-col md:w-1/3 '>
        <div className='flex h-full w-full flex-col items-start justify-between gap-24 bg-stone-950 px-5  py-10 lg:px-10 xl:h-[430px]'>
          <p className='w-full text-[28px] font-normal leading-[30px] text-stone-50 lg:leading-10  xl:text-[36px]'>
            – Em va prendre uns anys aprendre a pintar com els pintors de el
            Renaixement; pintar com un nen em va portar tota una vida –
          </p>
          <p className='animate-fadein flex items-center justify-start gap-4 text-start text-base font-normal  text-amber-300'>
            {isSmScreen ? 'Sobre Pablo Picasso' : 'Descobreix'}
            <svg
              width='21'
              height='16'
              viewBox='0 0 21 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g id='Group 58'>
                <line
                  id='Line 42'
                  y1='7.66174'
                  x2='19.7647'
                  y2='7.66174'
                  stroke='#FAD647'
                  strokeWidth='1.5'
                />
                <path
                  id='Vector 1'
                  d='M13.1776 1L19.7659 8L13.1776 15'
                  stroke='#FAD647'
                  strokeWidth='1.5'
                />
              </g>
            </svg>
          </p>
        </div>
        <div
          style={{ backgroundImage: `url(${homecontent.src})` }}
          className='h-[350px] w-full bg-cover  bg-center duration-500 md:h-full'
        ></div>
      </section>
      <section
        style={{ backgroundImage: `url(${homecontent2.src})` }}
        className='h-[350px] w-full bg-cover bg-center md:h-[800px] md:w-2/3'
      ></section>
    </div>
  );
}
