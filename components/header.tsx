'use client'
import contentstack from 'contentstack';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Logo from '../components/icons/logo'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from "react";
import axios from "axios";
const MyComponent = () => {

   

    const [navbarData, setNavbarData] = useState([])


    const fetchData = async () => {
        try {
            const headers = {
                access_token: 'cs61119e4f9cfff1674ec1e91c',
                api_key: 'bltfd340badd0a069d4'
            };

            const response = await axios.get('https://cdn.contentstack.io/v3/content_types/menulist/entries/bltbfc476de78719c07?environment=development', {
                headers: headers,
            });

            // Handle the response data as needed
            return (setNavbarData(response.data?.entry?.menu_list))

        } catch (error) {
            // Handle errors
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <section className="hidden md:block">
            <section className="max-w-[1440px] px-10 mx-auto mt-10">
                <section className="flex justify-between items-center">
                    <section className="w-52">
                        <Logo />

                        {/* <Image
                            src={navbarData}
                            alt="Picture of the author"
                            width={748}
                            height={708}
                            sizes="100vw"
                        /> */}
                    </section>
                    <section>
                        <ul className="flex gap-5 items-center">
                            {navbarData?.map((item: any, key: any) => {
                                return (
                                    <li key={key} >
                                        <Link href={item.link.href} className="flex items-center gap-3">
                                            {item.link.title}
                                            {
                                               item?.icon?.url  &&
                                                <img src={item?.icon?.url} className="shrink-0"/>
                                              
                                            }
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </section>
                    <section className="min-w-52">
                        <button className="px-5 py-3 ">
                            LOG IN
                        </button>
                        <button className="px-5 py-3 bg-black text-white">
                            SIGN UP
                        </button>
                    </section>
                </section>
            </section>
        </section>
    )
}
export default MyComponent;