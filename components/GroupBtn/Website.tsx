"use client";

import Image from 'next/image';
import React from 'react';

const Website = () => {

  const handleCallClick = () => {
    window.location.href = "https://www.google.com.vn/";
  };

  return (
    <div
      className='flex flex-col items-center gap-[10px]'
    onClick={handleCallClick}
    >
      <Image
        alt='icon'
        src='/icons/website.svg'
        width="60"
        height="60"
        className='rounded-full'
      />
      <p className='font-[400] text-[14px] leading-[19px]'>
        Website
      </p>
    </div>
  )
}

export default Website