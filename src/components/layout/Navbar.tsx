"use client"
import { div, head } from "framer-motion/client"
import ProfilePage from "../sections/Profile"
import Link from "next/link"
import { Button } from "../ui/button"
import { useState } from "react"

const pages = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Experience", href: "/experience" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact Me", href: "/contact" },
]



export default function Navbar() {
    const [click, setClick] = useState('home')
    

    return (
        // <div className="px-3">
        // <nav className="flex bg-[#252A34]/85 backdrop-blur-md justify-center mt-5 p-3 rounded-2xl max-w-2xl mx-auto text-white body-font font-bold fixed">
        //         <ul className="flex gap-3">
        //             {/* Home */}
        //             <li><Link href="/"><Button onClick={() => setClick('home')} className={`
        //                 ${click === 'home' ? 'body-font underline font-bold cursor-pointer text-[#F38181] sm:text-xl' : 'hover:text-[#F38181] body-font font-bold sm:text-xl cursor-pointer'}`}>Home</Button></Link></li>

        //                 {/* About */}
        //             <li><Link href="/about"><Button onClick={() => setClick('about')} className={`${click === 'about' ? 'body-font underline font-bold cursor-pointer text-[#F38181] sm:text-xl' : 'hover:text-[#F38181] body-font font-bold sm:text-xl cursor-pointer'}`}>About</Button></Link></li>
        //             <li><Link href="/experience"><Button onClick={() => setClick('experience')} className={`${click === 'experience' ? 'body-font underline font-bold cursor-pointer text-[#F38181] sm:text-xl' : 'hover:text-[#F38181] body-font font-bold sm:text-xl cursor-pointer'}`}>Experience</Button></Link></li>
        //             <li><Link href="/contact"><Button onClick={() => setClick('contact')} className={`${click === 'contact' ? 'body-font underline font-bold cursor-pointer text-[#F38181] sm:text-xl' : 'hover:text-[#F38181] body-font font-bold sm:text-xl cursor-pointer'}`}>Contact Me</Button></Link></li>
        //             <li><Link href="/portfolio"><Button onClick={() => setClick('portfolio')} className={`${click === 'portfolio' ? 'body-font underline font-bold cursor-pointer text-[#F38181] sm:text-xl' : 'hover:text-[#F38181] body-font font-bold sm:text-xl cursor-pointer'}`}>Portfolio</Button></Link></li>
        //         </ul>
        // </nav>
        // </div>

        <header className="fixed top-5 w-full z-50 flex justify-center px-2">
            <nav className="bg-[#252A34]/85 backdrop-blur-md rounded-4xl w-full max-w-2xl mx-auto px-3 py-2 text-white font-bold">

                {/* Desktop */}
                <ul className="flex justify-between">
                    {pages.map((link) => (
                        <li key={link.name}>
                            <Link href={link.href}>
                                <Button onClick={() => setClick(link.name.toLowerCase())} className={`
                                    ${click === link.name.toLowerCase()
                                    ? "underline cursor-pointer text-[#F38181]" : "hover:text-[#F38181] body-font cursor-pointer"}
                                    sm:text-lg px-2 py-2 bg-transparent text-white font-semibold cursor-pointer
                                `}>
                                {link.name}


                                </Button>            
                            </Link>

                        </li>

                    ))}


                </ul>

            </nav>





        </header>



    )
}