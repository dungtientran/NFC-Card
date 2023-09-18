"use client";

import React from 'react';
import LogoCard from './LogoCard';
import UserCard from './UserCard';
import GroupBtn from './GroupBtn';


export interface UserProps {
    name: string,
    position: string,
    phone: string,
    messages_fb: string,
    zalo: string,
    email: string,
    whatsapp: string,
    website: string,
    facebook: string,
    linkedin: string,
    avatar: string
  }

const Card = ({
    email,
    facebook,
    linkedin,
    messages_fb,
    name,
    phone,
    position,
    website,
    whatsapp,
    zalo,
    avatar
}: UserProps) => {

    return (
        <div
            className="w-full h-full bg-[url('/images/background_card.jpg')] 
            bg-center bg-no-repeat bg-cover px-[20px] mobile:py-[46px] py-[36px]"
        >
            <div
                className="flex flex-col items-center justify-between h-full "
            >
                <LogoCard />
                <UserCard 
                    avatar={avatar}
                    email={email}
                    name={name}
                    phone={phone}
                    position={position}
                />
                <GroupBtn 
                    email={email}
                    facebook={facebook}
                    linkedin={linkedin}
                    messages={messages_fb}
                    phone={phone}
                    website={website}
                    whatsapp={whatsapp}
                    zalo={zalo}
                />
            </div>
        </div>
    )
}

export default Card
