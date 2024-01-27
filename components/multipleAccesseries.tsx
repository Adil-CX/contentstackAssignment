
import Link from 'next/link';
import Image from 'next/image'
import Scooter4 from '../public/images/scooter4.jpg'
import Scooter5 from '../public/images/scooter5.jpg'
import Rack1 from '../public/images/rack1.jpg'
import Rack2 from '../public/images/rack2.jpg'
import TickIcon from '../components/icons/tickIcon';
const MultipleAccessories = () => {
    return (
        <section className="max-w-[1440px] px-4 md:px-10 mx-auto mt-10 md:mt-20">
            <h2 className="text-center text-[#42454A] text-[36px] leading-[44px] md:text-[50px] md:leading-[60px] font-bold">Multiple Accessories</h2>
            <p className="text-center text-[20px] leading-7 text-[#42454A] font-normal mt-4">There are multiple modes for the scooter for your multiple needs.</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-center mt-8 gap-8 md:gap-0">
                <li className="lg:col-span-2">
                    <h2 className="text-[#42454A] text-[36px] leading-[44px] md:text-[50px] md:leading-[60px] font-bold">Golf Bag Rock</h2>
                    <ul className="grid gap-5 mt-5">
                        <li className="flex items-center  gap-4">
                            <TickIcon className="shrink-0" />
                            <p className='text-[20px] leading-7 text-[#42454A] font-normal'>Material : Aluminium alloy</p>
                        </li>
                        <li className="flex items-center gap-4">
                            <TickIcon className="shrink-0" />
                            <p className='text-[20px] leading-7 text-[#42454A] font-normal'>Color : Black</p>
                        </li>
                        <li className="flex items-center gap-4">
                            <TickIcon className="shrink-0" />
                            <p className='text-[20px] leading-7 text-[#42454A] font-normal'>Capacity : 45lbs</p>
                        </li>
                        <li className="flex items-center gap-4">
                            <TickIcon className="shrink-0" />
                            <p className='text-[20px] leading-7 text-[#42454A] font-normal'>PEase : Steady & adjustable</p>
                        </li>
                    </ul>
                </li>
                <li className="lg:col-span-3">
                    <section className="grid grid-cols-2 items-center">
                        <Image
                            src={Scooter4.src}
                            alt="Picture of the author"
                            width={479}
                            height={479}

                        />
                        <Image
                            src={Scooter5.src}
                            alt="Picture of the author"
                            width={493}
                            height={438}

                        />
                    </section>
                </li>
            </ul>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-center mt-8 gap-8 md:gap-10">
                <li className="lg:col-span-3">
                    <section className="grid grid-cols-3 gap-5 items-center">
                        <Image
                            src={Rack1.src}
                            alt="Picture of the author"
                            width={472}
                            height={427} 
                            className="col-span-2"
                        />
                        <Image
                            src={Rack2.src}
                            alt="Picture of the author"
                            width={240}
                            height={210}
                            className="col-span-1"
                        />
                    </section>
                </li>
                <li className="lg:col-span-2">
                    <h2 className="text-[#42454A] text-[36px] leading-[44px] md:text-[50px] md:leading-[60px] font-bold">Shopping Rack</h2>
                    <ul className="grid gap-5 mt-5">
                        <li className="flex items-center  gap-4">
                            <TickIcon className="shrink-0" />
                            <p className='text-[20px] leading-7 text-[#42454A] font-normal'>Material : Aluminium alloy</p>
                        </li>
                        <li className="flex items-center gap-4">
                            <TickIcon className="shrink-0" />
                            <p className='text-[20px] leading-7 text-[#42454A] font-normal'>Color : Black</p>
                        </li>
                        <li className="flex items-center gap-4">
                            <TickIcon className="shrink-0" />
                            <p className='text-[20px] leading-7 text-[#42454A] font-normal'>Capacity : 45lbs</p>
                        </li>
                        <li className="flex items-center gap-4">
                            <TickIcon className="shrink-0" />
                            <p className='text-[20px] leading-7 text-[#42454A] font-normal'>Ease : Quick & adjustable</p>
                        </li>
                    </ul>
                </li>
            </ul>
            <section className="flex justify-center w-full mt-8">
                <button className="border-2 border-black px-8 py-3 rounded-sm mx-auto text-[#42454A] text-[24px] leading-7 md:text-[36px] md:leading-9 font-bold">
                    More Accessories Coming Soon
                </button>
            </section>
        </section>
    )
}
export default MultipleAccessories;