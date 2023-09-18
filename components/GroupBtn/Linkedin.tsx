"use client";

import Image from 'next/image';
import React from 'react';

interface LinkedinProps {
  linkedin: string
}

const Linkedin = ({linkedin}: LinkedinProps) => {


  const LinkedInLink = () => {
    const linkedInUsername = {linkedin};

    window.location.href = `https://www.linkedin.com/in/${linkedInUsername}`;

  }

  return (
    <div
      className='flex flex-col items-center gap-[10px]'
      onClick={LinkedInLink}
    >
      <Image
        alt='icon'
        src='/icons/linkedin.jpg'
        width="60"
        height="60"
        className='rounded-full w-[50px] h-[50px] mobile:w-[60px] mobile:h-[60px]'
      />
      <p className='font-[400] text-[12px] mobile:text-[14px] leading-[19px] '>
        Linkedin
      </p>
    </div>
  )
}

export default Linkedin
