"use client"

import CoverParicles from "@/components/cover-particles";

import AvatarServices from "@/components/avatar-services";
import TransitionPage from "@/components/transition-page";
import SliderServices from "@/components/slider-services";
import TextServices from "@/components/text-services";

const ServicesPage = () => {
    return (
        <>
            <CoverParicles />
            <TransitionPage />
            <AvatarServices />
            <div className="grid lg:gap-x-32 lg:ml-28 items-center  mt-72 content-center md:mt-64 justify-items-center md:justify-items-end max-w-5xl md:mb-96 mb-60 px-16">
                <div className="md:justify-self-start">
                    <TextServices />
                </div>

                <div>
                    <SliderServices />
                </div>
            </div>
        </>
    );
}

export default ServicesPage;