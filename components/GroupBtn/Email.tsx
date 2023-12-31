"use client";

import Image from 'next/image';
import React from 'react';

interface EmailProps {
  email: string
}

const Email = ({ email }: EmailProps) => {
  const EmailLink = () => {
    const emailAddress = `${email}`;
    const subject = 'Hello';
    const body = 'Hello';

    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
        className='rounded-full w-[50px] h-[50px] mobile:w-[60px] mobile:h-[60px]'
      />
      <p className='font-[400] text-[12px] mobile:text-[14px] leading-[19px]'>
        Email
      </p>
    </div>
  )
}

export default Email
