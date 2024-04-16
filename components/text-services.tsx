'use client'
import { TypeAnimation } from 'react-type-animation';

const TextServices = () => {
    return (
        <div>
            <h1 className="text-2xl leading-tight md:text-left md:text-3xl md:mb-5 font-bold text-secondary">
                <TypeAnimation
                    sequence={[
                        'Mis servicios',
                        15000,
                        'My services',
                        900000,
                    ]}
                    wrapper="span"
                    speed={45}
                    repeat={Infinity}
                />
            </h1>
            <p className="mb-3 text-lg  text-gray-300">
                <TypeAnimation
                    sequence={[
                        'Ofrezco mis conocimientos como Desarrollador de Software, para la creación de sitios web y aplicaciones que sean atractivas y funcionales para los usuarios, utilizando tecnologías como HTML, CSS y JavaScript, Node.js, React, SQL. Permíteme ser parte de tu equipo de desarrollo, para seguir mejorando y adquiriendo nuevas habilidades en el campo del Desarrollo de Software.',
                        15000,
                        'I offer my knowledge as a software developer for the creation of websites and applications that are attractive and functional for users, using technologies such as HTML, CSS, and JavaScript, Node.js, React, SQL. Allow me to be part of your development team to continue improving and acquiring new skills in the field of Software Development.',
                        900000,
                    ]}
                    wrapper="span"
                    speed={45}
                    repeat={Infinity}
                    omitDeletionAnimation={true}
                />
            </p>
        </div>
    );
}

export default TextServices;