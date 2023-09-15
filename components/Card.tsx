"use client";

import React from 'react';
import Image from 'next/image';

const listIcon = [
    {
        src: '/icons/phone.svg',
        title: 'Phone'
    },
    {
        src: '/icons/messages.svg',
        title: 'Messages'
    },
    {
        src: '/icons/zalo.svg',
        title: 'Zalo'
    },
    {
        src: '/icons/email.svg',
        title: 'Email'
    },
    {
        src: '/icons/whatsapp.svg',
        title: 'Whatsapp'
    },
    {
        src: '/icons/website.svg',
        title: 'Website'
    },
    {
        src: '/icons/facebook.svg',
        title: 'Facebook'
    },
    {
        src: '/icons/linkedin.svg',
        title: 'Linkedin'
    },

]

const Card = () => {

    const handleCallClick = () => {
        // Use the `window.location` property to initiate a phone call
        window.location.href = "tel:+1234567890"; // Replace with the desired phone number
    };
    const FacebookMessengerButton = () => {
        window.location.href = 'https://www.messenger.com/t/dungtran'; // Replace 'USERNAME' with the recipient's Facebook username or ID
    }
    return (
        <div
            className="w-full h-full bg-[url('/images/background_card.jpg')] bg-center bg-no-repeat bg-cover py-[46px]"
        >
            <div
                className="flex flex-col items-center justify-between h-full "
            >
                <div>
                    <Image
                        alt='logo'
                        src="/logo/logo.svg"
                        width="95"
                        height="82"
                    />
                </div>

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

                <div className='text-white flex flex-col items-center gap-[20px]'>
                    <p className='font-bold text-[16px] leading-[21px] tracking-[2%] text-center'>
                        Liên hệ tư vấn
                    </p>
                    <div className='grid grid-cols-4 gap-y-[30px] gap-x-[30px]'>
                        {listIcon?.map((item, index) => (
                            <div
                                key={index}
                                className='flex flex-col items-center gap-[10px]'
                                onClick={FacebookMessengerButton}
                            >
                                <Image
                                    alt='icon'
                                    src={item?.src}
                                    width="60"
                                    height="60"
                                    className='rounded-full'
                                />
                                <p>
                                    {item?.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
