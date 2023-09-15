"use client";

import Image from 'next/image'
import React from 'react'

const Messages = () => {

  const linkMessages = () => {
    window.location.href = 'https://fb.me/100079623247423';
  }

  return (
    <div
    className='flex flex-col items-center gap-[10px]'
  onClick={linkMessages}
  >
    <Image
      alt='icon'
      src='/icons/messages.svg'
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

export default Messages
