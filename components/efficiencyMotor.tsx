'use client'
import Link from 'next/link';
import Image from 'next/image'
import Scooter3 from '../public/images/scooter3.jpg'
import TickIcon from '../components/icons/tickIcon';
import { useEffect, useState } from 'react';
import axios from 'axios';
const EfficiencyMotor = () => {

    const [productData, setProductData] = useState<any>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const headers = {
                    access_token: 'cs61119e4f9cfff1674ec1e91c',
                    api_key: 'bltfd340badd0a069d4'
                };
                const response = await axios.get("https://cdn.contentstack.io/v3/content_types/high_efficiency_motor/entries/blt5bd0816f4bc84ce7?environment=development", {
                    headers: headers
                })
                setProductData(response.data.entry);
                console.log("PR", response.data.entry)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    const { title, description, image, productlist } = productData || {};
    return (
        <section className="max-w-[1440px] px-4 md:px-10 mx-auto mt-10 md:mt-20">
            {title && (
                <h2 className="text-center text-[#42454A] text-[36px] leading-[44px] md:text-[50px] md:leading-[60px] font-bold">{title}</h2>
            )}

            {description && (
                <p className="text-center text-[20px] leading-7 text-[#42454A] font-normal mt-4">{description}</p>
            )}
            <section className="gridi justify-center tems-center">

                {
                    image && (
                        <Image
                            src={image.url}
                            alt="Picture of the author"
                            width={1408}
                            height={792}
                        />
                    )
                }


            </section>
        </section>
    )
}
export default EfficiencyMotor;