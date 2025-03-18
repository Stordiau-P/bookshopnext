"use client"
import {useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";

const slides =[{
    id: 1,
    title: "The Hunger Games",
    authors: "Suzanne Collins",
    description: "Winning will make you famous. Losing means certain death.The nation of Panem, formed from a post-apocalyptic North America, is a country that consists of a wealthy Capitol region surrounded by 12 poorer districts. Early in its history, a rebellion led by a 13th district against the Capitol resulted in its destruction and the creation of an annual televised event known as the Hunger Games. In punishment, and as a reminder of the power and grace of the Capitol, each district must yield one boy and one girl between the ages of 12 and 18 through a lottery system to participate in the games. The 'tributes' are chosen during the annual Reaping and are forced to fight to the death, leaving only one survivor to claim victory.When 16-year-old Katniss's young sister, Prim, is selected as District 12's female representative, Katniss volunteers to take her place. She and her male counterpart Peeta, are pitted against bigger, stronger representatives, some of whom have trained for this their whole lives. , she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
    edition: "",
    format: "Hardcover",
    num_pages: 374,
    rating: 4.33,
    rating_count: 5519135,
    review_count: 160706,
    genres: "Young Adult, Fiction, Science Fiction, Dystopia, Fantasy, Science Fiction",
    genre_list: "Young Adult,Fiction,Science Fiction,Dystopia,Fantasy",
    image_url: "https://images.gr-assets.com/books/1447303603l/2767052.jpg",
    Quote1: "“You don’t forget the face of the person who was your last hope.”",
    Quote2: "“Remember, we're madly in love, so it's all right to kiss me anytime you feel like it.”",
    Quote3: "“May the odds be ever in your favor!”",
    url : "/"
},
    {
        id: 2,
        title: "Harry Potter and the Order of the Phoenix",
        authors: "J.K. Rowling",
        description: "There is a door at the end of a silent corridor. And it’s haunting Harry Pottter’s dreams. Why else would he be waking in the middle of the night, screaming in terror?Harry has a lot on his mind for this, his fifth year at Hogwarts: a Defense Against the Dark Arts teacher with a personality like poisoned honey; a big surprise on the Gryffindor Quidditch team; and the looming terror of the Ordinary Wizarding Level exams. But all these things pale next to the growing threat of He-Who-Must-Not-Be-Named---a threat that neither the magical government nor the authorities at Hogwarts can stop.As the grasp of darkness tightens, Harry must discover the true depth and strength of his friends, the importance of boundless loyalty, and the shocking price of unbearable sacrifice.His fate depends on them alll.(back cover)",
        edition: "US Edition",
        format: "Paperback",
        num_pages: 870,
        rating: 4.48,
        rating_count: 2041594,
        review_count: 33264,
        genres: "Fantasy, Young Adult, Fiction",
        genre_list: "Fantasy,Young Adult,Fiction",
        image_url: "https://images.gr-assets.com/books/1255614970l/2.jpg",
        Quote1: "“Wit beyond measure is man’s greatest treasure.”",
        Quote2: "“Indifference and neglect often do much more damage than outright dislike.”",
        Quote3: "“Things we lose have a way of coming back to us in the end, if not always in the way we expect.”",
        url : "/"
    },
    {
        id: 3,
        title: "To Kill a Mockingbird",
        authors: "Harper Lee",
        description: "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it, To Kill A Mockingbird became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic.Compassionate, dramatic, and deeply moving, To Kill A Mockingbird takes readers to the roots of human behavior - to innocence and experience, kindness and cruelty, love and hatred, humor and pathos. Now with over 18 million copies in print and translated into forty languages, this regional story by a young Alabama woman claims universal appeal. Harper Lee always considered her book to be a simple love story. Today it is regarded as a masterpiece of American literature.",
        edition: "50th Anniversary",
        format: "Paperback",
        num_pages: 324,
        rating: 4.27,
        rating_count: 3745197,
        review_count: 79450,
        genres: "Classics, Fiction, Historical, Historical Fiction, Academic, School",
        genre_list: "Classics,Fiction,Historical,Historical Fiction,Academic,School",
        image_url: "https://images.gr-assets.com/books/1361975680l/2657.jpg",
        Quote1: "“Until I feared I would lose it, I never loved to read. One does not love breathing.”",
        Quote2: "“People generally see what they look for, and hear what they listen for.”",
        Quote3: "“The one thing that doesn't abide by majority rule is a person's conscience.”",
        url : "/"
    },
    {
        id: 4,
        title: "Pride and Prejudice",
        authors: "Jane Austen",
        description: "Since its immediate success in 1813, Pride and Prejudice has remained one of the most popular novels in the English language. Jane Austen called this brilliant work \"her own darling child\" and its vivacious heroine, Elizabeth Bennet, \"as delightful a creature as ever appeared in print.\" The romantic clash between the opinionated Elizabeth and her proud beau, Mr. Darcy, is a splendid performance of civilized sparring. And Jane Austen's radiant wit sparkles as her characters dance a delicate quadrille of flirtation and intrigue, making this book the most superb comedy of manners of Regency England.",
        edition: "Modern Library Classics, USA / CAN",
        format: "Paperback",
        num_pages: 279,
        rating: 4.25,
        rating_count: 2453620,
        review_count: 54322,
        genres: "Classics, Fiction, Romance",
        genre_list: "Classics,Fiction,Romance",
        image_url: "https://images.gr-assets.com/books/1320399351l/1885.jpg",
        Quote1: "“A lady's imagination is very rapid; it jumps from admiration to love, from love to matrimony in a moment.”",
        Quote2: "“It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.”",
        Quote3: "“I must learn to be content with being happier than I deserve.”",
        url : "/"
    },
    {
        id: 5,
        title: "Twilight",
        authors: "Stephenie Meyer",
        description: "About three things I was absolutely positive.First, Edward was a vampire.Second, there was a part of him—and I didn't know how dominant that part might be—that thirsted for my blood.And third, I was unconditionally and irrevocably in love with him.In the first book of the Twilight Saga, internationally bestselling author Stephenie Meyer introduces Bella Swan and Edward Cullen, a pair of star-crossed lovers whose forbidden relationship ripens against the backdrop of small-town suspicion and a mysterious coven of vampires. This is a love story with bite.",
        edition: "",
        format: "Paperback",
        num_pages: 498,
        rating: 3.58,
        rating_count: 4281268,
        review_count: 97991,
        genres: "Young Adult, Fantasy, Romance, Paranormal, Vampires, Fiction, Fantasy, Paranormal",
        genre_list: "Young Adult,Fantasy,Romance,Paranormal,Vampires,Fiction",
        image_url: "https://images.gr-assets.com/books/1361039443l/41865.jpg",
        Quote1: "“I like the night. Without the dark, we'd never see the stars.”",
        Quote2: "“I decided as long as I'm going to hell, I might as well do it thoroughly.”",
        Quote3: "“When life offers you a dream so far beyond any of your expectations, it’s not reasonable to grieve when it comes to an end.”",
        url : "/"
    }
]
const Slider = () =>{
    const [current, setCurrent] = useState(0)

    // useEffect(() => {
    //     const interval = setInterval(()=>{
    //         setCurrent(prev=>(prev === slides.length-1 ? 0 : prev+1))
    //     },3000)
    //     return () => clearInterval(interval);
    // }, []);
    return (
        <div className="h-[calc(100vh-80px)] overflow-hidden">
            <div className="w-max h-full flex transition-all ease-in-outduration-1000" style={{transform:`translateX(-${current* 100}vw)`}}>
                {slides.map((slide) => (
                    <div className="bg-gray-50 w-screen h-full flex flex-col gap-16 xl:flex-row" key={slide.id}>
                        {/*TEXT CONTAINER*/}
                        <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
                            <h2 className="text-xl lg:text-3xl 2xl:text-5xl">{slide.description}</h2>
                            <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">{slide.title}</h1>
                            <Link href={slide.url}>
                                <button className="rounded-md bg-black text-white py-3 px-4">SHOP NOW</button></Link>
                        </div>
                        {/*IMAGE CONTAINER*/}
                        <div className="h-1/2 xl:w-1/2 xl:h-full relative">
                            <Image src={slide.image_url} alt="" fill sizes="100%" className="object-cover"/>

                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute m-auto left-1/2 bottom-8 gap-4 flex">
            {slides.map((slide,index)=>(
                    <div className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${current === index ? "scale-150":""}`} key={slide.id} onClick={() => setCurrent(index)}>
                        {current === index && (<div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>)}
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default Slider