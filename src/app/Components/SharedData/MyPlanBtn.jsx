"use client";

import { GymContext } from "@/app/context/GymContext";
import { useContext } from "react";
import { toast } from "react-toastify";

const MyPlanBtn = ({ CardDetails }) => {
    const { gymPlan, setGymPlan } = useContext(GymContext)

    const handleMyPlan = () => {
        const existingItems = gymPlan.filter(
            (item) => item.id === CardDetails.id
        );

        if (existingItems.length > 0) {
            toast.warning("This item is already added to today's plan!");
            return;
        }

        setGymPlan([...gymPlan, CardDetails]);
        toast.success("Added to today's plan!");
    };

    return (
        <div>
            <button className="bg-[#CCFF00] text-black p-4 border
             border-black rounded-full text-sm font-bold 
             hover:-translate-y-0.5 active:translate-y-0]" 
            onClick={() => handleMyPlan()}>{` Add to today's plan`}</button>
        </div>
    );
};

export default MyPlanBtn;