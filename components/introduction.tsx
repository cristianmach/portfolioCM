"use client"
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div className="z-20 w-full">
            <div className="grid items-center content-center text-center justify-center h-full  md:pt-16  md:grid-cols-2">

                <div className="hidden md:inline-block md:pt-0 lg:ml-72  lg:w-auto lg:h-auto w-60 h-60">
                <Image src="/img/pixelAvatar.png" priority width="400" height="400" alt="Avatar" />
                </div>
        
                <div className="flex flex-col mt-20 md:mt-0 px-8 md:mb-0 text-left md:pl-0 max-w-md">
                    <h1 className=" text-xl text-center md:text-2xl lg:text-4xl text-secondary font-bold">
                        <TypeAnimation
                            sequence={[
                                '¡Hola, yo soy Cristian!',
                                15000,
                                '¡Hello, I am Cristian!',
                                900000,
                            ]}
                            wrapper="span"
                            speed={45}
                            repeat={Infinity}
                        />
                        <br />
                    </h1>

                    <div>
                        <TypeAnimation
                                sequence={[
                                    'Bienvenidos a mi página web, aquí podrás conocer mis habilidades como desarrollador de software y contactarme fácilmente. Mi portafolio, fue creado con NextJS y Tailwind CSS, y muestra parte de mi trabajo, pero hay mucho más por descubrir. ¡Explora y conoce más sobre mí!',
                                    1500,
                                    'Welcome to my website, here you can learn about my skills as a software developer and easily get in touch with me. My portfolio was created with NextJS and Tailwind CSS, showcasing some of my work, but there is much more to discover. Explore and learn more about me!',
                                    900000,
                                ]}
                                wrapper="span"
                                speed={75}
                                omitDeletionAnimation={true}
                                repeat={Infinity}
                                className="text-white text-base md:text-lg"
                            />
                    </div>

                    <div className="flex items-center justify-center gap-3 md:gap-10">
                        <a href="/portfolio" className="px-3 py-2 my-2 md:text-base transition-all border-2 cursor-pointer text-xs w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Ver proyectos
                        </a>
                        <a href="https://mail.google.com/mail/u/0/?ogbl#inbox?compose=cristiandevmg@gmail.com"
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