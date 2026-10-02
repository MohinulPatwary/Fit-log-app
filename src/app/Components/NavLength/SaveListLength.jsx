'use client';
import { GymContext } from '@/app/context/GymContext';
import Link from 'next/link';
import React, { useContext } from 'react';


const SaveListLength = () => {
    const { saveList } = useContext(GymContext);
    return (
     <Link href ="/myplan">
              <div className="flex items-center gap-2 text-white">
            <span className="text-sm">Saved</span>

            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-lime-400 text-[11px] font-bold text-black">
                {saveList?.length || 0}
            </span>
        </div>
        </Link>
    );
};

export default SaveListLength;