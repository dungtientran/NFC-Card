"use client";

import Image from 'next/image';
import React from 'react';

const Phone = () => {
  const handleCallClick = () => {
    window.location.href = "tel:+1234567890"; // Replace with the desired phone number
  };
  return (
    <div
      className='flex flex-col items-center gap-[10px]'
      onClick={handleCallClick}
    >
      <Image
        alt='icon'
        src='/icons/phone.svg'
        width="60"
        height="60"
        className='rounded-full'
      />
      <p className='font-[400] text-[14px] leading-[19px]'>
        Phone
      </p>
    </div>
  )
}

export default Phone
