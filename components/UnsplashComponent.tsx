"use client"

import { useGetrandomImageQuery } from "@/services/unsplash"

const UnsplashComponent = () => {
    const { data, isLoading } = useGetrandomImageQuery()
    return (
        <div className="col-span-12 sm:col-span-6 lg:col-span-8 sticky top-0 h-screen">
            {isLoading ? <div className="w-full h-full bg-gray-100" /> : <img src={data} alt="Just portraits" className=" w-full object-cover object-top h-full transition-opacity duration-300 ease-in-out" />}
        </div>
    )
}

export default UnsplashComponent