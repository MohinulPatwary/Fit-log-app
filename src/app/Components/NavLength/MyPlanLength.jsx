"use client";

import { GymContext } from '@/app/context/GymContext';
import Link from 'next/link';
import React, { useContext } from 'react';

const MyPlanLength = () => {
    const { gymPlan } = useContext(GymContext);
    return (
        <Link href="/myplan">
            <div className="flex items-center gap-2 text-white">
                <span className="text-sm">Plan</span>

                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-lime-400 text-[11px] font-bold text-black">
                    {gymPlan.length}
                </span>
            </div>
        </Link>
    );
};

export default MyPlanLength;