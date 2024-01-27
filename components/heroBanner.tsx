'use client'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Link from 'next/link';
import RightArrow from '../components/icons/rightArrow';
import WorkSeeIcon from '../components/icons/workSeeIcon'
import Image from 'next/image'
import Scooter1 from '../public/images/scooter1.jpg'
import axios from "axios";
import { useEffect, useState } from "react";
const HeroBanner = () => {
    const [heroData, setHeroData] = useState([])

    const fetchData = async () => {
        try {
            const headers = {
                access_token: 'cs61119e4f9cfff1674ec1e91c',
                api_key: 'bltfd340badd0a069d4'
            };

            const response = await axios.get('https://cdn.contentstack.io/v3/content_types/hero_banner/entries/bltfcfaa18f7e95f1fe?environment=development', {
                headers: headers,
            });

            // Handle the response data as needed
            console.log("setHeroData: ", response.data.entry.hero_banner);
            return (setHeroData(response.data.entry.hero_banner))
        } catch (error) {
            // Handle errors
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <section className="max-w-[1440px] mx-auto mt-10">
            <section className="py-10">
                <Carousel>
                    <CarouselContent>
                        {
                            heroData.map((item: any, key: any) => {
                                return (

                                    <CarouselItem key={key}>
                                        <section className="grid grid-cols-1 md:grid-cols-2">
                                            <section className="px-4 md:px-10">
                                                <h1 className="text-[30px] lg:text-[90px] leading-[35px] lg:leading-[95px] tracking-[1%] uppercase">
                                                    <span>{item.title1}</span><br />
                                                    <span className="font-bold">{item.title2}</span>
                                                </h1>
                                                <section className="w-full sm:w-[355px] h-[2px] md:h-1 bg-black my-5 md:my-10"></section>
                                                <p className="text-[22px] tracking-[1%] font-normal">
                                                    {item.description}
                                                </p>
                                                <section className="flex gap-4 md:gap-52 mt-6 md:mt-10">
                                                    <button className="flex gap-2 md:gap-5 items-center">
                                                        <span className="flex bg-black w-8 md:w-[58px] h-7 md:h-[58px] items-center justify-center">
                                                            <RightArrow className="w-4" />
                                                        </span>
                                                        Buy now
                                                    </button>
                                                    <section className="w-[180px] flex items-center gap-5">
                                                        <p>Watch our video how it works</p>
                                                        <WorkSeeIcon className="shrink-0" />
                                                    </section>
                                                </section>
                                            </section>
                                            <section>
                                                <Image
                                                    src={item.image.url}
                                                    alt="Picture of the author"
                                                    width={3423}
                                                    height={2584}
                                                    sizes="100vw"
                                                    className="w-full"
                                                />

                                            </section>
                                        </section>
                                    </CarouselItem>


                                )
                            })
                        }
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </section>
        </section>
    )
}
export default HeroBanner;