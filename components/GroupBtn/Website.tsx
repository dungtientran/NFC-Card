"use client";

import Image from 'next/image';
import React from 'react';

interface WebsiteProps {
  website: string
}

const Website = ({website}: WebsiteProps) => {

  const handleCallClick = () => {
    window.location.href = `${website}`;
  };

  return (
    <div
      className='flex flex-col items-center gap-[10px]'
    onClick={handleCallClick}
    >
      <Image
        alt='website'
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
