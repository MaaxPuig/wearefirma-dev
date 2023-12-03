'use client';

import Image from 'next/image';
import * as React from 'react';

import HeroImage1 from '/Users/maxpuig/work/wearefirma-dev/src/lib/assets/HeroImage1.jpeg';

export default function Hero() {
  return (
    <>
      <h1 className='mx-14 my-7 text-center text-5xl font-light text-stone-950  md:text-8xl xl:text-9xl'>
        Descobreix el Museu
      </h1>
      <div className='h-full w-full'>
        <ul className='flex items-center justify-center  gap-14 overflow-hidden'>
          <li className='shrink-0'>
            <Image
              className='h-[200px] w-[200px] object-fill   md:h-[450px] md:w-[450px] '
              src={HeroImage1}
              alt='img description'
            />
          </li>
          <li className='shrink-0'>
            <Image
              className='h-[200px] w-[200px] object-fill  md:h-[450px] md:w-[450px] '
              src={HeroImage1}
              alt='img description'
            />
          </li>
          <li className='shrink-0'>
            <Image
              className='h-[200px] w-[200px] object-fill  md:h-[450px] md:w-[450px] '
              src={HeroImage1}
              alt='img description'
            />
          </li>
        </ul>
        <div className='flex w-full flex-col items-center justify-center pb-2 pt-9'>
          <p>Estem oberts!</p>
          <p>Dimarts a diumenge 10.00 h a 15.00 h</p>
          <p className='border-b border-stone-950  pt-2 text-center text-base font-normal text-stone-950  opacity-40'>
            Mesures Covid-19
          </p>
        </div>
      </div>
    </>
  );
}
