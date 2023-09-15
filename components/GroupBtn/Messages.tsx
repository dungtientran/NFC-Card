"use client";

import Image from 'next/image'
import React from 'react'

const Messages = () => {

  const linkMessages = () => {
    window.location.href = 'https://www.messenger.com/t/100079623247423'; // Replace 'USERNAME' with the recipient's Facebook username or ID
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
        className='rounded-full w-[50px] h-[50px] mobile:w-[60px] mobile:h-[60px]'
      />
      <p className='font-[400] text-[12px] mobile:text-[14px] leading-[19px]'>
        Messages
      </p>
    </div>
  )
}

export default Messages
