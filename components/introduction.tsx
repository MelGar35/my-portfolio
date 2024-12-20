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

                    <p className="mx-auto text-center mb-2 text-sm sm:text-base md:text-xl md:mx-0 md:mb-5">
                    Como desarrolladora Fullstack, me especializo en fusionar diseño y funcionalidad para crear experiencias digitales intuitivas, eficientes y accesibles. Mi objetivo es entregar soluciones tecnológicas que no solo cumplan con los requisitos técnicos, sino que también ofrezcan una experiencia de usuario excepcional.
                    </p>

                    <div className="flex items-center justify-center gap-3 md:justify-center md:gap-10">
                    <a href="https://drive.google.com/file/d/14u26-0A70s57dgLv9pId4faSFKKjFjg8/view?usp=drive_link" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-sm sm:text-base w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                        Curriculum
                        </a>    
                    <a href="mailto:melisagarciadeveloper@gmail.com"
                       className="px-3 py-2 my-2 transition-all border-2  cursor-pointer text-sm sm:text-base w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary">
                       Contactame
                    </a>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Introduction;