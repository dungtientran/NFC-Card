"use client";

import Image from 'next/image';
import React from 'react';

interface WhatsappProps {
  whatsapp: string
}

const Whatsapp = ({ whatsapp }: WhatsappProps) => {

  const WhatsAppLink = () => {
    window.location.href = `https://wa.me/${whatsapp}`;
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
