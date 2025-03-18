import Link from "next/link";
import Image from "next/image";

const ProductList = () => {
    return (
        <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">
                <Image src="https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md"/>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">Price</span>
                </div>
                <div className="text-sm text-gray-500">My description</div>
                <button className="rounded-2xl ring-1 w-max ring-amber-500 text-amber-500 py-2 px-4 text-xs hover:bg-amber-500 hover:text-white">Add to Cart</button>
            </Link>
        </div>
    )
}

export default ProductList