import React from 'react';
import Image from 'next/image';

export default function HeroSection() {
    return (

        <div className="container mx-auto px-4 py-12 flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
            <div className="w-full md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left gap-4">
                <p className="text-[#C2F800] text-sm font-bold uppercase tracking-widest">
                    Workout Library
                </p>
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-black leading-tight uppercase">
                    Train with intent.<br />
                    Log every set.
                </h1>
                <p className="text-gray-400 text-sm md:text-base max-w-md leading-relaxed">
                    {"FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up."}
                </p>
                <button
                    type="button"
                    className="mt-2 bg-[#C2F800] text-black font-bold text-sm tracking-wider uppercase px-8 py-3 rounded-md hover:bg-[#b0df00] transition-colors duration-200 shadow-lg"
                > Browse Workouts
                </button>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative w-62.5 h-62.5 sm:w-75 sm:h-75 md:w-87.5 md:h-87.5">
                    <Image
                        src="/assets/banner.png"
                        alt="FitLog Banner"
                        width={350}
                        height={350}
                    />
                </div>
            </div>

        </div>
    );
}
