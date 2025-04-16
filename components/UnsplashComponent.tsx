"use client"

import { useGetrandomImageQuery } from "@/services/unsplash"
import Image from "next/image"

const UnsplashComponent = () => {
    const { data } = useGetrandomImageQuery()
    return (
        <div className="col-span-12 sm:col-span-6 lg:col-span-8 sticky top-0 h-screen bg-gray-100">
            {data && <Image src={data} alt="Just portraits" className=" w-full object-cover object-center h-full transition-opacity duration-300 ease-in-out" fill priority />}
        </div>
    )
}

export default UnsplashComponent