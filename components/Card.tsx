"use client";

import React from 'react';
import Image from 'next/image';
import Phone from './GroupBtn/Phone';
import Messages from './GroupBtn/Messages';
import Zalo from './GroupBtn/Zalo';
import Email from './GroupBtn/Email';
import Whatsapp from './GroupBtn/Whatsapp';
import Website from './GroupBtn/Website';
import Facebook from './GroupBtn/Facebook';
import Linkedin from './GroupBtn/Linkedin';

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
        window.location.href = "tel:+1234567890"; // Replace with the desired phone number
    };
    const FacebookMessengerButton = () => {
        window.location.href = 'https://www.messenger.com/t/dungtran'; // Replace 'USERNAME' with the recipient's Facebook username or ID
    }

    const EmailLink = () => {
        const emailAddress = 'example@example.com'; // Replace with the recipient's email address
        const subject = 'Hello'; // Optional: Replace with your desired email subject
        const body = 'Hi there, I wanted to get in touch...'; // Optional: Replace with your desired email body

        // Construct the mailto link with subject and body (if provided)
        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
    const WhatsAppLink = () => {
        const phoneNumber = '+1234567890'; // Replace with the recipient's phone number, including the country code

        // Construct the WhatsApp link
        const whatsappLink = `https://wa.me/${phoneNumber}`;
    }
    const website = () => {
        const phoneNumber = '+1234567890'; // Replace with the recipient's phone number, including the country code

        // Construct the WhatsApp link
        const whatsappLink = `https://wa.me/${phoneNumber}`;
    }

    const LinkedInLink = () => {
        const linkedInUsername = 'example'; // Replace with the LinkedIn username or company name

        // Construct the LinkedIn profile/company page URL
        const linkedInURL = `https://www.linkedin.com/in/${linkedInUsername}`; // For profiles
        // OR
        // const linkedInURL = `https://www.linkedin.com/company/${linkedInUsername}`; // For companies

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
                        {/* {listIcon?.map((item, index) => (
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
                        ))} */}
                        <Phone />
                        <Messages />
                        <Zalo />
                        <Email />
                        <Whatsapp />
                        <Website />
                        <Facebook />
                        <Linkedin />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
