import Link from 'next/link';
import React from 'react';

const EmptyData = () => {
    return (
        <div className="w-full h-64 flex flex-col items-center justify-center text-center text-[#c9d1d9] border-2 border-dashed border-gray-500">
            <div>
                <h1 className="text-2xl font-bold tracking-wide text-white sm:text-3xl">
                    NOTHING HERE YET
                </h1>
                <p className="mt-1 text-sm text-zinc-400 sm:text-base">
                    Browse the library and add a lift to get today moving.
                </p>
            </div>
            <Link href="/">
                <button className="mt-4 rounded-md bg-[#CCFF00] px-4 py-2 text-sm font-medium text-black hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2">
                    Go to workouts
                </button>
            </Link>
        </div>
    );
};

export default EmptyData;