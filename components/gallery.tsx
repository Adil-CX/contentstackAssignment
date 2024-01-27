
import Link from 'next/link';
import Image from 'next/image'
import Scooter6 from '../public/images/scooter6.jpg'
import Scooter7 from '../public/images/scooter7.jpg'
import Scooter8 from '../public/images/scooter8.jpg'
import TickIcon from '../components/icons/tickIcon';
const Gallery = () => {
    return (
        <section className="max-w-[1440px] px-4 md:px-10 mx-auto mt-10 md:mt-20">
            <h2 className="text-center text-[#42454A] text-[36px] leading-[44px] md:text-[50px] md:leading-[60px] font-bold">Gallery</h2>
            <p className="text-center text-[20px] leading-7 text-[#42454A] font-normal mt-4">View gallery of our products and make yourself satisfied with our creation.</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 mt-10">
                <li>
                    <Image
                        src={Scooter6.src}
                        alt="Picture of the author"
                        width={633}
                        height={485}
                        sizes="100vw"
                    />
                    <section className="grid justify-center gap-8 w-full mt-10">
                        <button className="border-2 border-black px-8 py-3 rounded-sm mx-auto text-[#42454A] text-[24px] leading-7 md:text-[36px] md:leading-9 font-bold">
                            Battery Images
                        </button>
                        <button className="border-2 border-black px-8 py-3 rounded-sm mx-auto text-[#42454A] text-[24px] leading-7 md:text-[36px] md:leading-9 font-bold">
                            Spare Parts Images
                        </button>
                        <button className="border-2 border-black px-8 py-3 rounded-sm mx-auto text-[#42454A] text-[24px] leading-7 md:text-[36px] md:leading-9 font-bold">
                            Charging Cable Images
                        </button>
                    </section>
                </li>
                <li>
                    <ul className="grid md:justify-end gap-10">
                        <li>
                            <Image
                                src={Scooter7.src}
                                alt="Picture of the author"
                                width={633}
                                height={485}
                                sizes="100vw"
                            />
                        </li>
                        <li>
                            <Image
                                src={Scooter8.src}
                                alt="Picture of the author"
                                width={633}
                                height={485}
                                sizes="100vw"
                            />
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
    )
}
export default Gallery;