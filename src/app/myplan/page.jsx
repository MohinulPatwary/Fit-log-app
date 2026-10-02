"use client";

import { useContext } from "react";
import { GymContext } from "../context/GymContext";
import MyPlanCard from "./MyPlanCard";
import SaveCardList from "./SaveCardList";


const MyPlanPage = () => {
    const { gymPlan, savelist } = useContext(GymContext);
    console.log("savelist in MyPlanPage", savelist);
    return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

  {/* Header */}
  <div className="mb-6">
    <h1 className="text-2xl font-bold tracking-wide text-white sm:text-3xl">
      MY PLAN
    </h1>

    <p className="mt-1 text-sm text-zinc-400 sm:text-base">
      Cap of five lifts for today. Finish them, then load more.
    </p>
  </div>

  {/* Tabs */}
  <div className="w-full">

    <div className="tabs tabs-box w-full bg-transparent p-0">

      {/* My Plan */}
      <input
        type="radio"
        name="my_tabs_6"
        className="tab text-zinc-400"
        aria-label="My Plan"
      />

      <div className="tab-content bg-transparent p-3 sm:p-5">

        <div className="space-y-4">
          {gymPlan.map((planCard) => (
            <MyPlanCard
              key={planCard.id}
              planCard={planCard}
            />
          ))}
        </div>

      </div>


      {/* Saved */}
      <input
        type="radio"
        name="my_tabs_6"
        className="tab text-zinc-400"
        aria-label="Saved"
        defaultChecked
      />

      <div className="tab-content bg-transparent p-3 sm:p-5">

        <div className="space-y-4">
          {savelist.map((planCard) => (
            <SaveCardList
              key={planCard.id}
              planCard={planCard}
            />
          ))}
        </div>

      </div>

    </div>

  </div>

</div>
    );
};

export default MyPlanPage;