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
        src='/icons/website.jpg'
        width="60"
        height="60"
        className='rounded-full w-[50px] h-[50px] mobile:w-[60px] mobile:h-[60px]'
      />
      <p className='font-[400] text-[12px] mobile:text-[14px] leading-[19px] '>
        Website
      </p>
    </div>
  )
}

export default Website
