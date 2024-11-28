"use client"

import { socialNetworks } from "@/data";
import Link from "next/link";
import { MotionTransition } from "./transition-component";

const Header = () => {
    return (
        <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-5 md:top-10 px-20">
    <header>
        <div className="container justify-between max-w-7xl mx-auto md:flex flex-col md:flex-row items-center md:items-start">
            <Link href='/'>
                <h1 className="my-0 text-2xl font-bold text-center md:text-left mb-4 md:mb-0">
                    Melisa{" "}
                    <span className="text-secondary">García</span>
                </h1>
            </Link>
            <div className="flex items-center justify-center gap-7">
                {socialNetworks.map(({ logo, src, id }) => (
                    <Link
                        key={id}
                        href={src}
                        target="_blank"
                        className="transition-all duration-300 hover:text-secondary"
                    >
                        {logo}
                    </Link>
                ))}
            </div>
        </div>
    </header>
</MotionTransition>
    );
}

export default Header;