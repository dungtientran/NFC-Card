"use client";

import Image from 'next/image';
import React from 'react';

const Whatsapp = () => {

  const WhatsAppLink = () => {
    // window.location.href = `https://wa.me/0123456789?text=I'm%20interested%20in%20your%20car%20for%20sale`;
    window.location.href = `https://wa.me/1XXXXXXXXXX`;
  }

  return (
    <div
      className='flex flex-col items-center gap-[10px]'
      onClick={WhatsAppLink}
    >
      <Image
        alt='icon'
        src='/icons/whatsapp.svg'
        width="60"
        height="60"
        className='rounded-full w-[50px] h-[50px] mobile:w-[60px] mobile:h-[60px]'
      />
      <p className='font-[400] text-[12px] mobile:text-[14px] leading-[19px]'>
        Whatsapp
      </p>
    </div>
  )
}

export default Whatsapp
