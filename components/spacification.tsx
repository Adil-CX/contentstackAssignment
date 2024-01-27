'use client'
import axios from 'axios';
import Link from 'next/link';
import { Result } from 'postcss';
import { useEffect, useState } from 'react';
const Spacification = () => {
    const [data, setData] = useState([])
    const getdata = async () => {
        try {
            const headers = {
                access_token: 'cs61119e4f9cfff1674ec1e91c',
                api_key: 'bltfd340badd0a069d4'
            };
            await axios.get("https://cdn.contentstack.io/v3/content_types/specification/entries/blt6e3206ce07b57318?environment=development", {
                headers: headers
            })
                .then((Response) => {
                    const result = Response.data.entry.specification
                    console.log("result", result)
                    return setData(result)
                }
                );
        }

        catch (error) {
            //console.log(error)
        }
    }
    useEffect(() => {
        getdata()
    }, [])

    return (
        <section className="max-w-[1440px] px-4 md:px-10 mx-auto my-10">
            <ul className="flex justify-between gap-3 md:gap-5 flex-wrap">
                {
                    data?.map((item: any, key: any) => {
                        return (
                            <li key={key}
                                className="w-[160px] md:w-[174px] h-[130px] md:h-[137px] flex flex-col items-center justify-center text-[#42454A] shadow-md">
                                <p className="text-center leading-12 font-bold">
                                    <strong className="text-[40px] ">{item?.value} </strong>
                                    <span className="text-[18px]">{item?.scale}</span>
                                </p>
                                <p className="text-center text-[13px] leading-[17px]">{item?.specification}</p>
                            </li>
                        )
                    })
                }


            </ul>
        </section>
    )
}
export default Spacification;