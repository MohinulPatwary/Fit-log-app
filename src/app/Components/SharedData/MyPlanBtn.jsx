"use client";

import { GymContext } from "@/app/context/GymContext";
import { useContext } from "react";

const MyPlanBtn = ({CardDetails}) => {
    const { gymPlan , setGymPlan } = useContext(GymContext)

    const handleMyPlan = () => {
    console.log("read book btn triggered", CardDetails);

    
    setGymPlan([...gymPlan, CardDetails]);
    }
    return (
        <div>
              <button className="bg-yellow-300 text-black p-2 border border-black rounded text-sm font-bold"  onClick={() => handleMyPlan()}> Add to todays pla</button>
        </div>
    );
};

export default MyPlanBtn;