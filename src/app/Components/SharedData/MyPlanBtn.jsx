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
            <button className="bg-yellow-300 text-black p-2 border border-black rounded text-sm font-bold" onClick={() => handleMyPlan()}> Add to todays pla</button>
        </div>
    );
};

export default MyPlanBtn;