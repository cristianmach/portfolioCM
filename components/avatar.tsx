'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import MotionTransition from "./transition-component";

const Avatar = () => {
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleMouseEnter = () => {
            setIsHovered(true);
        };

        const handleMouseLeave = () => {
            setIsHovered(false);
        };

        // Agregar listeners de eventos al montar el componente
        const avatarImage = document.getElementById("avatar-image");
        if (avatarImage) {
            avatarImage.addEventListener("mouseenter", handleMouseEnter);
            avatarImage.addEventListener("mouseleave", handleMouseLeave);
        }

        // Remover listeners de eventos al desmontar el componente (Al eliminar los event listeners cuando ya no son necesarios, se optimiza el rendimiento de la aplicación al liberar recursos que de otro modo estarían ocupados por event listeners inútiles.)
        return () => {
            if (avatarImage) {
                avatarImage.removeEventListener("mouseenter", handleMouseEnter);
                avatarImage.removeEventListener("mouseleave", handleMouseLeave);
            }
        };
    }, []);

    return (
        <MotionTransition position="bottom" className="bottom-0 right-0 hidden md:inline-block fixed">
            <Image
                id="avatar-image"
                src={isHovered ? "/img/avtarfrontHi.png" : "/img/avtarfront.png"}
                width={400}
                height={400}
                className="w-full h-full md:w-60 md:h-60 lg:w-auto lg:h-auto"
                alt="Avatar"
            />
        </MotionTransition>
    );
};

export default Avatar;
