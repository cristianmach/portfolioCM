"use client" //Esto es Obligatorio para la nueva version de next.js

import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const CoverParicles = () => {
    const [ init, setInit ] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadSlim(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return (
        init && 
        <div className= "w-[0px]">
            <Particles
            id="tsparticles"
            options={{
                fpsLimit: 120,
                interactivity: {
                    detectsOn: "window",
                    events: {
                      onClick: {
                        enable: true,
                        mode: "repulse"
                      },
                      onDiv: {
                        selectors: [],
                        enable: false,
                        mode: [],
                        type: "circle"
                      },
                      onHover: {
                        enable: true,
                        mode: "bubble",
                        parallax: {
                          enable: false,
                          force: 2,
                          smooth: 10
                        }
                      },
                      resize: {
                        delay: 0.5,
                        enable: true
                      }
                    },
                    modes: {
                      trail: {
                        delay: 1,
                        pauseOnStop: false,
                        quantity: 1
                      },
                      attract: {
                        distance: 500,
                        duration: 0.4,
                        easing: "ease-out-quad",
                        factor: 1,
                        maxSpeed: 50,
                        speed: 1
                      },
                      bounce: {
                        distance: 200
                      },
                      bubble: {
                        distance: 100,
                        duration: 2,
                        mix: false,
                        opacity: 0,
                        size: 0,
                        divs: {
                          distance: 100,
                          duration: 0.4,
                          mix: false,
                          selectors: []
                        }
                      },
                      connect: {
                        distance: 80,
                        links: {
                          opacity: 0.5
                        },
                        radius: 60
                      },
                      grab: {
                        distance: 400,
                        links: {
                          blink: false,
                          consent: false,
                          opacity: 1
                        }
                      },
                      push: {
                        default: true,
                        groups: [],
                        quantity: 4
                      },
                      remove: {
                        quantity: 2
                      },
                      repulse: {
                        distance: 400,
                        duration: 0.4,
                        factor: 100,
                        speed: 1,
                        maxSpeed: 50,
                        easing: "ease-out-quad",
                        divs: {
                          distance: 200,
                          duration: 0.4,
                          factor: 100,
                          speed: 1,
                          maxSpeed: 50,
                          easing: "ease-out-quad",
                          selectors: []
                        }
                      },
                      slow: {
                        factor: 3,
                        radius: 200
                      },
                      light: {
                        area: {
                          gradient: {
                            start: {
                              value: "#ffffff"
                            },
                            stop: {
                              value: "#000000"
                            }
                          },
                          radius: 1000
                        },
                        shadow: {
                          color: {
                            value: "#000000"
                          },
                          length: 2000
                        }
                      }
                    }
                  },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 100,
                        enable: false,
                        frequency: 1,
                        opacity: 1,
                        width: 1,
                        shadow: {
                            blur: 5,
                            color: {
                              value: "#ffffff"
                            },
                            enable: false
                          },
                        triangles: {
                            enable: false,
                            frequency: 1
                        },  
                    },
                    repulse: {
                        value: 0,
                        enabled: false,
                        distance: 1,
                        duration: 1,
                        factor: 1,
                        speed: 1
                      },
                    move: {
                        direction: "none",
                        enable: true,
                        size: true,
                        speed: 0.1,
                    },
                    number: {
                        density: {
                            enable: false,
                        },
                        limit: {
                            mode: "delete",
                            value: 0
                        },
                        value: 400
                    },
                    opacity: {
                        value: {
                          min: 0.1,
                          max: 1
                        },
                        animation: {
                          count: 0,
                          enable: true,
                          speed: 1,
                          decay: 0,
                          delay: 0,
                          sync: false,
                          mode: "auto",
                          startValue: "random",
                          destroy: "none"
                        }
                      },
                    shape: {
                        close: true,
                        fill: true,
                        options: {},
                        type: "circle"
                    },
                    size: {
                        value: {
                          min: 0.5,
                          max: 2,
                        },
                        animation: {
                          count: 0,
                          enable: false,
                          speed: 5,
                          decay: 0,
                          delay: 0,
                          sync: false,
                          mode: "auto",
                          startValue: "random",
                          destroy: "none"
                        }
                      },
                },
                detectRetina: true,
            }}
        />
        </div>
    );
}

export default CoverParicles;
