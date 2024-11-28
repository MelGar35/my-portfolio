import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
    return (
        <>

            <TransitionPage />
            <CircleImage />
            <AvatarServices />
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2 md:px-20">
                <div className="max-w-[450px] mt-24 md:mt-0">

                    <h1 className="text-3xl leading-tight text-center md:text-left md:text-4xl md:mb-3 ">Mis<span className="font-bold text-secondary"> servicios</span></h1>
                    <p className="mb-3 text-l text-gray-300"> Como programadora Fullstack ofrezco el desarrollo completo de aplicaciones web, desde el diseño y funcionalidad hasta la lógica y gestión de datos. Creando soluciones escalables, seguras y optimizadas para brindar una experiencia fluida a los usuarios, integrando tecnologías modernas y garantizando la conexión eficiente con bases de datos y servicios externos.</p>
                    <button className="px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/65 text-sm">Contactame</button>
                </div>
                {/* SLIDER */}
                <div>
                    <SliderServices />
                </div>
            </div>
        </>
    );
}

export default ServicesPage;