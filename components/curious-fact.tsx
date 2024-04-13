"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import useDataNasa from "@/components/fetch-nasa";
import { Loader } from 'lucide-react';

export default function NewData () {
    const { dataUrl, currentDataIndex } = useDataNasa();

    if (!dataUrl) {
        return <div className="fixed invisible md:visible bottom-0 right-0 flex text-xs h-auto w-auto items-center"><Loader /></div>;
    }

    const { date } = dataUrl[currentDataIndex];
    const { explanation } = dataUrl[currentDataIndex];
    const { title } = dataUrl[currentDataIndex];

    const firstDotIndex = explanation.indexOf('.'); //se utiliza para encontrar la posición de la primera ocurrencia de un carácter dentro de una cadena.
    let moreThan;
    let truncatedExplanation;

    if (firstDotIndex <= 50) {
        truncatedExplanation = explanation.substring(0, firstDotIndex + 1) // cadena.substring(inicio, fin) basicamente devulve algo entre dos paremetros
    } else {
        moreThan = explanation.substring(0, 50)
        truncatedExplanation = `${moreThan}...`
    }
    
    return (
        <div className="flex invisible md:visible">
            <div className="fixed bottom-0 right-0 flex text-xs h-auto w-auto items-center">
                <h1>
                <TypeAnimation
                            sequence={[
                                'Curious fact taken from NASA=',
                                15000,
                                'Dato curioso tomado de la NASA= ',
                                15000,
                            ]}
                            wrapper="span"
                            speed={45}
                            repeat={Infinity}
                        />
                </h1>
                <img src="/img/llaveizq.png" alt="Llave Izquierda" className="w-6" />

                <div>
                    <h1>
                    Title: {title}.
                    </h1>

                    <h1>
                    Date: {date}
                    </h1>
                    <p>
                    Fact: {truncatedExplanation}
                    </p>
                </div>
                <img src="/img/llaveder.png" alt="Llave Derecha" className="w-6" />
            </div>
        </div>
    );
}
