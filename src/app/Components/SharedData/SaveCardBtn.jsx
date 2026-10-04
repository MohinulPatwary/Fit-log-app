"use client";

import { GymContext } from "@/app/context/GymContext";
import { useContext } from "react";
import { toast } from "react-toastify";

const SaveCardBtn = ({ CardDetails }) => {
    const { savelist, setSaveList } = useContext(GymContext)

    const handleSaveList = () => {
        const existingItems = savelist.filter(
            (item) => item.id === CardDetails.id
        );

        if (existingItems.length > 0) {
            toast.warning("This item is already added to the saved list!");
            return;
        }

        setSaveList([...savelist, CardDetails]);
        toast.success("Added to saved list!");
    };
    return (
        <div>
            <button className="px-6 py-3 border border-gray-400 rounded-full text-sm font-bold text-white shadow-[0_0_15px_rgba(156,163,175,0.3)]
             transition-all duration-300 ease-in-out hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] hover:-translate-y-0.5 active:translate-y-0]" 
             onClick={() => handleSaveList()}>
                 Save for later
                 </button>
        </div>
    );
};

export default SaveCardBtn;