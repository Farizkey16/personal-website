"use client"
import React from 'react';
import { useState, useEffect } from 'react';
import { apiCall } from '@/utils/apiHelper';
import { bebasNeue, ibmPlex } from '@/components/sections/Profile';
import { section } from 'framer-motion/client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { slugify } from '@/utils/slugify';


type PortfolioItem = {
    title: string;
    technologies: string[];
    description: any;
    img: string;
    
};

export default function PortfolioSection() {

    const [portfolio, setPortfolio] = useState<PortfolioItem[]>([])

    useEffect(() => {
        const fetch_portfolio = async () => {
           
        try {
            const portfolio_data = await apiCall.get("/api/data/portfolio-data");
            setPortfolio(portfolio_data.data.map((value: any) => ({
                    title: value.title,
                    technologies: value.technologies,
                    description: value.description,
                    img: value.img
            })))
        } catch (e) {
            alert(e)
        }
    
        } 
        
    fetch_portfolio()
    }, [])
   
    return (
        <section className='container mx-auto px-4 py-10'>
      
                        <h2 className={`text-3xl font-bold mb-8 pt-12 underline ${bebasNeue.className}`}>Portfolio</h2>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {portfolio.map((value, index) => (
                                <div
                                    key={index}
                                    className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition">
                                    <div><img src={`${value.img}`} className='object-cover rounded-lg mb-5'></img></div>
                                    <div className="font-bold text-lg">{value.title}</div>
                                    <div className="text-sm italic text-gray-600">
                                    {value.technologies}
                                    </div>
                                    <p className="text-sm mt-2 leading-relaxed text-gray-700">
                                    {value.description}
                                    </p>
                                    <Button variant="default" size="default" className='cursor-pointer bg-[#08D9D6] text-[#252A34] hover:bg-[#05c0be] my-3'><Link href={`/portfolio/${slugify(value.title)}`}>See More</Link></Button>
                                </div>
                         ))}
                         </div>
                    
        </section>
        
    )



}