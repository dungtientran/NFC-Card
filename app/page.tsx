"use client";

import Image from 'next/image';
import Card from '@/components/Card';
import { useEffect, useState } from 'react';

export default function Home() {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', updateScreenWidth);
    updateScreenWidth();

    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []);

  return (
    <div className='w-full h-screen'>
      {screenWidth <= 900 ? (
        <Card />
      ): (
        <h2 className='text-4xl font-bold h-screen flex items-center justify-center'>
          Dùng cho màn hình mobile
        </h2>
      )}
    </div>
  )
}
