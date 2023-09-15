"use client";

import Image from 'next/image'
import React from 'react'

const Linkedin = () => {

  
  const LinkedInLink = () => {
    const linkedInUsername = 'example'; // Replace with the LinkedIn username or company name

    // Construct the LinkedIn profile/company page URL
    const linkedInURL = `https://www.linkedin.com/in/${linkedInUsername}`; // For profiles
    // OR
    // const linkedInURL = `https://www.linkedin.com/company/${linkedInUsername}`; // For companies

}

  return (
    <div
      className='flex flex-col items-center gap-[10px]'
    // onClick={FacebookMessengerButton}
    >
      <Image
        alt='icon'
        src='/icons/Linkedin.jpg'
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
