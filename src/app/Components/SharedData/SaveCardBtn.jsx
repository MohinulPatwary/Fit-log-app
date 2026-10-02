"use client";

import { GymContext } from "@/app/context/GymContext";
import { useContext } from "react";

const SaveCardBtn = ({CardDetails}) => {
    const { savelist,  setSaveList } = useContext(GymContext)

    const handleSaveList = () => {
    console.log("read book btn triggered", CardDetails);
    setSaveList([...savelist, CardDetails]);
    }
    return (
        <div>
              <button className="bg-yellow-300 text-black p-2 border border-black rounded text-sm font-bold"  onClick={() => handleSaveList()}> Save for later</button>
        </div>
    );
};

export default SaveCardBtn;