"use client";

import Image from 'next/image';
import React from 'react';

interface PhoneProps {
  phone: string
}

const Phone = ({ phone }: PhoneProps) => {
  const handleCallClick = () => {
    window.location.href = `tel:${phone}`; // Replace with the desired phone number
  };
  return (
    <div
      className='flex flex-col items-center gap-[10px]'
      onClick={handleCallClick}
    >
      <Image
        alt='phone'
        src='/icons/phone.jpg'
        width="60"
        height="60"
        className='rounded-full w-[50px] h-[50px] mobile:w-[60px] mobile:h-[60px]'
      />
      <p className='font-[400] text-[12px] mobile:text-[14px] leading-[19px]'>
        Phone
      </p>
    </div>
  )
}

export default Phone
