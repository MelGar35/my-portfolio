import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
//Img: /home-4.png<Image src="" priority width="800" height="700" alt="Avatar" /> 1er div tenia z-20 y le puse flex
const Introduction = () => {
    return (
        <div className="flex justify-center w-full bg-darkBg/60">
            <div className="z-10 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-1">
                
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center  md:text-4xl mb-10">Si puedes pensarlo, <br />
                        <TypeAnimation
                            sequence={[
                                'puedes programarlo',
                                1000,
                                'puedes optimizarlo',
                                1000,
                                'puedes implementarlo',
                                1000,
                                'puedes desarrollarlo',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-secondary"
                        />
                    </h1>

                    <p className="mx-auto text-center mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                        Como desarrolladora Fullstack, me dedico a combinar diseño y funcionalidad para crear experiencias digitales eficientes y accesibles.
                    </p>

                    <div className="flex items-center justify-center gap-3 md:justify-center md:gap-10">
                        <a href="/contact"
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary" >
                            Contacta conmigo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;