"use client";

import Image from 'next/image'
import React from 'react'

const Facebook = () => {

  const FacebookMessengerButton = () => {
    window.location.href = 'https://www.messenger.com/t/dungtran'; // Replace 'USERNAME' with the recipient's Facebook username or ID
}

  return (
    <div
      className='flex flex-col items-center gap-[10px]'
    onClick={FacebookMessengerButton}
    >
      <Image
        alt='icon'
        src='/icons/facebook.svg'
        width="60"
        height="60"
        className='rounded-full'
      />
      <p className='font-[400] text-[14px] leading-[19px]'>
        Facebook
      </p>
    </div>
  )
}

export default Facebook