"use client";

import React from 'react';
import Image from 'next/image';

const LogoCard = () => {
    return (
        <div>
            <Image
                alt='logo'
                src="/logo/logo.svg"
                width="95"
                height="82"
            />
        </div>
    )
}

export default LogoCard
