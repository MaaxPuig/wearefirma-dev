'use client';

import Head from 'next/head';
import * as React from 'react';

import Footer from '@/components/Footer';
import Hero from '@/components/HeroSection';
import HomeContent from '@/components/HomeContent';
import NavBar from '@/components/navigation/Navigation';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const [isSmScreen, setIsSmScreen] = React.useState(false);

  React.useEffect(() => {
    const checkScreenWidth = () => {
      setIsSmScreen(window.innerWidth <= 900);
    };

    window.addEventListener('resize', checkScreenWidth);

    checkScreenWidth();

    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);
  return (
    <main className='animated-fade-in'>
      <Head>
        <title>WeareFirma Dev Test</title>
      </Head>
      <section className='flex w-screen flex-col bg-stone-200 px-5 pb-12 pt-3 sm:px-14 sm:pb-32'>
        <div className='w-full'>
          <NavBar isSmScreen={isSmScreen} />
        </div>
        <div className='w-full'>
          <Hero />
        </div>
      </section>
      <section className=' w-screen bg-stone-200 '>
        <HomeContent isSmScreen={isSmScreen} />
      </section>
      <section className=' w-screen bg-stone-200 '>
        <Footer />
      </section>
    </main>
  );
}
