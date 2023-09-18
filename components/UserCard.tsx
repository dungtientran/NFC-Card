"use client";

import Image from 'next/image';
import React from 'react';

interface UserCardProps {
    name: string,
    avatar: string,
    position: string,
    phone: string,
    email: string
}

const UserCard = ({ avatar, email, name, phone, position }: UserCardProps) => {
    return (
        <div className='flex flex-col items-center gap-[16px] mobile:gap-[20px]'>
            <div>
                <Image
                    alt={name}
                    src={avatar}
                    width="250"
                    height="250"
                    className="rounded-full w-[200px] h-[200px] 
                    mobile:w-[250px] mobile:h-[250px]
                    "
                />
            </div>
            <div className='flex flex-col items-center gap-[8px] mobile:gap-[20px] text-white'>
                <h2 className=' font-bold text-[22px] mobile:text-[24px] leading-[32px] tracking-[5%] text-center'>
                    {name}
                </h2>
                <p className='font-[400] text-[15px] mobile:text-[16px] leading-[21px] tracking-[2%] text-center'>
                    {position}
                </p>
                <p className='font-[400] text-[15px] mobile:text-[16px] leading-[21px] tracking-[2%]'>
                    Phone: {phone}
                </p>
                <p className='font-[400] text-[14px] mobile:text-[14px] leading-[19px] tracking-[2%]'>
                    Email: {email}
                </p>
            </div>
        </div>
    )
}

export default UserCard
