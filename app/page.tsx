"use client";

import Image from 'next/image';
import Card from '@/components/Card';
import { useEffect, useState } from 'react';
import { user } from "@/utils/user";

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

interface DataProps {
  data: UserProps
}

export default function Home({ data }: DataProps) {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', updateScreenWidth);
    updateScreenWidth();

    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []);

  return (
    <div className='w-full h-screen'>
      {screenWidth <= 900 ? (
        <Card
          email={user.email}
          facebook={user.facebook}
          linkedin={user.linkedin}
          messages_fb={user.linkedin}
          name={user.name}
          phone={user.name}
          website={user.website}
          whatsapp={user.whatsapp}
          zalo={user.zalo}
          position={user.position}
          avatar={user.avatar}
        />
      ) : (
        <h2 className='text-4xl font-bold h-screen flex items-center justify-center'>
          Dùng cho màn hình mobile
        </h2>
      )}
    </div>
  )
}
