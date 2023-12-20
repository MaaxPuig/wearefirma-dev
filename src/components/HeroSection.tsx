'use client';

import Image from 'next/image';
import * as React from 'react';

import hero2 from '/public/assets/hero2.png';
import hero3 from '/public/assets/hero3.jpeg';
import HeroImage1 from '/public/assets/HeroImage1.jpeg';

export default function Hero() {
  return (
    <>
      <h1 className='font-roslindale mx-14 my-7 text-center text-5xl font-light text-stone-950  md:text-8xl 2xl:text-9xl'>
        Descobreix el Museu
      </h1>

      <ul className='flex h-full w-full items-center justify-center gap-6 overflow-hidden lg:gap-14'>
        <li className='shrink-0'>
          <Image
            className='h-[200px] w-[200px] md:h-[410px] md:w-[410px] '
            src={HeroImage1}
            alt='img description'
          />
        </li>
        <li className='shrink-0'>
          <Image
            className='h-[200px] w-[200px] shrink-0 md:h-[410px] md:w-[410px] '
            src={hero2}
            alt='img description'
          />
        </li>
        <li className='shrink-0'>
          <Image
            className='h-[200px] w-[200px] shrink-0 md:h-[410px] md:w-[410px] '
            src={hero3}
            alt='img description'
          />
        </li>
      </ul>
      <div className='flex w-full flex-col items-center justify-center pb-2 pt-9'>
        <p>Estem oberts!</p>
        <p>Dimarts a diumenge 10.00 h a 15.00 h</p>
        <p className='cursor-pointer border-b border-stone-950 pt-2 text-center text-base  font-normal  text-stone-950 opacity-40 transition-opacity duration-300   hover:opacity-100'>
          Mesures Covid-19
        </p>
      </div>
    </>
  );
}
