import React from 'react';
import { useState } from 'react';
import { work_experience } from '@/components/data/experience';
import { ibmPlex, bebasNeue } from '@/components/sections/Profile';

export default function ExperienceSection() {
   
    return (
        <div>
            <div className='pt-20 px-4'>
                <h2 className={`${bebasNeue.className} text-8xl sm:text-9xl text-[#FA7E7E]`}>Farizky's</h2>
                <h2 className={`${bebasNeue.className} text-4xl sm:text-4xl text-[#FA7E7E]`}>Professional Credibility</h2>
            </div>
        <div className='px-4 py-12 pt-12 max-w-6xl mx-auto h-screen flex gap-3'>
            
            {/* Experience */}
            <div className='flex-1 overflow-y-auto px-2 space-y-3 border h-fit border-gray-200 shadow-sm hover:shadow-md transition-shadow'>
                <h2 className={`text-3xl font-bold mb-5 underline ${bebasNeue.className}`}>Experience</h2>
                {work_experience.map((value, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition">
                            <div className="font-bold text-lg">{value.role}</div>
                            <div className="text-sm italic text-gray-600">
                            {value.company} ({value.year})
                            </div>
                            <p className="text-sm mt-2 leading-relaxed text-gray-700">
                            {value.responsibility}
                            </p>
                        </div>
                        ))}
            </div>

            {/* Testimonial & Skills */}
            <div className='w-1/3 flex flex-col justify-start'>
                {/* Testimonial */}
                <div className='border border-gray-300 rounded-lg p-5 shadow-sm mb-6'>
                    <p className='text-xs italic text-gray-700'>"Very timely in execution, and highly communicative."</p>
                    <div className='text-right text-xs mt-2 text-gray-500 font-bold'> Corazon, CEO</div>
                </div>

                <div>
                    <h2 className={`text-xl font-bold mb-2 ${bebasNeue.className} underline`}>Skills & Tools</h2>
                    <ul className="text-sm text-gray-700 space-y-1">
                        <li>HTML, CSS</li>
                        <li>JavaScript, React, Node.js, Express</li>
                        <li>Python, Golang</li>
                        <li>Docker, Git, Jenkins</li>
                    </ul>
                </div>





            </div>




        </div>
        </div>
        
    )
}