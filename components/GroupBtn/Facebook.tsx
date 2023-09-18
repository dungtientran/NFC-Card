"use client";

import Image from 'next/image';
import React from 'react';

interface FacebookProps {
  facebook: string
};

const Facebook = ({facebook}:FacebookProps) => {

  const FacebookMessengerButton = () => {
    // window.location.href = `https://fb.me/profile.php?id=100004430888066`;
    window.location.href = `https://fb.me/${facebook}`;
  }

  return (
    <div
      className='flex flex-col items-center gap-[10px]'
      onClick={FacebookMessengerButton}
    >
      <Image
        alt='icon'
        src='/icons/facebook.svg'
        width="60"
        height="60"
        className='rounded-full w-[50px] h-[50px] mobile:w-[60px] mobile:h-[60px]'
      />
      <p className='font-[400] text-[12px] mobile:text-[14px] leading-[19px]'>
        Facebook
      </p>
    </div>
  )
}

export default Facebook
