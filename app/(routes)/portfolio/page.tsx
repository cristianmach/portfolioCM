import Image from "next/image";
import Link from "next/link";

import { dataPortfolio } from "@/data";

import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container";
import PortfolioBox from "@/components/portfolio-box";
import TitlePortfolio from "@/components/title-portfolio";


const PortfolioPage = () => {

    return (
        <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
            <ContainerPage >
                <TransitionPage />
                <div className="flex flex-col justify-center items-center  content-center">
                    
                    <TitlePortfolio />

                    <div className="relative z-10 grid max-w-5xl gap-6 justify-center text-center mx-auto mt-2 md:grid-cols-2 lg:md:grid-cols-4">
                        {dataPortfolio.map((data) => (
                            <PortfolioBox key={data.id} data={data} /> 
                        ))}
                    </div>
                </div>
            </ContainerPage>
        </div>
    );
}

export default PortfolioPage;