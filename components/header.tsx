import Link from "next/link";
import MotionTransition from "./transition-component" // Esto es lo que hace las transiciones de la pagina
import { socialNetworks } from "@/data";

const Header = () => {
    return (
        <MotionTransition position = "bottom"
        className = "absolute z-40 inline-block w-full top-5 md:top-10 px-20">
            <header>
                <div className = "container justify-between max-w-6xl mx-auto md:flex text-center">
                <Link href='/'>
                        <img src="/img/clogoSWeb.png" alt="logoMG" className="max-w-36 opacity-75 rounded-3xl mx-auto " />
                        <h1 className="mt-2 text-4xl font-bold text-center">
                            M
                            <span className="text-secondary">Δ</span>
                            G
                        </h1>
                        <h3 className="mb-5 text-center ">By Cristian</h3>
                </Link>
                    <div className="flex items-center justify-center gap-7">
                        {socialNetworks.map (({ logo, src, id }) => (
                            <Link key={id}
                            href={src}
                            target= "_blank"
                            className = "transition-all duration-300 hover:text-secondary">
                                {logo}
                            </Link>
                        ))}
                    </div>
                </div>
            </header>

        </MotionTransition>
    );
}

export default Header;