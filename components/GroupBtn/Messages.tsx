"use client";

import Image from 'next/image'
import React from 'react'

interface MessagesProps {
  messages: string
}

const Messages = ({messages}: MessagesProps) => {
  console.log("mess", messages);
  const linkMessages = () => {
    window.location.href = `https://www.messenger.com/t/${messages}`;
  }

  return (
    <div
      className='flex flex-col items-center gap-[10px]'
      onClick={linkMessages}
    >
      <Image
        alt='messages'
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
