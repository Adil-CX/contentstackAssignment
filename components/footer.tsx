'use client'
import Link from 'next/link';
import Image from 'next/image'

import Scooter9 from '../public/images/Scooter9.png'
import Facebook from '../public/images/facebook.png'
import Twitter from '../public/images/twitter.png'
import Instagramm from '../public/images/instagramm.png'
import TickIcon from '../components/icons/tickIcon';
import { useEffect, useState } from 'react';
import axios from 'axios';
const Footer = () => {
    const [footerData, setFooterData] = useState<any>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const headers = {
                    access_token: 'cs61119e4f9cfff1674ec1e91c',
                    api_key: 'bltfd340badd0a069d4'
                };
                const response = await axios.get("https://cdn.contentstack.io/v3/content_types/footer/entries/blt8fb3f4d5fc310c54?environment=development", {
                    headers: headers
                })
                setFooterData(response.data.entry);
                console.log("PR", response.data.entry)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    const { footer_title, copy_right_text, image, footer_list, footer_menu, link } = footerData || {};
    console.log(Footer, copy_right_text)
    return (
        <section className="mx-auto mt-10 md:mt-20 pt-[140px] relative">
            <section className="bg-[#42454A] py-10 ">
                <section className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 ">
                    <section className="relative -mt-[100px] md:-mt-[140px]">
                        {
                            image && (
                                <Image
                                    src={image.url}
                                    alt="Picture of the author"
                                    width={608}
                                    height={552}
                                />
                            )
                        }

                    </section>
                    <section>
                        <ul className="grid md:grid-cols-3 gap-10 text-white mt-14 px-5">
                            {
                                footer_list && Array.isArray(footer_list) && footer_list.length > 0 ? (
                                    footer_list?.map((item: any, key: any) => {

                                        return (
                                            <li key={key}>
                                                <p className="text-[#FBFBFB text-[22px] font-bold leading-[25px]">{item.footer_title}</p>
                                                <ul className="mt-4">
                                                    {
                                                        item?.footer_menu?.link && Array.isArray(item?.footer_menu?.link) && item?.footer_menu?.link?.length > 0 ? (
                                                            item?.footer_menu?.link?.map((item: any, key: any) => {
                                                                return (
                                                                    <li key={key}>
                                                                        <Link className="text-[#FBFBFB text-base font-normal leading-[54px]" href="#">
                                                                            {item.title}
                                                                        </Link>
                                                                    </li>

                                                                )
                                                            })
                                                        ) :
                                                            <></>
                                                    }
                                                    <li>

                                                        <ul className="flex flex-wrap gap-3">
                                                            {
                                                                item?.footer_menu?.social_icon && Array.isArray(item?.footer_menu?.social_icon) && item?.footer_menu?.social_icon?.length > 0 ? (
                                                                    item?.footer_menu?.social_icon?.map((item: any, key: any) => {
                                                                        return (
                                                                            <li key={key}>
                                                                                <Link className="text-[#FBFBFB text-base font-normal leading-[54px]" href="#">
                                                                                    <Image
                                                                                        src={item?.icon?.url}
                                                                                        alt={item.icon.filename}
                                                                                        width={32}
                                                                                        height={32}
                                                                                    />
                                                                                </Link>
                                                                            </li>

                                                                        )
                                                                    })
                                                                ) :
                                                                    <></>
                                                            }
                                                        </ul>

                                                    </li>
                                                </ul>
                                            </li>
                                        )
                                    })
                                ) :
                                    <></>
                            }
                        </ul>
                    </section>
                </section>
                {
                    copy_right_text && (
                        <p className="text-center text-[#FBFBFB] text-base font-normal leading-[54px] mt-8">{footerData.copy_right_text}</p>
                    )
                }
            </section>
        </section>
    )
}
export default Footer;