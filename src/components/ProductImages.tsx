"use client"

import Image from "next/image";


const ProductImages = () => {
    return (
        <div className="">
            <div className="h-[500px] relative">
                <Image src="https://images.gr-assets.com/books/1447303603l/2767052.jpg" alt="" fill sizes="50vw" className="object-cover rounded-md"/>

            </div>
            <div className=""></div>
        </div>
    )
}

export default ProductImages;