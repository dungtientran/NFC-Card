"use client";

import Image from 'next/image';
import React from 'react';

const Email = () => {
  const EmailLink = () => {
    const emailAddress = 'example@example.com'; 
    const subject = 'Hello'; 
    const body = 'Hi there, I wanted to get in touch...'; 

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
  return (
    <div
      className='flex flex-col items-center gap-[10px]'
    onClick={EmailLink}
    >
      <Image
        alt='icon'
        src='/icons/email.svg'
        width="60"
        height="60"
        className='rounded-full'
      />
      <p className='font-[400] text-[14px] leading-[19px]'>
        Email
      </p>
    </div>
  )
}

export default Email
