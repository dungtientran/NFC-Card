"use client";

import Image from 'next/image';
import React from 'react';

const Whatsapp = () => {

  const WhatsAppLink = () => {
    const phoneNumber = '+1234567890'; // Replace with the recipient's phone number, including the country code

    // Construct the WhatsApp link
    const whatsappLink = `https://wa.me/${phoneNumber}`;
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
