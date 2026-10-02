"use client";

import { GymContext } from "@/app/context/GymContext";
import { useContext } from "react";
import { toast } from "react-toastify";

const SaveCardBtn = ({CardDetails}) => {
    const { savelist,  setSaveList } = useContext(GymContext)

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
              <button className="bg-yellow-300 text-black p-2 border border-black rounded text-sm font-bold"  onClick={() => handleSaveList()}> Save for later</button>
        </div>
    );
};

export default SaveCardBtn;