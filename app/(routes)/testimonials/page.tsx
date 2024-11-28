"use client"

import Image from 'next/image';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import { dataTestimonials } from '@/data';
import CircleImage from '@/components/circle-image';
import AvatarPortfolio from '@/components/avatar-portfolio';
import TransitionPage from '@/components/transition-page';

const TestimonialsPage = () => {
    return (
        <>
            <TransitionPage />
            <div className='flex flex-col justify-center h-lvh'>
                <CircleImage />
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-3">
                    Mis{" "}
                    <span className="font-bold text-secondary">Credenciales</span>
                </h1>
                <div className="flex items-center justify-center mt-5">
                    <div>
                        <Swiper
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 15
                                },
                            }}
                            freeMode={true}
                            pagination={{
                                clickable: true
                            }}
                            modules={[Pagination]}
                            className="h-[310px] md:h-[420px] w-[270px] md:w-[450px]"
                        >
                            {dataTestimonials.map(({ id, imageUrl }) => (
                                <SwiperSlide key={id}>
                                    <Image src={imageUrl} alt="" width="600" height="300" className="mx-auto" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TestimonialsPage;