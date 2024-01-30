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

const FooterMobile = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [defaultOpen, setDefaultOpen] = useState(!isMobile ? ["item-1", "item-2"] : ["item-1"] );
    
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        };

        // Set initial state on mount
        handleResize();

        // Add event listener for resize
        window.addEventListener('resize', handleResize);

        // Remove event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleAccordionToggle = () => {
        if (isMobile) {
            setIsAccordionOpen(!isAccordionOpen);
        }
    };

    return (
        <section className="w-full px-5 bg-[#EBEBEB]">
            
            <Accordion type="multiple" defaultValue={[...defaultOpen]}  disabled={!isMobile}>
                <AccordionItem value="item-1" >
                    <AccordionTrigger onClick={handleAccordionToggle}><p className="text-[#000000] text-sm font-bold leading-[19.6px]">Shop By Department</p></AccordionTrigger>
                    <AccordionContent>
                        <ul className="grid gap-1">
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
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

        </section >
    )
}
export default FooterMobile;
