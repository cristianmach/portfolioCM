'use client'
import { TypeAnimation } from 'react-type-animation';

const TitlePortfolio = () => {
    return (
        <h1 className="text-2xl leading-tight font-bold text-secondary text-center md:text-3xl md:mb-5">
            <TypeAnimation
                sequence={[
                    'Mis proyectos',
                    15000,
                    'My projects',
                    900000,
                ]}
                wrapper="span"
                speed={45}
                repeat={Infinity}
            />
        </h1>
    );
}

export default TitlePortfolio;