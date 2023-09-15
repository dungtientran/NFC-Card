"use client";

import Image from 'next/image';
import React from 'react';

const UserCard = () => {
    return (
        <div className='flex flex-col items-center gap-[8px] mobile:gap-[20px]'>
            <div>
                <Image
                    alt='user'
                    src="/images/avata.jpg"
                    width="250"
                    height="250"
                    className="rounded-full w-[150px] h-[150px] mobile:w-[250px] mobile:h-[250px]"
                />
            </div>
            <div className='flex flex-col items-center gap-[8px] mobile:gap-[20px] text-white'>
                <h2 className=' font-bold mobitext-[22px] mobile:text-[24px] leading-[32px] tracking-[5%] text-center'>
                    Mrs. Thanh Uyên
                </h2>
                <p className='font-[400] text-[15px] mobile:text-[16px] leading-[21px] tracking-[2%] text-center'>
                    Sales Manager
                </p>
                <p className='font-[400] mobile:text-[15px] mobile:text-[14px leading-[19px] tracking-[2%]'>
                    Phone: 0933.945.236
                </p>
                <p className='font-[400] text-[14px] mobile:text-[14px] leading-[19px] tracking-[2%]'>
                    Email: miurey.nguyen@metasolutions.software
                </p>
            </div>
        </div>
    )
}

export default UserCard
