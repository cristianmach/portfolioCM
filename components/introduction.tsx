"use client"
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div className="z-20 w-full">
            <div className="z-20 grid items-center content-center text-center justify-center h-full  md:pt-16  md:grid-cols-2">

                <div className="pt-72 md:pt-0 lg:ml-72  lg:w-auto lg:h-auto w-60 h-60">
                <Image src="/img/pixelAvatar.png" priority width="400" height="400" alt="Avatar" />
                </div>
        
                <div className="flex flex-col pr-2 mb-28 md:mb-0 pl-56 md:pl-0 max-w-md">
                    <h1 className=" text-xl text-left md:text-2xl lg:text-4xl text-secondary font-bold">
                        <TypeAnimation
                            sequence={[
                                '¡Hello, I am Cristian!',
                                15000,
                                '¡Hola, yo soy Cristian!',
                                15000,
                            ]}
                            wrapper="span"
                            speed={45}
                            repeat={Infinity}
                        />
                        <br />
                        <TypeAnimation
                            sequence={[
                                'Welcome to my website, which was designed so that people interested in my knowledge can contact me and get to know a bit about my skills as a software developer. My portfolio was primarily designed with NextJS, Tailwind CSS, Framer Motion, and TypeScript, however, those are not my only areas of expertise. I invite you to take a look at my website and discover more about me.',
                                1500,
                                'Bienvenidos a mi página web la cual fue diseñada con la finalidad de que las personas interesadas en mi conocimiento puedan contactarme, y conocer un poco de mis habilidades como desarrollador de software. Mi portafolio fue diseñado principalmente con NextJS, Tailwind CSS, Framer Motion y TypeScript, sin embargo, esos no son mis únicos conocimientos. Te invito a echar un vistazo a mi página web y descubrir más de mí.',
                                1500,
                            ]}
                            wrapper="span"
                            speed={75}
                            omitDeletionAnimation={true}
                            repeat={Infinity}
                            className="text-white text-xs md:text-base"
                        />
                    </h1>

                    <div className="flex items-center justify-center gap-3 md:gap-10">
                        <a href="/portfolio" className="px-3 py-2 my-2 md:text-base transition-all border-2 cursor-pointer text-xs w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Ver proyectos
                        </a>
                        <a href="https://mail.google.com/mail/u/0/?ogbl#inbox?compose=DmwnWsmGVWmPDvpKKXqqtbVFJLHXRtxjZjsQDrWqCwzdNmHNKLmtNKDKpQKxJTVvkHmHCcdqFzZq"
                            className="px-3 py-2 my-5 md:text-base transition-all border-2 cursor-pointer text-xs w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary" >
                            Contacta conmigo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;