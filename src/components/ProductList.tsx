import Link from "next/link";
import Image from "next/image";

const ProductList = ({ books }) => {
    return (
        <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
            {books.map((book) => (
                <Link href="/test" key={book.id} className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                    <div className="relative w-full h-80">
                        <Image src={book.image_url} alt="" fill sizes="25vw" className="absolute object-cover rounded-md"/>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium min-h-[5rem]">{book.title}</span>
                        <div className="gap-x-3">
                            <span className="font-semibold">19.99€</span>
                        </div>
                    </div>
                    <div className="text-sm py-0 my-0 text-gray-500 overflow-scroll scrollbar-hide h-50">{book.description}</div>
                    <button className="rounded-2xl ring-1 w-max ring-amber-500 text-amber-500 py-2 px-4 text-xs hover:bg-amber-500 hover:text-white">Add to Cart</button>
                </Link>
            ))}
        </div>
    );
};

export default ProductList;
