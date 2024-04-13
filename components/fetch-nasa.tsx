import React, { useEffect, useState } from "react";

export default function useDataNasa() {
    const key = "Bth3oI3966ZwVnpVr6XRDKvkEcsegMRlpNx0XLTj";
    const url = `https://api.nasa.gov/planetary/apod?api_key=${key}&count=100`;
    const [dataUrl, setDataUrl] = useState(null);
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

        fetchData(); //Llamar fetchData(); al final del hook useEffect asegura que la función fetchData se ejecute inmediatamente después de que el componente se monte por primera vez.
    }, []); //Cuando utilizas un arreglo vacío [] como dependencia en un useEffect, estás indicando a React que ese efecto no depende de ninguna variable o estado y, por lo tanto, solo debe ejecutarse una vez, evita bucle infinito

    useEffect(() => {
        if (dataUrl) { // Verificar si los datos están disponibles
            const interval = setInterval(() => { //setInterval es una función de JavaScript que se utiliza para ejecutar un bloque de código repetidamente con un intervalo de tiempo fijo entre cada ejecución
                setCurrentDataIndex(prevIndex => {
                    let newIndex = (prevIndex + 1) % 98; //var ejemplo = 17 % 3 el resultado esperado es el valor restante de la división exacta. Es decir, como 3 solo cabe 5 veces en 17, y 17 menos 15 es 2, el resultado de esta operación será 2. 
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
            }, 20000); // Reducir el intervalo a 40 segundos

            return () => clearInterval(interval); // clearInterval es una función nativa de JavaScript que se utiliza para detener un intervalo de tiempo creado previésamente con setInterval
        }
    }, [dataUrl]);

    const findSuitableIndex = (data, index) => {
        for (let i = index; i < index + 98; i++) { // Búsqueda directa del siguiente índice válido
            const shortExplanation = data[i].explanation.substring(0, 50); // Reducir a 50 caracteres
            if (shortExplanation.includes('.')) {
                return index;
            }
        }
        return -1;
    };

    return { dataUrl, currentDataIndex };
}
