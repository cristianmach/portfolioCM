'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface PortfolioBoxProps {
    data: {
        id: number,
        title: string,
        image: string,
        urlGithub: string,
        urlDemo: string
    }
}

const PortfolioBox = (props: PortfolioBoxProps) => {
    const { data } = props;
    const { id, title, image, urlDemo, urlGithub } = data;
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - left) / width;
        const y = (event.clientY - top) / height;
        setCursorPosition({ x, y });
    };

    return (
        <div
            key={id}
            className="p-4 border border-teal-50 rounded-xl justify-center"
        >
            <h3 className="mb-4 text-xl">{title}</h3>
            <div
                className="w-full md:w-[200px] rounded-2xl h-auto overflow-hidden relative"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Image
                    src={image}
                    alt="Image"
                    width={200}
                    height={200}
                    className={`w-full h-56 transition-transform duration-300 ${
                        isHovered ? "scale-150" : ""
                    }`}
                    style={{
                        transformOrigin: `${cursorPosition.x * 100}% ${cursorPosition.y * 100}%`
                    }}
                />
            </div>
            <div className=" text-center mt-5">
                <Link
                    href={urlGithub}
                    target="_blank"
                    className="p-2 transition bg-secondary hover:shadow-md hover:shadow-secondary duration-150 rounded-lg"
                >
                    Github
                </Link>
            </div>
        </div>
    );
}

export default PortfolioBox;
