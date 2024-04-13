import React, { useEffect, useState } from "react";

interface NasaData {
    title: string;
    explanation: string;
    date: string; // Ajusta el tipo según el tipo real de la fecha en los datos de la API
    // Otras propiedades según la estructura de los datos de la API
}


export default function useDataNasa() {
    const key = "Bth3oI3966ZwVnpVr6XRDKvkEcsegMRlpNx0XLTj";
    const url = `https://api.nasa.gov/planetary/apod?api_key=${key}&count=100`;
    const [dataUrl, setDataUrl] = useState<NasaData[] | null>(null);
    const [currentDataIndex, setCurrentDataIndex] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setDataUrl(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (dataUrl) {
            const interval = setInterval(() => {
                setCurrentDataIndex(prevIndex => {
                    let newIndex = (prevIndex + 1) % 98;
                    let iterations = 0;
                    while (iterations < 98) {
                        if (findSuitableIndex(dataUrl, newIndex) !== -1) {
                            return newIndex;
                        }
                        newIndex = (newIndex + 1) % 98;
                        iterations++;
                    }
                    return prevIndex;
                });
            }, 20000);

            return () => clearInterval(interval);
        }
    }, [dataUrl]);

    const findSuitableIndex = (data: NasaData[], index: number) => {
        for (let i = index; i < index + 98; i++) {
            if (data[i] && data[i].explanation) {
                const shortExplanation = data[i].explanation.substring(0, 50);
                if (shortExplanation.includes('.')) {
                    return index;
                }
            }
        }
        return -1;
    };

    return { dataUrl, currentDataIndex };
}
