import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Github, Instagram, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, Mail } from "lucide-react";
import { TypeAnimation } from 'react-type-animation';

export const socialNetworks = [
    {
        id: 1,
        logo: <Linkedin size={25} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/cristian-machado-228759242",
    },
    {
        id: 2,
        logo: <Github size={25} strokeWidth={1} />,
        src: "https://github.com/cristianmach",
    },
    {
        id: 3,
        logo: <Mail size={25} strokeWidth={1} />,
        src: "https://mail.google.com/mail/u/0/?ogbl#inbox?compose=DmwnWsmGVWmPDvpKKXqqtbVFJLHXRtxjZjsQDrWqCwzdNmHNKLmtNKDKpQKxJTVvkHmHCcdqFzZq",
    },
    {
        id: 4,
        logo: <Instagram size={25} strokeWidth={1} />,
        src: "https://www.instagram.com/cristianc.mg?igsh=MXJqNmJrODVrNGtzcg==",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: <TypeAnimation
                    sequence={[
                        'Análisis y desarrollo de Software',
                        15000,
                        'Software Analysis and Development',
                        15000,
                    ]}
                    wrapper="span"
                    speed={45}
                    repeat={Infinity}
                />,
        subtitle: "SENA: Servicio Nacional de Aprendizaje",
        description: <TypeAnimation
                        sequence={[
                            'Desde el año 2022 me encuentro estudiando Análisis y Desarrollo de Software, donde he adquirido una amplia gama de conocimientos y habilidades en el campo de la programación. Esto incluye el uso de lenguajes como Java, JavaScript y Python, así como la implementación de bases de datos tanto SQL como NoSQL, y el manejo de diversos Frameworks. Estoy en la etapa final de mis estudios y estoy ansioso por adquirir una experiencia laboral más extensa. Si estás en busca de alguien con una fuerte motivación por aprender y mejorar, permíteme formar parte de tu equipo.',
                            15000,
                            'Since 2022, I have been studying Software Analysis and Development, where I have been able to acquire various knowledge and skills in the programming field, such as the use of Java, JavaScript, Python languages, as well as the implementation of SQL and NoSQL databases, and the handling of Frameworks. I am about to finish my studies and I want to gain more work experience. If you are looking for someone eager to learn and improve, allow me to be part of your team.',
                            15000,
                        ]}
                        wrapper="span"
                        speed={45}
                        omitDeletionAnimation={true}
                        repeat={Infinity}
                    />,
        date: "Oct 2022+",
    },
    {
        id: 2,
        title: <TypeAnimation
                    sequence={[
                        'Plataforma de Inventario y Comercio Electrónico de Productos Plásticos',
                        15000,
                        'Inventory and E-commerce Platform for Plastic Products',
                        15000,
                    ]}
                    wrapper="span"
                    speed={45}
                    repeat={Infinity}
                />,
        subtitle: <TypeAnimation
                        sequence={[
                            'Proyecto de Grado',
                            15000,
                            'Graduation Project',
                            15000,
                        ]}
                        wrapper="span"
                        speed={45}
                        repeat={Infinity}
                    />,
        description: <TypeAnimation
                        sequence={[
                            'Para mi proyecto de grado, una empresa dedicada a la comercialización de productos plásticos me permitió desarrollarles una plataforma web de ventas e inventario. Llevé a cabo este proyecto utilizando JavaScript, Node.js, Express, HTML, Bootstrap, CSS y MySQL.',
                            15000,
                            'For my graduation project, a company specializing in the commercialization of plastic products allowed me to develop a web platform for sales and inventory management. I carried out this project using JavaScript, Node.js, Express, HTML, Bootstrap, CSS, and MySQL.',
                            15000,
                        ]}
                        wrapper="span"
                        speed={45}
                        omitDeletionAnimation={true}
                        repeat={Infinity}
                    />,
        date: "Nov 2023",
    },
    {
        id: 3,
        title: <TypeAnimation
                    sequence={[
                        'Desarrollo de Aplicaciones con Interfaz Gráfica: Manejo de Eventos, Clases y Objetos en Java',
                        15000,
                        'Application Development with Graphic Interface: Event Handling, Classes, and Objects in Java',
                        15000,
                    ]}
                    wrapper="span"
                    speed={45}
                    repeat={Infinity}
                />,
        subtitle: "SENA: Servicio Nacional de Aprendizaje",
        description: <TypeAnimation
                        sequence={[
                            'Curso adicional que completé y aprobé, con el objetivo de ampliar mis conocimientos en el campo del Desarrollo de Software.',
                            15000,
                            'Additional course I completed and passed, aiming to broaden my knowledge in the field of Software Development.',
                            15000,
                        ]}
                        wrapper="span"
                        speed={45}
                        omitDeletionAnimation={true}
                        repeat={Infinity}
                    />,
        date: "Sep 2023",
    },
    {
        id: 4,
        title: <TypeAnimation
                    sequence={[
                        'Variables Y Estructuras De Control En La Programacion Orientada A Objetos Java',
                        15000,
                        'Variables and Control Structures in Object-Oriented Programming in Java',
                        15000,
                    ]}
                    wrapper="span"
                    speed={45}
                    repeat={Infinity}
                />,
        subtitle: "SENA: Servicio Nacional de Aprendizaje",
        description: <TypeAnimation
                        sequence={[
                            'Curso adicional que completé y aprobé, con el objetivo de ampliar mis conocimientos en el campo del Desarrollo de Software.',
                            15000,
                            'Additional course I completed and passed, aiming to broaden my knowledge in the field of Software Development.',
                            15000,
                        ]}
                        wrapper="span"
                        speed={45}
                        omitDeletionAnimation={true}
                        repeat={Infinity}
                    />,
        date: "Sep 2023",
    },
    {
        id: 5,
        title: <TypeAnimation
                    sequence={[
                        'Programación Básica',
                        15000,
                        'Basic Programming',
                        15000,
                    ]}
                    wrapper="span"
                    speed={45}
                    repeat={Infinity}
                />,
        subtitle: "Ministerio de Tecnologías de la Información y las Comunicaciones y Universidad del Norte",
        description: <TypeAnimation
                        sequence={[
                            'Curso adicional que completé y aprobé, con el objetivo de ampliar mis conocimientos en el campo del Desarrollo de Software.',
                            15000,
                            'Additional course I completed and passed, aiming to broaden my knowledge in the field of Software Development.',
                            15000,
                        ]}
                        wrapper="span"
                        speed={45}
                        omitDeletionAnimation={true}
                        repeat={Infinity}
                    />,
        date: "Sep 2022",
    }
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 0,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 1,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 3,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 4,
        text: "certificaciones",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Computer />,
        title: <TypeAnimation
                    sequence={[
                        'Desarrollo Web',
                        15000,
                        'Web development',
                        15000,
                    ]}
                    wrapper="span"
                    speed={45}
                    repeat={Infinity}
                />,
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Pencil />,
        title: <TypeAnimation
                sequence={[
                    'Diseño Web',
                    15000,
                    'Web design',
                    15000,
                ]}
                wrapper="span"
                speed={45}
                repeat={Infinity}
            />,
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Web portfolio",
        image: "/img/portfolio.png",
        urlGithub: "https://github.com/cristianmach/portfolioCM.git",
    },
    {
        id: 2,
        title: "E-commerce web",
        image: "/img/ecommerce.png",
        urlGithub: "https://github.com/cristianmach/AmpackCommerce.git",
    },
    {
        id: 3,
        title: "Api Java",
        image: "/img/apiJava.png",
        urlGithub: "https://github.com/cristianmach/Api_Java-MVC-DB-.git",
    },
    {
        id: 4,
        title: "Calculator Java",
        image: "/img/calculator.png",
        urlGithub: "https://github.com/cristianmach/Calculator-Java-.git",
    },
   
];

export const dataTestimonials = [
    {
        id: 1,
        name: "-",
        description:
            "-",
        imageUrl: "-",
    },
];