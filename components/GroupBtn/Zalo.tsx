"use client";

import Image from 'next/image';
import React from 'react';

const Zalo = () => {

  const zaloHandle = () => {
    window.location.href = 'https://zalo.me/84902220575';
  }
  
  return (
    <div
      className='flex flex-col items-center gap-[10px]'
      onClick={zaloHandle}
    >
      <Image
        alt='icon'
        src='/icons/zalo.svg'
        width="60"
        height="60"
        className='rounded-full'
      />
      <p className='font-[400] text-[14px] leading-[19px]'>
        Zalo
      </p>
    </div>
  )
}

export default Zalo
