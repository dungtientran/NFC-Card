"use client";

import React from 'react';
import Phone from './GroupBtn/Phone';
import Messages from './GroupBtn/Messages';
import Zalo from './GroupBtn/Zalo';
import Email from './GroupBtn/Email';
import Whatsapp from './GroupBtn/Whatsapp';
import Website from './GroupBtn/Website';
import Facebook from './GroupBtn/Facebook';
import Linkedin from './GroupBtn/Linkedin';

interface GroupBtnProps {
    phone: string,
    messages: string,
    zalo: string,
    email: string,
    whatsapp: string,
    website: string,
    facebook: string,
    linkedin: string
}

const GroupBtn = ({
    email,
    facebook,
    linkedin,
    messages,
    phone,
    website,
    whatsapp,
    zalo
}: GroupBtnProps) => {
    return (
        <div className='text-white flex flex-col items-center gap-[20px]'>
            <p className='font-bold text-[16px] leading-[21px] tracking-[2%] text-center'>
                Liên hệ tư vấn
            </p>
            <div className='grid grid-cols-4 gap-[20px] mobile:gap-[30px]'>
                <Phone
                    phone={phone}
                />
                <Messages
                    messages={messages}
                />
                <Zalo
                    zalo={zalo}
                />
                <Email
                    email={email}
                />
                <Whatsapp
                    whatsapp={whatsapp}
                />
                <Website
                    website={website}
                />
                <Facebook
                    facebook={facebook}
                />
                <Linkedin
                    linkedin={linkedin}
                />
            </div>
        </div>
    )
}

export default GroupBtn
