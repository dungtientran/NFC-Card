"use client";

import Image from 'next/image';
import React from 'react';

const UserCard = () => {
    return (
        <div className='flex flex-col items-center gap-[20px]'>
            <div>
                <Image
                    alt='user'
                    src="/images/avatar.svg"
                    width="250"
                    height="250"
                    className="rounded-full"
                />
            </div>
            <div className='flex flex-col items-center gap-[20px] text-white'>
                <h2 className=' font-bold text-[24px] leading-[32px] tracking-[5%] text-center'>
                    Mrs. Thanh Uyên
                </h2>
                <p className='font-[400] text-[16px] leading-[21px] tracking-[2%] text-center'>
                    Sales Manager
                </p>
                <p className='font-[400] text-[14px leading-[19px] tracking-[2%]'>
                    Phone: 0933.945.236
                </p>
                <p className='font-[400] text-[14px leading-[19px] tracking-[2%]'>
                    Email: miurey.nguyen@metasolutions.software
                </p>
            </div>
        </div>
    )
}

export default UserCard
