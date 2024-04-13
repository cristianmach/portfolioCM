"use client"

import Image from 'next/image'

const CircleImage = () => {
    return (
        <div className="bottom-0 right-0 hidden md:inline-block md:absolute">
            <Image src="/img/avatarPerfil.png" width="300" height="300" className="w-full h-full " alt="Avatar" />
        </div>

    );
}

export default CircleImage;