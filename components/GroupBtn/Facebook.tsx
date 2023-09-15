"use client";

import Image from 'next/image'
import React from 'react'

const Facebook = () => {

  const FacebookMessengerButton = () => {
    window.location.href = 'https://fb.me/100079623247423';
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
