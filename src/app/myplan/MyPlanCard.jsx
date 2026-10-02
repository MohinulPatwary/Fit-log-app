"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { GymContext } from '@/app/context/GymContext';

const MyPlanCard = ({ planCard }) => {

  const { gymPlan, setGymPlan } = useContext(GymContext);

  const handleRemovePlan = () => {
    const updatedPlan = gymPlan.filter(
      (item) => item.id !== planCard.id
    );

    setGymPlan(updatedPlan);

    toast.error("Removed from today's plan!");
  };

  const handleMarkAsDone = () => {
    const updatedPlan = gymPlan.filter(
      (item) => item.id !== planCard.id
    );

    setGymPlan(updatedPlan);

    toast.error("Task completed");
  };
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-4">
        <div className="w-full rounded-2xl border border-zinc-800 bg-[#12151b] p-4 sm:p-5">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            <div className="flex min-w-0 items-center gap-4">

              <div className="h-20 w-28 shrink-0 overflow-hidden rounded-xl sm:h-24 sm:w-36">
                <Image
                  src={planCard.image}
                  alt={planCard.name}
                  width={200}
                  height={200}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="min-w-0">
                <h1 className="truncate text-sm font-bold uppercase tracking-wide text-white sm:text-base">
                  {planCard.name}
                </h1>
                <p className="mt-1 text-xs text-zinc-400 sm:text-sm">
                  {planCard.equipment}
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-400">
                  <span>🕘 {planCard.duration}</span>
                  <span>🔥 {planCard.caloriesBurned} kcal</span>
                  <span>⭐ {planCard.rating}</span>
                </div>
              </div>
            </div>

            <div className="flex w-full items-center gap-2 lg:w-auto">
              <Link href={`/fit-locks/${planCard.id}`}>
                <button
                  className="
                    flex-1 rounded-full
                    border border-zinc-700
                    px-4 py-2
                    text-xs font-medium
                    text-zinc-300
                    transition
                    hover:border-zinc-500
                    hover:bg-zinc-900
                    hover:text-white
                    sm:flex-non">
                  View Details
                </button>
              </Link>

              <button
                className="
                  flex-1 rounded-full
                  bg-lime-400
                  px-4 py-2
                  text-xs font-semibold
                  text-black
                  transition
                  hover:bg-lime-300
                  sm:flex-none"
                onClick={handleMarkAsDone}>
                ✓ Mark as Done
              </button>

              <button
                className="
                  shrink-0
                  px-2
                  text-xl
                  text-white
                  transition
                  hover:text-red-400"
                onClick={handleRemovePlan}>
                ×
              </button>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPlanCard;