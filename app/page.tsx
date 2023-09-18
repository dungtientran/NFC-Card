"use client";

import Card from '@/components/Card';
import { useEffect, useState } from 'react';
import { user } from "@/utils/user";

const Home = () => {
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
          messages_fb={user.messages_fb}
          name={user.name}
          phone={user.phone}
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


export default Home
