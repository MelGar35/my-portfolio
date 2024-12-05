import Image from "next/image";
import Link from "next/link";

import { dataPortfolio } from "@/data";

import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import PortfolioBox from "@/components/portfolio-box";



const PortfolioPage = () => {

    return (
        <ContainerPage>
            <TransitionPage />
            <div className="flex flex-col justify-center h-full mt-20 md:mt-24">
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-3">Mis <span className="font-bold text-secondary">trabajos realizados</span></h1>

                <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-5 sm:grid-cols-2 md:grid-cols-4 mb-32">
                    {dataPortfolio.map((data) => (
                        <PortfolioBox key={data.id} data={data} />
                    ))}
                </div>
            </div>
        </ContainerPage>
    );
}

export default PortfolioPage;