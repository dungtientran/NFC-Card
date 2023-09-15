"use client";

import React from 'react';
import LogoCard from './LogoCard';
import UserCard from './UserCard';
import GroupBtn from './GroupBtn';


const Card = () => {

    return (
        <div
            className="w-full h-full bg-[url('/images/background_card.jpg')] bg-center bg-no-repeat bg-cover py-[46px]"
        >
            <div
                className="flex flex-col items-center justify-between h-full "
            >
                <LogoCard />
                <UserCard />
                <GroupBtn />
            </div>
        </div>
    )
}

export default Card
