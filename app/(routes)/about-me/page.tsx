"use client"
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container";
import Avatar from "@/components/avatar";
import TitleAboutMe from "@/components/title-aboutme";
import CoverParicles from "@/components/cover-particles";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";

const PageAboutme = () => {
    return (
        <> 
            <CoverParicles />
            <TransitionPage />
            <ContainerPage>
                <div className="mb-32 md:mb-20">
                    <Avatar />
                    <TitleAboutMe />                    
                    <CounterServices />
                    <TimeLine />
                </div>
            </ContainerPage>
        </>
    );
}

export default PageAboutme;