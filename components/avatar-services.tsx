'use client'

import Image from "next/image";
import MotionTransition from "./transition-component";

const AvatarServices = () => {
   
    return (
        <MotionTransition position="bottom" className="bottom-0 right-0 hidden md:inline-block fixed">
            <Image
                id="avatar-image"
                src="/img/avatarPerfil.png" 
                width={330}
                height={330}
                className="w-full h-full md:w-60 md:h-60 lg:w-auto lg:h-auto"
                alt="Avatar"
            />
        </MotionTransition>
    );
};

export default AvatarServices;