'use client'
import Link from 'next/link';
import Image from 'next/image'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
const Footer = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
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
    const [defaultOpen, setDefaultOpen] = useState(isMobile ? ["item-1"] : ["item-1", "item-2", "item-3", "item-4", "item-5"]);

    const [isAccordionOpen, setIsAccordionOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        };

        // Set initial state on mount
        handleResize();
    }, []);

    const handleAccordionToggle = () => {
        if (isMobile) {
            setIsAccordionOpen(!isAccordionOpen);
        }
    };

    return (
        <section className="w-full mt-10">

            <section className="bg-[#EBEBEB] py-10 ">
                <section className="grid gap-5 md:gap-10 ">
                    <section className="max-w-[1200px] w-full mx-auto flex justify-center border-b border-[#D9D9D9] pb-10 px-5 lg:px-10">
                        <section className="max-w-[760px] flex justify-center flex-col md:flex-row gap-5">
                            <section>
                                <strong className="text-[18px] leading-[23.4px] font-bold">Sign Up for 15% Off Your First Order!</strong>
                                <p className="text-[13px] leading-[18.2px] font-normal mt-2">
                                    Sign up for Stoneberry emails to receive exclusive
                                    promotions and be the first to know about new items!
                                </p>
                            </section>
                            <section className="flex w-full max-w-sm items-center space-x-2">
                                <Input type="email" placeholder="Email Address" />
                                <Button type="submit">Sign Up</Button>
                            </section>
                        </section>
                        <hr/>
                    </section>
                    <section className="max-w-[1200px] w-full mx-auto border-b border-[#D9D9D9] pb-10">
                        <Accordion className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-10 px-5 lg:px-10"
                            type="multiple" defaultValue={[...defaultOpen]} disabled={!isMobile}>
                            <AccordionItem value="item-1" >
                                <AccordionTrigger onClick={handleAccordionToggle}><p className="text-[#000000] text-sm font-bold leading-[19.6px]">Shop By Department</p></AccordionTrigger>
                                <AccordionContent>
                                    <ul className="grid gap-1 mt-4">
                                        <li >
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Holiday
                                            </Link>
                                        </li>
                                        <li >
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Bed + Bath
                                            </Link>
                                        </li>
                                        <li >
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Kitchen + Dining
                                            </Link>
                                        </li>  <li >
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Furniture
                                            </Link>
                                        </li>  <li >
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Home
                                            </Link>
                                        </li>  <li >
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Electronics
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Toys
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Clothing, Shoes + Bags
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Jewelry
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Health + Beauty
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Outdoor Living + Tools
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Sports + Fitness
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                As Seen On TV
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Clearance
                                            </Link>
                                        </li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger> <p className="mobiletab text-[#000000] text-sm font-bold leading-[19.6px]">Shop By Department</p></AccordionTrigger>
                                <AccordionContent>
                                    <ul className="mobilecontent mt-4 grid gap-1">
                                        <li>
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Holiday
                                            </Link>
                                        </li>
                                        <li >
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Bed + Bath
                                            </Link>
                                        </li>
                                        <li >
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Kitchen + Dining
                                            </Link>
                                        </li>  <li >
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Furniture
                                            </Link>
                                        </li>  <li >
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Home
                                            </Link>
                                        </li>  <li >
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Electronics
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Toys
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Clothing, Shoes + Bags
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Jewelry
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Health + Beauty
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Outdoor Living + Tools
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Sports + Fitness
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                As Seen On TV
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Clearance
                                            </Link>
                                        </li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger> <p className="mobiletab text-[#000000] text-sm font-bold leading-[19.6px]">Shop By Department</p></AccordionTrigger>
                                <AccordionContent>
                                    <ul className="mobilecontent mt-4 grid gap-1">
                                        <li>
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Holiday
                                            </Link>
                                        </li>
                                        <li >
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Bed + Bath
                                            </Link>
                                        </li>
                                        <li >
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Kitchen + Dining
                                            </Link>
                                        </li>  <li >
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Furniture
                                            </Link>
                                        </li>  <li >
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Home
                                            </Link>
                                        </li>  <li >
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Electronics
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Toys
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Clothing, Shoes + Bags
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Jewelry
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Health + Beauty
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Outdoor Living + Tools
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Sports + Fitness
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                As Seen On TV
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Clearance
                                            </Link>
                                        </li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger> <p className="mobiletab text-[#000000] text-sm font-bold leading-[19.6px]">Shop By Department</p></AccordionTrigger>
                                <AccordionContent>
                                    <ul className="mobilecontent mt-4 grid gap-1">
                                        <li>
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Holiday
                                            </Link>
                                        </li>
                                        <li >
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Bed + Bath
                                            </Link>
                                        </li>
                                        <li >
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Kitchen + Dining
                                            </Link>
                                        </li>  <li >
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Furniture
                                            </Link>
                                        </li>  <li >
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Home
                                            </Link>
                                        </li>  <li >
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Electronics
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Toys
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Clothing, Shoes + Bags
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Jewelry
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Health + Beauty
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Outdoor Living + Tools
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Sports + Fitness
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                As Seen On TV
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Clearance
                                            </Link>
                                        </li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-5">
                                <AccordionTrigger> <p className="mobiletab text-[#000000] text-sm font-bold leading-[19.6px]">Shop By Department</p></AccordionTrigger>
                                <AccordionContent>
                                    <ul className="mobilecontent mt-4 grid gap-1">
                                        <li>
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Holiday
                                            </Link>
                                        </li>
                                        <li >
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Bed + Bath
                                            </Link>
                                        </li>
                                        <li >
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Kitchen + Dining
                                            </Link>
                                        </li>  <li >
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Furniture
                                            </Link>
                                        </li>  <li >
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Home
                                            </Link>
                                        </li>  <li >
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Electronics
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Toys
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Clothing, Shoes + Bags
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Jewelry
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Health + Beauty
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Outdoor Living + Tools
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Sports + Fitness
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                As Seen On TV
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="text-[#000000] text-sm font-normal leading-[19.6px] hover:underline" href="#">
                                                Clearance
                                            </Link>
                                        </li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <section className="px-5 lg:px-5 mt-10">
                            <p className="text-[#656668] text-xs font-normal leading-[16.8px]">*Subject to final credit approval.</p>
                            <p className="text-[#656668] text-xs font-normal leading-[16.8px]">**Your available credit is determined by subtracting your current balance and any unshipped orders from your credit limit.</p>
                        </section>

                    </section>
                    <p className="py-5 bg-[#656668] text-center text-white text-xs font-normal leading-[16.8px]">©2024 Stoneberry | 1-800-704-5480 | Contact Us</p>
                </section>

            </section >
        </section >
    )
}
export default Footer;