"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Slider = () => {
    const [current, setCurrent] = useState(0);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("https://example-data.draftbit.com/books")
            .then((response) => response.json())
            .then((data) => {
                // Sélectionner 5 livres au hasard
                const randomBooks = data.sort(() => 0.5 - Math.random()).slice(0, 5);
                setBooks(randomBooks);
            })
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        if (books.length === 0) return;
        const interval = setInterval(() => {
            setCurrent((prev) => (prev === books.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(interval);
    }, [books]);
    return (
        <div className="h-[calc(100vh-80px)] overflow-hidden relative">
            <div className="w-max h-full flex transition-transform duration-1000" style={{ transform: `translateX(-${current * 100}vw)` }}>
                {books.map((slide) => (
                    <div className="bg-gray-50 w-screen h-full flex flex-col gap-16 xl:flex-row" key={slide.id}>
                        {/* TEXT CONTAINER */}
                        <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
                            <h2 className="text-l">{slide.description}</h2>
                            <h1 className="text-2xl font-semibold">{slide.title}</h1>
                            <Link href={`/product/${slide.id}`}>
                                <button className="rounded-md bg-black text-white py-3 px-4">SHOP NOW</button>
                            </Link>
                        </div>
                        {/* IMAGE CONTAINER */}
                        <div className="h-1/2 xl:w-1/2 xl:h-full relative">
                            <Image src={slide.image_url} alt={slide.title} fill sizes="100%" className="object-contain" />
                        </div>
                    </div>
                ))}
            </div>
            {/* NAVIGATION DOTS */}
            <div className="absolute m-auto left-1/2 bottom-8 gap-4 flex -translate-x-1/2">
                {books.map((_, index) => (
                    <div
                        className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${current === index ? "scale-150" : ""}`}
                        key={index}
                        onClick={() => setCurrent(index)}
                    >
                        {current === index && <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
