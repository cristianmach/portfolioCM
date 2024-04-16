'use client'
import { TypeAnimation } from 'react-type-animation';

const TitleAboutMe = () => {
    return (
        <div className='text-secondary font-bold text-2xl leading-tight text-center md:text-left lg:text-4xl md:text-3xl px-20'>
            <TypeAnimation
                sequence={[
                    'Perfil Profesional...',
                    15000,
                    'Perfil Profesional...',
                    900000,
                ]}
                wrapper="span"
                speed={45}
                repeat={Infinity}
            />
        </div>
    );
}

export default TitleAboutMe;