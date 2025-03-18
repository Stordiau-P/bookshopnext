"use client"

import Image from "next/image";
import React from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import CartModal from "@/components/CartModal";

const NavIcons = () => {
    const [isProfileOpen, setIsProfileOpen] = React.useState(false);
    const [isCartOpen, setIsCartOpen] = React.useState(false);
    const router = useRouter()
    // TEMPORARY
    const isLoggedIn = false

    const handleProfile = ()=>{

        if(!isLoggedIn){
            router.push("/login");
        }
        setIsProfileOpen((prev) => !prev)
    }
    return (
        <div className='flex items-center gap-4 xl:gap-6 relative' onClick={() => setIsCartOpen((prev) => !prev)}>
            <Image src="/profile.png" alt="profile picture" width={22} height={22} className="cursor-pointer" onClick={handleProfile}/>
            {isProfileOpen && (<div className="absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
                <Link href="/">Profile</Link>
                <div className="mt-2 cursor-pointer">Logout</div>

            </div>)}
            <div className="relative cursor-pointer">
            <Image src="/cart.png" alt="cart picture" width={22} height={22} className="" />
            <div className="absolute -top-3 -right-3 w-5 h-5 bg-red-500 rounded-full text-white text-sm flex items-center justify-center">2</div>
            </div>
            {isCartOpen && <CartModal/>}
        </div>
    )
}

export default NavIcons